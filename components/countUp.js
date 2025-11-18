"use client";

import { useEffect, useState } from 'react';

function CountUp({
  start,
  end,
  duration,
}) {
  
  const [countProgress, setCountProgress] = useState(start);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentProgress = easedProgress * (end - start) + start;
      setCountProgress(currentProgress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCountProgress(end); // Assegura que o valor final seja exatamente 'end'
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [start, end, duration]);

  return Math.round(countProgress);
  
};

export default CountUp;