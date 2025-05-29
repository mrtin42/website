'use client';

import React from "react";
import { cn } from "@/utils";
import { toast } from "sonner";

const flipcardGlobalStyles = "w-full h-full absolute backface-hidden flex flex-col text-white border-1 border-white rounded-lg items-start justify-between p-4"

export default function Flipcard({ front, children }: { front: React.ReactNode, children: React.ReactNode }) {
  return (
    <>
    {/* desktop flipcard */}
      <div className="hidden md:inline-flex perspective-[1000px] w-1/2 md:w-[16rem] h-[16rem] group">
        <div className="w-full h-full transform-3d transition-transform duration-600 group-hover:rotate-y-180">
          <div className={cn(
            "flipcard-front bg-[#00000093] backdrop-blur-xs",
            flipcardGlobalStyles,
          )}>
            {front}
          </div>
          <div className={cn(
            "rotate-y-180 transition-transform duration-600 bg-[#00000048] backdrop-blur-lg",
            flipcardGlobalStyles,
          )}>
            {children}
          </div>
        </div>
      </div>
      {/* mobile toast button of same shape */}
      <div className="md:hidden w-1/2 h-[16rem]">
        <button
          className="w-full h-full bg-[#00000093] backdrop-blur-xs rounded-lg flex flex-col items-start justify-between p-4 border border-white"
          onClick={() => toast(
            <div className="flex flex-col gap-2">
              {children}
            </div>
          )}
          aria-label="Open contact card"
        >
          {front}
        </button>
      </div>
    </>
  );
}