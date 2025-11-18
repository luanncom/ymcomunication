import Image from "next/image";

export default function CommentReply({
  avatar,
  name,
  time,
  content,
}:{
  avatar: string,
  name: string,
  time: string,
  content: string,
}) {

  return (
    <div className="flex items-start space-x-3 pl-4 py-1">
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
        <div className="flex space-x-1 mt-2 text-[9px] text-[#3A559F]">
          <button type="button" className="hover:underline">Responder</button>
          <button type="button" className="hover:underline">· Me gusta</button>
          <span className="text-gray-500">· {time}</span>
        </div>
      </div>
    </div>
  );
}