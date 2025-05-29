'use client';

import Navbar from "@/components/main/nav";
import Link from "next/link";
import { cn } from "@/utils";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full h-full gap-3">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <h1 className="glitch-index text-[3rem] md:text-[5rem]" aria-hidden>
              <span>whoops</span>
              whoops
              <span>whoops</span>
            </h1>
          </div>
          <p className="sr-only">whoops</p>
        </div>
        <p className="text-center text-sm md:text-xl">
          an error occured. my bad!
          <br />
          <span className="bg-gray-800 text-white px-2 py-1 rounded-md font-mono">
            {error.message || "Something went wrong."}
          </span>
          <br /><br />

          <Link
            href="/"
            className="border-mdv transition-colors flex items-center justify-center bg-foreground text-background gap-2 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white"
            aria-label="go back home"
          >
            pop back to the home page
          </Link>
          <button
            onClick={() => reset()}
            className="border-mdv transition-colors flex items-center justify-center bg-foreground text-background gap-2 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white mt-2"
            aria-label="try again"
          >
            or try again
          </button>
        </p>  

      </main>
    </>
  );
}