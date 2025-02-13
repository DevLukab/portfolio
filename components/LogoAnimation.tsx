"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import oracle from "@/assets/oracle.png"
import figma from "@/assets/figma.png"
import linkedin from "@/assets/linkedin.png"
import github from "@/assets/github.png"
import stackoverflow from "@/assets/stack-overflow.png"
import trello from "@/assets/trello.png"
import azure from "@/assets/azure.png"

const images = [
    { src: oracle, alt: "oracle" },
    { src: figma, alt: "figma" },
    { src: linkedin, alt: "linkedin" },
    { src: github, alt: "github" },
    { src: stackoverflow, alt: "stackoverflow" },
    { src: azure, alt: "azure" },
    { src: trello, alt: "trello" },
    { src: oracle, alt: "oracle" },
    { src: figma, alt: "figma" },
    { src: linkedin, alt: "linkedin" },
    { src: github, alt: "github" },
    { src: stackoverflow, alt: "stackoverflow" },
    { src: azure, alt: "azure" },
    { src: trello, alt: "trello" },
    { src: oracle, alt: "oracle" },
    { src: figma, alt: "figma" },
    { src: linkedin, alt: "linkedin" },
    { src: github, alt: "github" },
    { src: stackoverflow, alt: "stackoverflow" },
    { src: azure, alt: "azure" },
    { src: trello, alt: "trello" },
    { src: oracle, alt: "oracle" },
    { src: figma, alt: "figma" },
    { src: linkedin, alt: "linkedin" },
    { src: github, alt: "github" },
    { src: stackoverflow, alt: "stackoverflow" },
    { src: azure, alt: "azure" },
    { src: trello, alt: "trello" },
    { src: oracle, alt: "oracle" },
    { src: figma, alt: "figma" },
    { src: linkedin, alt: "linkedin" },
    { src: github, alt: "github" },
    { src: stackoverflow, alt: "stackoverflow" },
    { src: azure, alt: "azure" },
    { src: trello, alt: "trello" },
]


export const LogoAnimation = () => {
    return (
        <div className="py-8 bg-purple-200/10 glass opacity-80">
            <div className="container mx-auto">
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                    <motion.div 
                    className="flex gap-14 flex-none pr-14"
                    animate={{
                        translateX: '-50%',
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}>
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                height={40}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};