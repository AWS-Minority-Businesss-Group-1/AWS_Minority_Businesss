import { Ban } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ErrorBoundary({ children }: any) {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Ban size={96} color="#FF0000" />
        <h1 className="text-3xl mt-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600 mt-2">
          We apologize for the inconvenience.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Go Back
        </button>
      </div>
    );
  }

  return children;
}
