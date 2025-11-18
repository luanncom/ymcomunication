import Button from "@/components/button";
import ConfettiEffect from "@/components/confetti";
import { CheckCheck, Loader2 } from 'lucide-react';

export default function Page({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-sm rounded-3xl gap-7 bg-gradient-to-t appear border-t px-8 py-8 from-gray-50 to-gray-200/50 border-gray-300">
        <div className="flex flex-col gap-4 text-balance">
          <span className="text-xl font-semibold">
            Congratulations!
          </span>
          <span>
            Your balance is available for immediate withdrawal! 🎉
          </span>
        </div>
        <div className="flex flex-col gap-3 text-balance rounded-lg border-2 border-dashed p-5 bg-green-50 border-green-500">
          <span className="font-bold uppercase">
            ✅ You&apos;ve already won US$ 180!
          </span>
          <span>
            These are your earnings for the 3 surveys you just completed.
          </span>
        </div>
        <div className="text-balance">
          <span>
            Click the button below and see the immediate withdrawal guide! 👇
          </span>
        </div>
      </div>
      <Button
        onClick={handleClick}
        disabled={active}
        className="pulse !bg-green-600 !border-green-700 hover:!bg-green-500"
      >
        {active ? (
          <Loader2 className="size-5 animate-spin" />
        ):(
          <CheckCheck className="size-5" />
        )}
        <span>Withdraw my balance now!</span>
      </Button>
      <ConfettiEffect />
    </>
  );

};