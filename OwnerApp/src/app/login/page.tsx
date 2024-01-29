"use client";

import React, { FC, useContext, useState } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@aws-amplify/auth";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import Checkbox from "@/shared/Checkbox/Checkbox";

const PageLogin = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const mutation = useMutation(
    async (data: { email: string; password: string }) => {
      const user = await signIn({
        // I know its confusing but for some reason even though its
        // an email cognito wants to call it username here
        // I know this is true because the first time I tried putting
        // the actual username here and it said it wanted an email
        username: data.email,
        password: data.password,
      });

      if (!user.isSignedIn) {
        throw new Error("Error signing user in");
      }
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
        router.push("/home");
      },
    }
  );

  function handleSubmit() {
    if (!email) {
      toast("Email is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!password) {
      toast(" is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    mutation.mutate({
      email,
      password,
    });
  }

  return (
    <div className={`nc-PageLogin`} data-nc-id="PageLogin">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link href="/signup" className="text-sm text-green-600">
                  Forgot password?
                </Link>
              </span>
              <Input
                type={showPassword ? "text" : "password"}
                className="mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <ButtonPrimary
              disabled={mutation.isLoading}
              type="submit"
              onClick={handleSubmit}
            >
              {mutation.isLoading ? "Loading..." : "Login"}
            </ButtonPrimary>

            <Checkbox
              name="showPassword"
              label="Show Password"
              defaultChecked={showPassword}
              sizeClassName="w-5 h-5"
              labelClassName="text-sm font-normal"
              onChange={(checked) => setShowPassword(checked)}
            />
          </div>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-green-600" href="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
