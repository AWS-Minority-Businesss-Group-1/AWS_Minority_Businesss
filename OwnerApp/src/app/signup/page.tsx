"use client";

import React, { FC, useState } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import Checkbox from "@/shared/Checkbox/Checkbox";

function First({
  page,
  setPage,
}: {
  page: "FIRST" | "SECOND";
  setPage: React.Dispatch<React.SetStateAction<"FIRST" | "SECOND">>;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="grid grid-cols-1 gap-6">
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

      <ButtonPrimary onClick={() => setPage("SECOND")}>Next</ButtonPrimary>
    </form>
  );
}

function Second({
  page,
  setPage,
}: {
  page: "FIRST" | "SECOND";
  setPage: React.Dispatch<React.SetStateAction<"FIRST" | "SECOND">>;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessState, setBusinessState] = useState("");
  const [businessLicenceNumber, setBusinessLicenceNumber] = useState("");

  return (
    <form className="grid grid-cols-1 gap-6" action="#" method="post">
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

      <ButtonPrimary type="submit">Sign Up</ButtonPrimary>
    </form>
  );
}

const PageSignUp = () => {
  const [page, setPage] = useState<"FIRST" | "SECOND">("FIRST");

  function CurrentSignUpPage() {
    if (page === "FIRST") {
      return <First page={page} setPage={setPage} />;
    } else if (page === "SECOND") {
      return <Second page={page} setPage={setPage} />;
    }

    return <div></div>;
  }

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

export default PageSignUp;
