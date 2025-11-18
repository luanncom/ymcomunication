/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@/components/button";
import ConfettiEffect from "@/components/confetti";
import { CirclePlay } from 'lucide-react';

export default function Page6({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-base rounded-2xl gap-7 bg-gradient-to-t appear px-8 py-10 from-gray-50 to-gray-200">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-semibold">🎁 Congratulations! 🎁</span>
          <span className="text-base font-normal">Your balance is available for immediate withdrawal! 🎉</span>
        </div>
        <div className="rounded-lg shadow-lg border p-5 bg-green-50">
          <span className="font-semibold text-base">These are your earnings for the 4 evaluations you just completed</span>
        </div>
        <div className="text-sm">
          Click on the button below and see the withdrawal guide! 👇
        </div>
      </div>
      <Button onClick={() => setPage(page + 1)} className="!bg-green-600 !border-green-700 hover:!bg-green-500">
        <CirclePlay /> Yes, withdraw my balance now!
      </Button>
      <ConfettiEffect />
    </>
  );

};