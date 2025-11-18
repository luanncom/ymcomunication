import Image from 'next/image';
import { CommentsData } from '@/libs/comments-data';
import React, { useState, useEffect } from 'react';

export default function Comments() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const duration = 20000; // 5 segundos total
  const intervalStep = 50; // intervalo de atualização em ms (ajuste conforme preferir)

  useEffect(() => {
    const stepSize = 100 / (duration / intervalStep);

    const intervalId = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + stepSize;
        if (newProgress === 100) {
          // Reseta a barra e vai para o próximo comentário
          setCurrentIndex((oldIndex) => (oldIndex + 1) % CommentsData.length);
          return 0;
        }
        return newProgress;
      });
    }, intervalStep);

    return () => clearInterval(intervalId);
  }, []);

  // Comentário atual
  const comment = CommentsData[currentIndex];

  return (
    <div className="flex flex-col bg-white rounded-xl border mt-3">
      <div className="flex items-center justify-between text-gray-600 text-sm border-b p-4">
        <div className="inline-flex items-center justify-center gap-1.5">
          <svg
            aria-hidden="true"
            className="w-5 h-5 fill-current text-[#3A559F]"
            viewBox="0 0 448 512"
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
          </svg>
          <span className="hidden sm:inline">Plugin Social Facebook</span>
          <span className="inline sm:hidden">Facebook</span>
        </div>
        <div>{`${currentIndex + 1} of ${CommentsData.length} comments`}</div>
      </div>
      <div className="h-1 w-full bg-gray-100">
        <div
          className="h-full bg-gray-300 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className={`p-4 ${progress < 97 && 'appear'}`}>
        <div className="flex items-start gap-3 mb-4">
          <Image
            width={40}
            height={40}
            src={comment.avatar}
            alt={comment.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-semibold">{comment.name}</div>
            <div className="text-xs text-gray-500">{comment.time}</div>
            <div className="text-sm mt-1">{comment.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};  