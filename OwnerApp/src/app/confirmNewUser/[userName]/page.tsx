"use client";

import React, { MouseEvent, useEffect, useState } from "react";
import { confirmSignUp, signOut } from "@aws-amplify/auth";
import { useAuthContext } from "@/context/auth/AuthContext";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useRouter, useParams } from "next/navigation";

const VerificationPage = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const urlParams = useParams();

  const [code, setCode] = useState("");

  let unsubscribe = toast.onChange(() => {});

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  const mutation = useMutation(
    async () => {
      const userName = urlParams.userName as string;

      if (!userName || typeof userName !== "string") {
        throw new Error("Invalid user name");
      }

      await confirmSignUp({
        confirmationCode: code,
        username: userName.replace("%40", "@"),
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
        const successMessage = "Successfully confirmed account! Please login.";

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
            signOut();
            router.push("/login");
          }
        });
      },
    }
  );

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();

    if (!code) {
      toast("Verification code required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });
    }

    mutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter your verification code
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="code" className="sr-only">
                Verification Code
              </label>
              <input
                id="code"
                name="code"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
