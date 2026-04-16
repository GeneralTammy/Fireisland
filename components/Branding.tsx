import { Umbrella } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center text-ocean ${className}`}>
    <div className="flex items-center gap-1 mb-[-8px]">
      <span className="font-hand text-2xl italic">Luxury</span>
      <Umbrella size={24} className="text-sunset" />
    </div>
    <div className="flex flex-col items-center">
      <span className="font-serif text-3xl font-bold tracking-tighter leading-none uppercase">Fire Island</span>
      <span className="font-sans text-sm tracking-[0.4em] font-bold uppercase -mt-1">Homes</span>
    </div>
  </div>
);

export const Seal = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-full border-2 border-ocean/30 p-1 bg-beach/50 flex items-center justify-center ${className}`}>
    <div className="rounded-full border border-ocean/30 p-4 flex flex-col items-center text-center">
      <span className="font-hand text-lg text-ocean leading-none">Luxury</span>
      <span className="font-serif text-sm tracking-widest uppercase font-bold text-ocean">Fire Island</span>
      <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-sunset font-bold">Homes</span>
    </div>
  </div>
);
