"use client";

import Script from "next/script";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const upsellClass = "flex flex-auto justify-center items-center overflow-hidden -mr-3";
const blackClass = "scale-110 !max-h-48 upsell"

export default function HotmartUpsell({ black }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1750);
  }, []);

  const initCheckout = () => {
    if (typeof checkoutElements !== 'undefined') {
      checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
    } else {
      console.error("checkoutElements não está disponível.");
    }
  };

  const upsellClassName = black ? `${upsellClass} ${blackClass}` : upsellClass;

  return (
    <div className="flex justify-center rounded-xl shadow-lg relative overflow-hidden border-4 border-green-500 bg-[#F7F9FA]">
      {black && (
        <>
          <div className="flex top-0 w-full justify-center items-end absolute text-center px-5 pt-5 pb-3 z-50 text-gray-950 bg-[#F7F9FA]">
            <span className="text-xs font-semibold uppercase opacity-0">¡Toca el botón para recibir ahora! 👇</span>
          </div>
          <div className="flex bottom-0 w-full justify-center items-start absolute text-center px-5 pt-3 pb-5 z-50 text-gray-950 bg-[#F7F9FA]">
            <span className="text-xs font-semibold uppercase opacity-0">¡Estamos ansiosos por comenzar! 🎉</span>
          </div>
          {loading && (
            <div className="flex justify-center items-center top-0 w-full h-full absolute text-center z-40 text-gray-950 bg-[#F7F9FA]">
              <Loader2 size={50} className="animate-spin opacity-20" />
            </div>
          )}
        </>
      )}
      <div id="hotmart-sales-funnel" className={upsellClassName} />
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={initCheckout}
      />
    </div>
  );
}