import React from "react"

import { FaHtml5 } from "react-icons/fa"
import { MdCss } from "react-icons/md"
import { IoLogoJavascript } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { FaAndroid } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs"
import { FaPython } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

const stackItems = [
    { id: 1, name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { id: 2, name: 'CSS', icon: MdCss, color: '#1572B6' },
    { id: 3, name: 'JavaScript', icon: IoLogoJavascript, color: '#F7DF1E' },
    { id: 4, name: 'Python', icon: FaPython, color: '#3776AB' },
    { id: 5, name: 'Angular', icon: FaAngular, color: '#DD0031' },
    { id: 6, name: 'React', icon: FaReact, color: '#61DAFB' },
    { id: 7, name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { id: 8, name: 'Android', icon: FaAndroid, color: '#3DDC84' },
    { id: 9, name: 'Kotlin', icon: SiKotlin, color: '#0095D5' },
    { id: 10, name: 'SQL', icon: BsFiletypeSql, color: '#E38D13 ' },
]

export const Stack = () => {
    return (
        <section className="py-16 glass">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {stackItems.map((item) =>
                        <div
                            key={item.id}
                            className="flex items-center justify-center flex-col rounded-xl p-4"
                        >
                            <div className="mb-4 bg-white/10 p-6 rounded-xl">
                                {React.createElement(item.icon, {
                                    className: "w-32 h-32",
                                    style: { color: item.color }
                                })}
                            </div>
                            <p className="text-gray-400 font-semibold">{item.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}