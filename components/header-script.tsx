"use client";

import Script from "next/script";

const DEFAULT_PIXEL_ID = "67930495268b1d8acab8cab0"; // <- SEU PIXEL AQUI

const idList: Record<string, string> = {
  kim: "67930495268b1d8acab8cab0",
  elon: "67930495268b1d8acab8cab0",
  shakira: "67930495268b1d8acab8cab0",
};

type HeaderScriptProps = {
  content?: string;
};

export default function HeaderScript({ content }: HeaderScriptProps) {
  // Se não tiver cookie, usa o pixel padrão
  const pixelId = (content && idList[content]) || DEFAULT_PIXEL_ID;

  return (
    <>
      {/* Config da UTMify → define o pixelId */}
      <Script
        id="utmify-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.pixelId = ${JSON.stringify(pixelId)};`,
        }}
      />

      {/* Script de UTMs (captura UTMs, fbclid, gclid, etc) */}
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        strategy="afterInteractive"
        data-utmify-prevent-subids=""
      />

      {/* Pixel da UTMify (envia eventos do Meta + associa UTMs) */}
      <Script
        id="utmify-pixel"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
      />
    </>
  );
}