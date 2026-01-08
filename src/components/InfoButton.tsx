

interface InfoButtonProps {
  isInfoOpen: boolean;
  setIsInfoOpen: (isOpen: boolean) => void;
  isDark: boolean;
}

export default function InfoButton({ isInfoOpen, setIsInfoOpen, isDark }: InfoButtonProps) {
  return (
    <button
      onClick={() => setIsInfoOpen(!isInfoOpen)}
      className={`cursor-pointer absolute top-2 right-14 sm:top-4 sm:right-16 p-2 sm:p-2.5 md:p-3 border ${isDark ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'} transition-all z-20`}
      aria-label={isInfoOpen ? "Close information" : "Open information"}
      aria-expanded={isInfoOpen}
    >
      <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 relative transition-all duration-500 ${isInfoOpen ? 'rotate-180' : 'rotate-0'}`}>
        <span className={`absolute inset-0 flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-300 ${isInfoOpen ? 'opacity-0' : 'opacity-100'}`}>
          i
        </span>
        <span className={`absolute inset-0 flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-300 ${isInfoOpen ? 'opacity-100' : 'opacity-0'}`}>
          X
        </span>
      </div>
    </button>
  );
}