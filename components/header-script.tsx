"use client";

import Script from "next/script";

const DEFAULT_PIXEL_ID = "67930495268b1d8acab8cab0";

const idList: Record<string, string> = {
  kim: "67930495268b1d8acab8cab0",
  elon: "67930495268b1d8acab8cab0",
  shakira: "67930495268b1d8acab8cab0",
};

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
    </>
  );
}