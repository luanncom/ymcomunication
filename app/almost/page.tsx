import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";

export default function Page() {

  return (
    <>
      <div className="w-full text-sm bg-red-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-semibold">
            Please do not close or refresh this page, as there may be errors when paying the fee!
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-xl gap-6 px-5 py-6">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-60">
            We are processing your payment…
          </span>
          <Progress progress={68} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 -mb-5 from-gray-100 to-white border-gray-300">
          <div className="font-bold">
            This offer will only be available on this page, don&apos;t miss this unique opportunity!
          </div>
          <HotmartUpsell black={false} />
        </div>
      </div>
    </>  
  );

};