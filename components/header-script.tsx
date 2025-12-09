"use client";

import Script from "next/script";

const DEFAULT_PIXEL_ID = "67930495268b1d8acab8cab0";

const idList: Record<string, string> = {
  kim: "67930495268b1d8acab8cab0",
  elon: "67930495268b1d8acab8cab0",
  shakira: "67930495268b1d8acab8cab0",
};

// ✅ Lista final sem duplicados
const METRITO_SCRIPTS: string[] = [
  "https://sst.watchtuberewards.site/mtrtprxy/tag?id=6930db465066cc8aed22824b",
  "https://sst.watchtuberewards.online/mtrtprxy/tag?id=69309847feca7749c1fb6167",
  "https://sst.watchtuberewards.live/mtrtprxy/tag?id=6930db875066cc8aed22846f",
  "https://api.metrito.com/v2/tracking/tag?id=6930db715066cc8aed2283c0",
  "https://api.metrito.com/v2/tracking/tag?id=6930db5b5066cc8aed228333",
  "https://sst.tuberewards.xyz/mtrtprxy/tag?id=6930ee1e9e32250fa48c11b5",
  "https://sst.watchrewards.club/mtrtprxy/tag?id=6931d7e79e32250fa4924003",
];

type HeaderScriptProps = {
  content?: string;
};

export default function HeaderScript({ content }: HeaderScriptProps) {
  const pixelId = (content && idList[content]) || DEFAULT_PIXEL_ID;

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N534J7MN');
          `,
        }}
      />

      {/* Pixel ID da UTMify */}
      <Script
        id="utmify-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.pixelId = ${JSON.stringify(pixelId)};`,
        }}
      />

      {/* Script de UTMs */}
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        strategy="afterInteractive"
        data-utmify-prevent-subids=""
      />

      {/* Pixel da UTMify */}
      <Script
        id="utmify-pixel"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
      />

      {/* 🔵 Todos os pixels do Metrito */}
      {METRITO_SCRIPTS.map((src, index) => (
        <Script
          key={src}
          id={`metrito-tag-${index + 1}`}
          strategy="afterInteractive"
          src={src}
        />
      ))}

      {/* 🟡 Script CartPanda */}
      <Script
        id="cartpanda-script"
        strategy="afterInteractive"
        src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js"
      />
                  {/* 🟢 SCRIPT DE TRACKING PRÓPRIO (UTMs + CLICK ID + N8N) */}
      <Script
        id="custom-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  try {
    const urlParams = new URLSearchParams(window.location.search);

    // Garante que sempre existe um click_id, com fallback caso crypto.randomUUID não exista
    const existingClickId = localStorage.getItem("click_id");
    const newClickId =
      (window.crypto && typeof window.crypto.randomUUID === "function")
        ? window.crypto.randomUUID()
        : "clk_" + Date.now() + "_" + Math.random().toString(16).slice(2);

    const clickId = existingClickId || newClickId;

    const data = {
      click_id: clickId,
      utm_source: urlParams.get("utm_source") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_content: urlParams.get("utm_content") || "",
      utm_term: urlParams.get("utm_term") || "",
      xcat: urlParams.get("xcat") || "",
      fbclid: urlParams.get("fbclid") || "",
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem("click_id", clickId);

    fetch("https://n8n.srv1140010.hstgr.cloud/webhook/track-click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (e) {
    console.error("Tracking error:", e);
  }
})();
          `,
        }}
      />
    </>
  );
}