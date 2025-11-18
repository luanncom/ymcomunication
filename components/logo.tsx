import Image from "next/image";

export default function Logo() {
  
  return (
    <div className="flex gap-2 items-center">
      <Image
        width="50"
        height="35"
        src="/youtube.svg"
        alt="YouTube Rewards"
        priority
      />
      <div className="flex flex-col gap-1">
        <span className="text-lg font-bold leading-none text-gray-900">YouTube</span>
        <span className="text-xs font-semibold leading-none tracking-wide text-gray-400">Rewards</span>
      </div>
    </div>
  );

};