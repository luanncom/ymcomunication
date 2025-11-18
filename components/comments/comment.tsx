import Image from "next/image";

export default function Comment({
  avatar,
  name,
  time,
  content,
  reply,
  children,
}:{
  avatar: string,
  name: string,
  time: string,
  content: string,
  reply?: boolean,
  children?: React.ReactNode,
}) {
  
  return (
    <div className="flex items-start space-x-3 px-5 py-6 border-b border-gray-200">
      <Image
        width={36}
        height={36}
        src={avatar}
        alt={name}
        className="w-9 h-9 rounded-full"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-[#3A559F] text-sm">{name}</h3>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm mt-0.5 tracking-normal">{content}</p>
        <div className="flex gap-1 mt-2 text-xs text-[#3A559F]">
          <button type="button" className="hover:underline">Reply</button>
          <button type="button" className="hover:underline">· Like</button>
          <span className="text-xs text-gray-500">· {time}</span>
        </div>
        {reply && (
          <div className="mt-5 space-y-3 border-l border-gray-200">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}