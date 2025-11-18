"use client";

import { useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';

const ConfettiEffect = () => {
  const jsConfetti = useRef();

  useEffect(() => {
    jsConfetti.current = new JSConfetti();
    jsConfetti.current.addConfetti();
  }, []);

  return null;
};

export default ConfettiEffect;