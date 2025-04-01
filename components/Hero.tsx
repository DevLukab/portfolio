"use client"

// imports
import obj from "@/assets/obj1.png";
import profilepic from "@/assets/profilepic.png";
import { animate, useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const COLORS_TOP = ["#13FAA", "#1E67C6", "#CE84CF", "DD335C"];

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section id="home" style={{ backgroundImage }} className="relative grid min-h-screen place-content-center
        overflow-hidden px-4 py-24 text-gray-200">
            <div className="z-10 flex flex-col items-center mt-8">
                <span className="mb-4 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for work
                </span>
                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text 
                font-black leading-tight text-transparent text-3xl sm:text-4xl md:text-7xl">
                    Luka Barbakadze
                </h1>
                <Image
                    src={profilepic}
                    alt="profile pic"
                    width={250}
                />
                <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                    <Image
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <Image
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <Image
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <p className="font-medium text-sm sm:text-base">Coding & Learning Every Day</p>
                </div>

                <p className="mb-4 max-w-xl text-center">FullStack Developer based in Spain</p>

                <motion.a
                    href="https://devlukab.github.io/portfolio/Luka_CV.pdf"
                    download="Luka_Barbakadze_CV.pdf"
                    style={{
                        border,
                        boxShadow
                    }}
                    whileHover={{
                        scale: 1.015
                    }}
                    whileTap={{
                        scale: 0.985
                    }}
                    className="flex w-fit items-center gap-2 rounded-full px-4 py-2 bg-white/10 text-white shadow-xl">
                    Download CV <FiArrowRight />
                </motion.a>

                <div className="flex space-x-6 mt-8">
                    <a href="https://www.linkedin.com/in/luka-barbakadze-78b9352b8/" target="_blank"
                        rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors duration-300">
                        <FaLinkedin size={50} />
                    </a>
                    <a href="https://github.com/DevLukab?tab=repositories" target="_blank"
                        rel="noopener noreferrer" className="hover:text-[#C6D50C] transition-colors duration-300">
                        <FaGithub size={50} />
                    </a>
                </div>
            </div>

            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>

        </motion.section>
    );
};
