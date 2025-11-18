/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import Option from "@/components/option";
import { ThumbsDown, ThumbsUp } from "lucide-react";

export default function Page5({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col gap-8 text-base appear">
        <div className="rounded-3xl border shadow-lg p-6 sm:p-7 bg-gray-200 border-gray-400/10 shadow-black/5">
          <Image
            width="500"
            height="365"
            src="/thumbs/etapa4.webp"
            alt="Question"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <span className="text-lg font-semibold">Does the video thumbnail make you want to watch the video?</span>
          <span className="text-gray-600 text-sm">Select the option below ⬇️</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Option onClick={() => setPage(page + 1)}><ThumbsUp size={45} className="text-green-300" /></Option>
          <Option onClick={() => setPage(page + 1)}><ThumbsDown size={45} className="text-red-500" /></Option>
        </div>
      </div>
    </>
  );

};