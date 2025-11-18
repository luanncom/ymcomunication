/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Script from "next/script";

export default function VSLWhite() {

  return (
    <>
      <div id="vid_6733fb0afe70f3000c9296b9" style={{ position: "relative", width: "100%", padding: "84.375% 0 0", borderRadius: "20px" }}>
        <Image
          alt="Video"
          width={64}
          height={54}
          id="thumb_6733fb0afe70f3000c9296b9" src="https://images.converteai.net/51bb56e8-38bf-4e58-87dd-2429e902a5b3/players/6733fb0afe70f3000c9296b9/thumbnail.jpg"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          unoptimized
        />
        <div id="backdrop_6733fb0afe70f3000c9296b9"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)" }} />
      </div>
      <Script id="scr_6733fb0afe70f3000c9296b9" strategy="afterInteractive">
        var s=document.createElement("script"); s.src="https://scripts.converteai.net/51bb56e8-38bf-4e58-87dd-2429e902a5b3/players/6733fb0afe70f3000c9296b9/player.js", s.async=!0,document.head.appendChild(s);
      </Script>
    </>
  );
  
};