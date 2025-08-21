import React, { useState, useEffect } from 'react';

interface MyProjectsModalProps {
    onClose: () => void;
}

const MyProjectsModal: React.FC<MyProjectsModalProps> = ({ onClose }) => {
    const [isFadingIn, setIsFadingIn] = useState(false);

    useEffect(() => {
        // Al montar el componente, activa la animación de entrada
        setIsFadingIn(true);
    }, []);

    const handleClose = () => {
        // Desactiva la animación de entrada para iniciar la de salida
        setIsFadingIn(false);
        // Espera a que termine la animación antes de cerrar el modal
        setTimeout(() => {
            onClose();
        }, 300); // 300ms es la duración de la transición
    };

    const projects = [
        { name: 'Tasker', url: 'https://github.com/MateoDelgadoU/Tasker' },
        { name: 'Ricky Morty web app', url: 'https://github.com/MateoDelgadoU/Rick-MortyWebApp' },
        { name: 'Decorator interactive', url: 'https://github.com/MateoDelgadoU/DecoratorInteractive' },
        { name: 'My Portfolio', url: 'https://github.com/MateoDelgadoU/Portfolio-Mateo' },
    ];
    return (
        <div
            className={`
        fixed top-0 left-0 w-full h-full z-10 flex justify-center items-center font-sans
        transition-colors duration-300
        ${isFadingIn ? 'bg-black/60 dark:bg-black/60' : 'bg-transparent'}
        
      `}
            onClick={handleClose}
        >
            <div
                className={`
          rounded-lg shadow-xl p-6 w-11/12 md:max-w-md relative transition-transform duration-300
          ${isFadingIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          bg-white dark:bg-black
        `}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-300 text-xl font-bold focus:outline-none"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Projects</h2>
                <ul className="list-none p-0">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-3">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 font-medium transition duration-200 ease-in-out"
                            >
                                {project.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyProjectsModal;