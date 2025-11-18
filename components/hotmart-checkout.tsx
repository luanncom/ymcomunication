/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";

import Image from "next/image";
import Script from "next/script";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
// import { Nunito_Sans } from "next/font/google";

/*
// FONT IMPORT
const nunito = Nunito_Sans({
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
  subsets: ["latin"]
});
*/

export default function HotmartCheckout() {

  // COMPONENT STATES
  const [loading, setLoading] = useState(true);

  // LOADING EFFECT
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1750);
  }, []);

  // INIT CHECKOUT
  const initCheckout = () => {
    // @ts-expect-error
    if (typeof checkoutElements !== 'undefined') {
    // @ts-expect-error
      checkoutElements.init('inlineCheckout', {
        offer: '0imivxu6',
        countryIsoCode: 'US',
        locale: 'en',
        visibilityOptions: {
          hideCouponOption: '1',
        }
      }).mount('#inline_checkout');
    } else {
      console.error("checkoutElements is not available.");
    };
  };

  return (
    <div className="flex flex-col flex-auto rounded-3xl shadow-xl relative overflow-hidden border shadow-black/20 border-gray-100">
      <div className="flex items-start gap-5 mx-7 mt-7 mb-1">
        <Image
          src="/images/jenlogo.png"
          alt="Logo"
          width={200}
          height={137}
          className="flex-none w-14 aspect-square border-gray-200"
          unoptimized={true}
          priority={true}
        />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-balance mb-1">Jen Selter&apos;s Personalized Plan</span>
          <span className="text-xs line-through tracking-wider leading-none text-gray-400">From US$ 149,90 for</span>
          <div className="flex items-center gap-1 -mt-0.5">
            <span className="text-sm leading-none mt-1 text-green-600">Only</span>
            <span className="text-2xl font-semibold tracking-tighter leading-none text-green-600">US$ 24,90</span>
          </div>
        </div>
      </div>
      <div id="inline_checkout" className="flex flex-auto justify-center items-start overflow-hidden -mr-4 mt-4" />
      {/*
        <div className="text-xs font-light absolute space-y-[14.5px] bottom-0 px-8 pb-9.5 opacity-50 leading-normal tracking-normal bg-amber-300" style={{ fontFamily: nunito.style.fontFamily }}>
          <p>Have questions about the product? Please contact</p>
          <p>
            Can&apos;t complete this purchase? Please visit our Help Center<br />
            If you need to submit a request to our support team, please provide the code below:<br />
            CKTID-0000000000000-0000000000000-0000
          </p>
          <p>By clicking &quot;Buy Now&quot; I declare that I (i) understand that Hotmart is processing this order on behalf of Beast Business LLC and has no responsibility for the content and/or control over it; (ii) agree to Hotmart&apos;s Terms of Use, Privacy Policy and other company policies and (iii) am of legal age or authorized and accompanied by a legal guardian.</p>
          <p>Learn more about your purchase here.</p>
          <p>Hotmart © 2025 - All rights reserved<br />2025-06-25T10:40:19.469Z</p>
        </div>
      */}
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={initCheckout}
      />
      {loading && (
        <div className="flex justify-center items-center w-full h-full inset-0 absolute text-center z-40 text-gray-950 bg-[#F7F9FA]">
          <Loader2 size={50} className="animate-spin opacity-20" />
        </div>
      )}
    </div>
  );

};