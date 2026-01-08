import type { Dispatch, SetStateAction } from "react";

interface ToggleThemeButton {
    isDark: boolean
    setIsDark: Dispatch<SetStateAction<boolean>>
}

export default function ToggleThemeButton({ isDark, setIsDark }: ToggleThemeButton) {
    return (
        <>
            {/* Theme Toggle */}
            <button
                onClick={() => {
                    const newTheme = !isDark;
                    setIsDark(newTheme);
                    localStorage.setItem("theme", newTheme ? "dark" : "light");
                }}
                className={`cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-2.5 md:p-3 border ${isDark ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'} transition-all z-20`}
                aria-label="Toggle theme"
            >
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative">
                    <div className={`absolute inset-0 transition-transform duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}>
                        {isDark ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </div>
                </div>
            </button>
        </>

    )
}