import CountUp from '@/components/countUp';
import { Wallet } from "lucide-react";

// SET COMPONENT DATA
const balance: Record<string, Record<number, { start: number, end: number }>> = {
  "kim": {
    1: { start: 0, end: 0 },
    2: { start: 0, end: 60 },
    3: { start: 60, end: 120 },
    4: { start: 120, end: 180 },
    5: { start: 180, end: 180 },
    6: { start: 180, end: 180 },
  },
  "rock": {
    1: { start: 0, end: 0 },
    2: { start: 0, end: 71 },
    3: { start: 71, end: 142 },
    4: { start: 142, end: 213 },
    5: { start: 213, end: 213 },
    6: { start: 213, end: 213 },
  },
  "megan": {
    1: { start: 0, end: 0 },
    2: { start: 0, end: 60 },
    3: { start: 60, end: 120 },
    4: { start: 120, end: 180 },
    5: { start: 180, end: 180 },
    6: { start: 180, end: 180 },
  },
};

export default function Balance({
  page,
  content,
}:{
  page: number,
  content?: string,
}) {

  // SET COMPONENT DATA
  const balanceData = balance[content || 'kim'];

  return (
    <div className="flex items-center gap-3 rounded-lg border-dashed border-2 shadow-sm p-3 text-green-600 border-green-300 bg-white">
      <span className="text-[10px] text-right font-semibold uppercase leading-3">
        <Wallet size={22} />
      </span>
      <span className="text-2xl font-semibold leading-none">
        US$ <CountUp start={balanceData[page].start} end={balanceData[page].end} duration={3000} />
      </span>
    </div>
  );

};