import CountUp from '@/components/countUp';
import Comment from "@/components/comments/comment";
import VSLGray from '@/components/videos/vsl-gray';
import CommentReply from "@/components/comments/comment-reply";
import { CircleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Page7() {

  const [visible, setVisible] = useState<boolean>(false);
  const videoId = "6708631ec0f437000cf541d0";

  // VIDEO VERIFY
  useEffect(() => {
    if (!visible) {
      const intervalId = setInterval(() => {
        const storedVideoTime = Number(localStorage.getItem(videoId));
        if (storedVideoTime > 850) {
          setVisible(true)
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [videoId, visible]);

  return (
    <>
      <div className="flex flex-col text-center text-base rounded-2xl gap-5 bg-gradient-to-t appear px-2 pt-7 pb-2 from-gray-50 to-gray-200">
        <span className="text-base sm:text-xl font-semibold tracking-tight">
          🚨 ¡ATTENTION! Watch the video until the end to understand how to withdraw your available balance. ⬇️
        </span>
        {visible && (
          <div className="flex flex-none max-w-max justify-center items-center text-sm font-bold rounded-lg border-2 animate-pulse gap-1.5 mx-auto px-2.5 py-2 z-50 text-red-800 border-red-200 bg-red-100">
            <CircleAlert size={20} className="flex-none" />
            <div>
              <span>ONLY</span>
              <span className="rounded px-2 py-0.5 mx-1.5 text-white bg-red-500">
                <CountUp start={100} end={3} duration={150000} />
              </span>
              <span>PLACES!</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-center flex-col gap-8 relative">
        <VSLGray />
      </div>

      <div className="text-sm text-center p-2">
        🔊 Check if your sound is activated
      </div>

      <div className="bg-white rounded-xl border">
        <div className="flex items-center justify-between text-gray-600 text-sm border-b p-4">
          <div className="inline-flex items-center justify-center gap-1.5">
            <svg aria-hidden="true" className="w-5 h-5 fill-current text-[#3A559F]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
            </svg>
            <span className="hidden sm:inline">
              Social Facebook Plugin
            </span>
            <span className="inline sm:hidden">
              Facebook
            </span>
          </div>

          <div>
            11 of 2143 comments
          </div>
        </div>

        <div>
          <Comment
            avatar="/comments/person-1.webp"
            name="Sofia García"
            time="Hace 7 min"
            content="Chicos, ¡¡¡estoy impresionado!!! Vi el video completo y recibí acceso a la herramienta. Lo usé durante unos 20 minutos y ya logré retirar US$ 277. Le recomiendo que vea el video completo para recibir acceso a la herramienta también."
            reply
          >
            <CommentReply
              avatar="/comments/person-2.webp"
              name="Julia Alvarenga"
              time="Hace 5 min"
              content="¿Realmente funcionó, amiga?"
            />
            <CommentReply
              avatar="/comments/person-1.webp"
              name="Sofia García"
              time="Hace 4 min"
              content="¡Siii amiga! Mira el video hasta el final, vas a ver que es súper fácil hacer el retiro y llega rapidito."
            />
          </Comment>
          <Comment
            avatar="/comments/person-3.webp"
            name="Carlos Dal Belo"
            time="Hace 15 min"
            content="Llevo usando esta nueva herramienta de YouTube por 3 meses y desde entonces no he dejado de recibir transferencias todos los días, solo por ayudar a YouTube a analizar los anuncios que coloca en sus sitios web asociados. Estoy ganando unos 200 dólares al día como mínimo."
          />
          <Comment
            avatar="/comments/person-4.webp"
            name="Bernardo Torres"
            time="Hace 18 min"
            content="Estoy ganando tanto dinero con YouTube que voy a poder comprar mi motito nueva, pruébenlo gente porque realmente funciona..."
          />
          <Comment
            avatar="/comments/person-5.webp"
            name="María Acosta"
            time="Hace 21 min"
            content="¿Alguien aquí lo probó y le funcionó?"
            reply
          >
            <CommentReply
              avatar="/comments/person-6.webp"
              name="Martina Lopez"
              time="Hace 23 min"
              content="¡Hola chica! Mira el video hasta el final, yo lo vi y la plata cayó rapidito en mi cuenta, ¡gané 420 dólares solo hoy!"
            />
          </Comment>
          <Comment
            avatar="/comments/person-7.webp"
            name="Hanna Larissa"
            time="Hace 1h"
            content="¡Hola a todos! Súper recomiendo esta nueva herramienta de YouTube, es perfecta. El dinero cae en la cuenta al instante, ¡Dioooos mío, Maravillooosooo! Gracias, YouTube 🤑💰"
          />
        </div>
      </div>
    </>
  );
}
