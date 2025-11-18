import { Loader2 } from "lucide-react";

export default function Loading() {
  
  return (
    <div className="flex flex-auto h-screen justify-center items-center">
      <Loader2 size={100} className="animate-spin opacity-20" />
    </div>
  );

};