import Navbar from "@/components/main/nav";
import Link from "next/link";
import { cn } from "@/utils";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full h-full gap-3">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <h1 className="glitch-index text-[3rem] md:text-[5rem] uppercase" aria-hidden>
              <span>404 Not Found</span>
              404 Not Found
              <span>404 Not Found</span>
            </h1>
          </div>
          <p className="sr-only">not found</p>
        </div>
        <p className="text-center text-sm md:text-xl">
          ummm errrrr uhhhmmmm yeahhhh nothing here mate sorry
          <br /><br />
          <Link
            href="/"
            className="border-mdv transition-colors flex items-center justify-center bg-foreground text-background gap-2 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white"
            aria-label="pop back to the home page"
          >
            pop back to the home page
          </Link>
        </p>

      </main>
    </>
  );
}