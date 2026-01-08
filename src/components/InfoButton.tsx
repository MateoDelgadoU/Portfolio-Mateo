import type { Dispatch, SetStateAction } from "react";

interface InfoButtonProps {
  isInfoOpen: boolean;
  setIsInfoOpen: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
}

export default function InfoButton({ isInfoOpen, setIsInfoOpen, isDark }: InfoButtonProps) {
  return (
    <button
      onClick={() => setIsInfoOpen(!isInfoOpen)}
      className={`cursor-pointer absolute top-4 right-16 p-3 border ${isDark ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'} transition-all z-20 max-sm:right-14 max-sm:top-10`}
      aria-label={isInfoOpen ? "Close information" : "Open information"}
      aria-expanded={isInfoOpen}
    >
      <div className={`w-5 h-5 relative transition-all duration-500 ${isInfoOpen ? 'rotate-180' : 'rotate-0'}`}>
        <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold transition-all duration-300 ${isInfoOpen ? 'opacity-0' : 'opacity-100'}`}>
          i
        </span>
        <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold transition-all duration-300 ${isInfoOpen ? 'opacity-100' : 'opacity-0'}`}>
          ×
        </span>
      </div>
    </button>
  );
}