"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.jpg";
import { useMotionTemplate, useMotionValue, motion, animate, AnimatePresence } from "framer-motion";
import { CgChevronDown } from "react-icons/cg";

const projects = [
    {
        id: 1,
        year: 2025,
        title: 'Gemini AI Clone',
        description: 'This project is a fully functional replica of Gemini AI, built using React.',
        image: project1,
        link: 'https://github.com/DevLukab/gemini-clone'
    },
    {
        id: 2,
        year: 2025,
        title: 'Fruit Management Project',
        description: 'This is a React and FastAPI project for managing a list of fruits.',
        image: project2,
        link: 'https://github.com/DevLukab/JackOrBetter'
    },
    {
        id: 3,
        year: 2023,
        title: 'Rock Paper Scissors Lizard Spock',
        description: 'This project is a Rock Paper Scissors Lizard Spock game, built using WPF for an engaging and interactive experience.',
        image: project3,
        link: 'https://github.com/DevLukab/RPSLS'
    },
];

const COLORS_TOP = ["#13FAA", "#1E67C6", "#CE84CF", "DD335C"];

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

    const toggleProject = (project: typeof projects[0]) => {
        setSelectedProject((prev) => (prev?.id === project.id ? null : project));
    };

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

    return (
        <motion.section
            style={{ backgroundImage }}
            id="portfolio"
            className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-6xl font-bold mb-10">
                        Selected <span className="text-purple-400">Projects</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => toggleProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>

                            <h3
                                className={`text-3xl font-semibold flex items-center gap-2 transition-colors duration-300
                                    ${selectedProject?.id === project.id ? 'text-purple-200' : 'group-hover:text-purple-400'}`}>
                                {project.title}
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <CgChevronDown size={24} className="text-purple-400" />
                                </motion.div>
                            </h3>

                            <AnimatePresence>
                                {selectedProject?.id === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="border-b-2 border-purple-200 my-4"></div>
                                        <p className="text-gray-400">{project.description}</p>

                                        <div className="block lg:hidden">
                                            <Image
                                                src={selectedProject.image.src}
                                                alt={selectedProject.title}
                                                className="mt-4 rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                                                width={800}
                                                height={450}
                                            />
                                        </div>

                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors duration-300">
                                            View Project
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex w-1/2 items-center justify-center">
                <AnimatePresence mode="wait">
                        {selectedProject && (
                            <motion.div
                                key={selectedProject.id}
                                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <Image
                                    src={selectedProject.image.src}
                                    alt={selectedProject.title}
                                    className="rounded-xl shadow-lg"
                                    width={800}
                                    height={450}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </motion.section>
    );
};
