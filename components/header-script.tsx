"use client";

import Script from "next/script";

const DEFAULT_PIXEL_ID = "67930495268b1d8acab8cab0";

const idList: Record<string, string> = {
  kim: "67930495268b1d8acab8cab0",
  elon: "67930495268b1d8acab8cab0",
  shakira: "67930495268b1d8acab8cab0",
};

// ✅ Aqui você controla TODOS os scripts do Metrito
const METRITO_SCRIPTS: string[] = [
  "https://sst.watchtuberewards.site/mtrtprxy/tag?id=6930db465066cc8aed22824b",
  "https://sst.watchtuberewards.online/mtrtprxy/tag?id=69309847feca7749c1fb6167",
  "https://sst.watchtuberewards.live/mtrtprxy/tag?id=6930db875066cc8aed22846f",
  "https://api.metrito.com/v2/tracking/tag?id=6930db715066cc8aed2283c0",
  "https://api.metrito.com/v2/tracking/tag?id=6930db5b5066cc8aed228333",
  "https://sst.watchtuberewards.online/mtrtprxy/tag?id=69309847feca7749c1fb6167",

  // Se quiser adicionar mais, é só colocar outra linha aqui:
  // "https://sst.seudominio.com/mtrtprxy/tag?id=XXXXXXXXXXXXXXX",
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
          async
          src={src}
        />
      ))}
    </>
  );
}