import CountUp from '@/components/countUp';
import { CircleAlert } from 'lucide-react';

export default function PlacesAlert({
  visible,
}:{
  visible: boolean,
}) {

  if (visible) {
    return (
      <div className="flex flex-none max-w-max justify-center items-center text-sm font-bold rounded-lg border-2 gap-1.5 mx-auto px-2.5 py-2 z-50 pulse text-red-800 border-red-200 bg-red-100">
        <CircleAlert size={20} className="flex-none" />
        <div>
          <span>ONLY</span>
          <span className="rounded px-2 py-0.5 mx-1.5 text-white bg-red-500">
            <CountUp start={100} end={3} duration={150000} />
          </span>
          <span>SPOTS LEFT!</span>
        </div>
      </div>
    );
  };

};