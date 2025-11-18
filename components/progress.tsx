"use client";

import CountUp from '@/components/countUp';

export default function Progress({
  progress,
}:{
  progress: number,
}) {

  const progressBarStyle = {
    width: `0%`,
    animation: `progressBar 4s ease-out forwards`,
  };

  const progressBarAnimation = (
    <style jsx>
      {`
        @keyframes progressBar {
          0%   { width: 0%; }
          100% { width: ${progress}%; }
        }
      `}
    </style>
  );

  return (
    <div className="flex items-center w-full rounded-xl relative bg-white">
      <div className="bg-green-500 flex items-center justify-center h-5 leading-none rounded-xl transition-all duration-500 delay-500" style={progressBarStyle} />
      <span className="absolute w-1/2 translate-x-1/2 left-0 text-xs text-center font-bold text-red-50">
        <CountUp start={0} end={progress} duration={3000} /> %
      </span>
      {progressBarAnimation}
    </div>
  );
}