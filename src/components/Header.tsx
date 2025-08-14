// Header.tsx

import { Icons } from "../App";

interface HeaderProps {
    toggleTheme: () => void;
    theme: string;
}

export default function Header({ toggleTheme, theme }: HeaderProps) {
    return (
        <header className="flex justify-end p-4">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer"
            >
                {theme === "dark" ? (
                    <Icons.Sun className="h-6 w-6 text-yellow-400" />
                ) : (
                    <Icons.Moon className="h-6 w-6 text-gray-800" />
                )}
            </button>
        </header>
    );
}
