import WhiteContent from "@/components/pages/white/home";
import HeaderScript from "@/components/header-script";
import { getUserLayer } from "@/utils/get-user-layer";
import { LayerProvider } from "@/context/layer-provider";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { headers, cookies } from "next/headers";
import "@/app/globals.css";
import Script from "next/script";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "YouTube Rewards",
  description: "This new YouTube tool is scaring experts around the world.",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ENVIRONMENT VERIFY
  const isProduction = process.env.NODE_ENV === "production";

  // GET DOMAIN ID
  const cks = await cookies();
  const hdrs = await headers();
  const host = hdrs.get("x-host") || "";
  const catParam = cks.get("xcat_valid");
  const content = catParam?.value || "";
  const params = hdrs.get("x-params") || "";

  // GET USER LAYER
  const userLayer = await getUserLayer({ cks, hdrs });

  // BODY CLASS
  const bodyClassName = `flex flex-col min-w-[350px] items-center select-none ${redHatDisplay.variable} antialiased`;

  return (
    <html lang="es">
      <head>
        <Script
          id="utmify-head"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          async
          defer
          data-utmify-prevent-subids="true"
        />
      </head>
      <body className={bodyClassName} suppressHydrationWarning>
        {/* Pixel do Facebook direto */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;
                n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1507306400498363');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* UTMify (UTMs + pixel) – sempre que estiver em produção */}
        {isProduction && <HeaderScript content={content} />}

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1507306400498363&ev=PageView&noscript=1"
          />
        </noscript>

        {userLayer === 1 ? (
          <WhiteContent />
        ) : (
          <LayerProvider
            host={host}
            layer={userLayer}
            params={params}
            content={content}
          >
            {children}
          </LayerProvider>
        )}
      </body>
    </html>
  );
}