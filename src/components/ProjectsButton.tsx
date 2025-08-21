import React, { useState } from 'react';
import MyProjectsModal from './ProjectsModal';


const MyProjectsButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <button
                onClick={handleOpenModal}
                className="cursor-pointer bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded shadow transition duration-300 ease-in-out">
                My projects
            </button>


            {isModalOpen && <MyProjectsModal onClose={handleCloseModal} />}
        </>
    );
};


export default MyProjectsButton;