"use client";

import Button from "@/components/button";
import Balance from "@/components/balance";
import Confetti from "@/components/confetti";
import { useState } from "react";
import { useLayer } from "@/context/layer-provider";
import { CheckCheck, Loader2 } from "lucide-react";
import Logo from "@/components/logo";

export default function Page() {

  // IMPORT CONTEXT DATA
  const userLayerData = useLayer();

  // USER LAYER DATA
  const content = userLayerData.content;
  const userPromoLink = userLayerData.promoLink;

  // SET COMPONENT STATES
  const [active, setActive] = useState<boolean>(false);

  // HANDLE CLICK
  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 750);
  };

  return (
    <>
      <div className="w-full text-sm bg-green-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-semibold">
            Wait! You&apos;ve just gotten a <u>SUPER DISCOUNT</u>!
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full text-sm max-w-xl gap-6 px-5 py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <Balance
            page={5}
            content={content}
          />
        </div>
        <div className="flex flex-col text-center rounded-3xl bg-gradient-to-t appear border-t gap-6 px-6 py-7 -mb-5 from-gray-100 to-white border-gray-300">
          <span className="text-lg sm:text-xl font-semibold tracking-tight">Wait! You&apos;ve just gotten a <u>SUPER DISCOUNT</u>!</span>
          <span>You&apos;ve just gotten a <strong className="text-red-500">super discount</strong> so don&apos;t miss this unique opportunity.</span>
          <span>⬇️ Just this page ⬇️</span>
          <div className="flex flex-col gap-1.5 rounded-lg border-2 border-dashed p-4 bg-green-50 border-green-500">
            <div className="text-sm">
              <span className="leading-none">From <strong className="line-through">US$ 27,00</strong> for</span>
            </div>
            <span className="text-green-500 text-4xl font-bold leading-none">US$ 17,00</span>
          </div>
          <div>
            <a href={userPromoLink} className="w-full">
              <Button
                onClick={handleClick}
                disabled={active}
                className="w-full pulse !bg-green-500 !border-green-600 hover:!bg-green-500 active:!bg-green-700"
              >
                {active ? (
                  <Loader2 className="size-4 animate-spin" />
                ):(
                  <CheckCheck className="size-5" />
                )}
                <span>I WANT TO ENJOY IT!</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Confetti />
    </>
  );

};
