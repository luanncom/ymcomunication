import Image from "next/image";
import Option from "@/components/option";
import { Frown, Meh, Smile } from "lucide-react";

export default function Page({
  handleClick,
}:{
  handleClick: () => void,
}) {

  return (
    <div className="flex flex-col gap-3 sm:gap-4 text-sm appear">
      <div className="rounded-3xl border shadow-lg p-5 sm:p-6 bg-white border-gray-400/20 shadow-black/5">
        <Image
          width="500"
          height="396"
          src="/thumbs/thumb1.jpg"
          alt="Question"
          priority
          quality={60}
        />
      </div>
      <div className="flex flex-col gap-2 text-center text-balance my-4">
        <span className="text-lg font-semibold">
          What is your reaction when you see this video thumbnail?
        </span>
        <span className="text-sm text-gray-600">
          Select an option below ⬇️
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Option onClick={handleClick} className="active:!ring-green-500">
          <Smile size={45} className="text-green-400" />
        </Option>
        <Option onClick={handleClick} className="active:!ring-red-500">
          <Meh size={45} className="text-yellow-500" />
        </Option>
        <Option onClick={handleClick} className="active:!ring-red-500">
          <Frown size={45} className="text-red-500" />
        </Option>
      </div>
    </div>
  );

};