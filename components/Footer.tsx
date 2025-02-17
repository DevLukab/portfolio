import React from "react";
import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="relative mt-12 text-white/70 py-8 px-4 max-w-[1200px] container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
            <h1 className="text-sm md:text-base">Copyright &copy; 2025 by Luka</h1>

            <a href="#home" className="hover:text-purple-400 transition-colors duration-300">
                <FaArrowUp size={24} />
            </a>
        </div>
    );
}