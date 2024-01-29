"use client";

import React, { FC, useEffect, useState } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import Checkbox from "@/shared/Checkbox/Checkbox";
import { signUp } from "@aws-amplify/auth";
import {
  SignupProvider,
  useSignupContext,
} from "@/context/Forms/signUpContext";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import { generateClient } from "aws-amplify/api";
import {
  createAccount as createAccountMutation,
  createUserProfile as createUserProfileMutation,
  createBusinessProfile as createBusinessProfileMutation,
} from "../../graphql/mutations";
import { useRouter } from "next/navigation";

const client = generateClient();

function First() {
  const {
    userName,
    setUserName,
    setPage,
    email,
    setEmail,
    password,
    setPassword,
    page,
  } = useSignupContext();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit() {
    if (!userName) {
      toast("Username is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!email) {
      toast("Email is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!password) {
      toast("Password is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!confirmPassword) {
      toast("Confirm password is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (password !== confirmPassword) {
      toast("Passwords must match", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    setPage("SECOND");
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">Username</span>
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-1"
        />
      </label>

      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">
          Email address
        </span>
        <Input
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1"
        />
      </label>

      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Password
        </span>
        <Input
          type={showPassword ? "text" : "password"}
          className="mt-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Confirm Password
        </span>
        <Input
          type={showPassword ? "text" : "password"}
          className="mt-1"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>

      <Checkbox
        name="showPassword"
        label="Show Password"
        defaultChecked={showPassword}
        sizeClassName="w-5 h-5"
        labelClassName="text-sm font-normal"
        onChange={(checked) => setShowPassword(checked)}
      />

      <ButtonPrimary onClick={handleSubmit}>Next</ButtonPrimary>
    </div>
  );
}

function Second() {
  interface signUpObj {
    userName: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    businessName: string;
    businessState: string;
    businessLicenceNumber: string;
  }

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    businessName,
    setBusinessName,
    businessState,
    setBusinessState,
    businessLicenceNumber,
    setBusinessLicenceNumber,
    email,
    password,
    userName,
    phoneNumber,
    setPhoneNumber,
    setPage,
  } = useSignupContext();

  const router = useRouter();

  let unsubscribe = toast.onChange(() => {});

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  const mutation = useMutation(
    async (data: signUpObj) => {
      const newUser = await signUp({
        // I know its confusing but for some reason even though its
        // an email cognito wants to call it username here
        // I know this is true because the first time I tried putting
        // the actual username here and it said it wanted an email
        username: data.email,
        password: data.password,
        options: {
          userAttributes: {
            email: data.email,
            family_name: data.lastName,
            name: data.firstName,
            preferred_username: data.userName,
            // I guess you need a country code for cognito
            // phone number validation to pass
            phone_number: "+1" + data.phoneNumber,
          },
        },
      });

      await client.graphql({
        query: createAccountMutation,
        variables: {
          input: {
            id: newUser.userId,
            username: data.userName,
            accountType: "OWNER",
            email: data.email,
          },
        },
      });

      await client.graphql({
        query: createUserProfileMutation,
        variables: {
          input: {
            id: newUser.userId,
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
          },
        },
      });

      await client.graphql({
        query: createBusinessProfileMutation,
        variables: {
          input: {
            name: data.businessName,
            businessState: data.businessState,
            licenceNumber: data.businessLicenceNumber,
          },
        },
      });
    },
    {
      onError: (err: Error) => {
        toast(err.message, {
          autoClose: 3000,
          type: "error",
          position: "bottom-right",
        });
      },
      onSuccess: () => {
        const successMessage = "Successfully created account! Please login.";

        toast(successMessage, {
          autoClose: 3000,
          type: "success",
          position: "bottom-right",
        });

        unsubscribe = toast.onChange((payload) => {
          if (
            payload.status === "removed" &&
            payload.type === "success" &&
            payload.content === successMessage
          ) {
            router.push("/login");
          }
        });
      },
    }
  );

  function handleSignUp() {
    if (!firstName) {
      toast("First name is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!lastName) {
      toast("Last name is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!phoneNumber) {
      toast("Phone number is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!businessName) {
      toast("Business name is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!businessLicenceNumber) {
      toast("Business licence number is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!businessState) {
      toast("Business state is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    mutation.mutate({
      userName,
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
      businessLicenceNumber,
      businessName,
      businessState,
    });
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <label className="block">
        <span className="text-neutral-800 dark:text-neutral-200">
          First Name
        </span>
        <Input
          type="text"
          className="mt-1"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Last Name
        </span>
        <Input
          type="text"
          className="mt-1"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Phone Number
        </span>
        <Input
          type="tel"
          className="mt-1"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>

      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Business Name
        </span>
        <Input
          type="text"
          className="mt-1"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </label>

      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Business State
        </span>
        <Input
          type="text"
          className="mt-1"
          value={businessState}
          onChange={(e) => setBusinessState(e.target.value)}
        />
      </label>

      <label className="block">
        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
          Business Licence Number
        </span>
        <Input
          type="text"
          className="mt-1"
          value={businessLicenceNumber}
          onChange={(e) => setBusinessLicenceNumber(e.target.value)}
        />
      </label>

      <div className="flex flex-row space-x-2">
        <ButtonSecondary
          onClick={() => {
            setPage("FIRST");
          }}
        >
          Back
        </ButtonSecondary>
        <ButtonPrimary onClick={handleSignUp}>Sign Up</ButtonPrimary>
      </div>
    </div>
  );
}

function CurrentSignUpPage() {
  const { page } = useSignupContext();

  if (page === "FIRST") {
    return <First />;
  } else if (page === "SECOND") {
    return <Second />;
  }

  return <div></div>;
}

const SignUp = () => {
  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <CurrentSignUpPage />

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link className="text-green-600" href="/login">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

function SignUpPage() {
  return (
    <SignupProvider>
      <SignUp />
    </SignupProvider>
  );
}

export default SignUpPage;
