// Footer.tsx

import { Icons } from "../App"

export default function Footer() {

    const buttonsStyle =
        "p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300";
    return (
        <footer className="flex justify-center p-4 space-x-4">
            <a href="mailto:mateo350dk@gmail.com" className={buttonsStyle}>
                <Icons.Mail className="h-6 w-6 text-red-500" />
            </a>
            <a
                href="https://github.com/Matt-Py-GH"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonsStyle}
            >
                <Icons.Github className="h-6 w-6 text-gray-500" />
            </a>
            <a
                href="https://www.linkedin.com/in/mateodelgadougarte/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonsStyle}
            >
                <Icons.Linkedin className="h-6 w-6 text-blue-500" />
            </a>
        </footer>
    )
}