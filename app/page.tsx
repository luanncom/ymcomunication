/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Logo from "@/components/logo";
import Modal from "@/components/modal";
import Page1Kim from "@/components/pages/black/kim/page1";
import Page2Kim from "@/components/pages/black/kim/page2";
import Page3Kim from "@/components/pages/black/kim/page3";
import Page4Kim from "@/components/pages/black/kim/page4";
import Page5Kim from "@/components/pages/black/kim/page5";
import Page1Rock from "@/components/pages/black/rock/page1";
import Page2Rock from "@/components/pages/black/rock/page2";
import Page3Rock from "@/components/pages/black/rock/page3";
import Page4Rock from "@/components/pages/black/rock/page4";
import Page5Rock from "@/components/pages/black/rock/page5";
import Page1Megan from "@/components/pages/black/megan/page1";
import Page2Megan from "@/components/pages/black/megan/page2";
import Page3Megan from "@/components/pages/black/megan/page3";
import Page4Megan from "@/components/pages/black/megan/page4";
import Page5Megan from "@/components/pages/black/megan/page5";
import Balance from "@/components/balance";
import { useLayer } from "@/context/layer-provider";
import { useEffect, useState } from "react";

// ROUTES KIM VARIATION
const RoutesKim: Record<number, any> = {
  1: Page1Kim,
  2: Page2Kim,
  3: Page3Kim,
  4: Page4Kim,
  5: Page5Kim,
};

// ROUTES ROCK VARIATION
const RoutesRock: Record<number, any> = {
  1: Page1Rock,
  2: Page2Rock,
  3: Page3Rock,
  4: Page4Rock,
  5: Page5Rock,
};

// ROUTES MEGAN VARIATION
const RoutesMegan: Record<number, any> = {
  1: Page1Megan,
  2: Page2Megan,
  3: Page3Megan,
  4: Page4Megan,
  5: Page5Megan,
};

// ROUTES VARIATIONS
const Routes: Record<string, any> = {
  "kim": RoutesKim,
  "rock": RoutesRock,
  "megan": RoutesMegan,
};

export default function Page() {

  // IMPORT CONTEXT DATA
  const userLayer = useLayer();

  // USER LAYER DATA
  const content = userLayer.content;

  // SET COMPONENT STATES
  const [page, setPage] = useState(1);
  const [active, setActive] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // SET PAGE CONTENT
  const PageContent = Routes[content][page];
  const isInfoPage = page === 4 || page === 5;

  // PLAY SOUND
  const handlePlaySound = () => {
    const audio = new Audio('/songs/caching.mp3');
    audio.play();
  };

  // HANDLE CLICK
  const handleClick = () => {
    setActive(true);
    if (isInfoPage) {
      setTimeout(() => {
        setPage(page + 1);
        setActive(false);
      }, 750);
    } else {
      setTimeout(() => {
        setOpenModal(true);
        handlePlaySound();
      }, 100);
    };
  };

  // NEXT PAGE
  useEffect(() => {
    if (openModal) {
      setTimeout(() => {
        setPage(page + 1);
        setActive(false);
        setOpenModal(false);
      }, 2000);
    };
  }, [openModal, page])

  return (
    <div className="flex flex-col w-full max-w-xl gap-5 px-4 py-5 pb-10">
      <div className="flex justify-between items-center">
        <Logo />
        <Balance
          page={page}
          content={content}
        />
      </div>
      <PageContent
        active={active}
        handleClick={handleClick}
      />
      {openModal && <Modal content={content} />}
      {isInfoPage && (
        <div className="flex flex-col justify-center text-center gap-3 p-4 text-gray-400/70">
          <span className="text-sm">© 2025 YouTube Rewards</span>
          <span className="text-[10px]"><u>Privacy Policy</u> | <u>Terms of use</u></span>
        </div>
      )}
    </div>
  );

};