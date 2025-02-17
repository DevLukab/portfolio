"use client"

import { motion } from 'framer-motion'

export const Contact = () => {
    return (
        <section id='contact' className='overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-6 sm:px-4 space-y-8'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid lg:grid-cols-2 gap-16'>
                <div className='space-y-12'>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-7xl font-bold text-gray-300'>
                        Get in <span className='text-purple-500'>touch</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='glass p-8 rounded-2xl space-y-8'>
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Phone</p>
                            <a href="tel: +34688252242"
                                className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>
                                +34 1
                                <span className='text-gray-500'>↗</span>
                            </a>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Email</p>
                            <a href="mailto: dev.lukab@gmail.com"
                                className='text-3xl lg:text-4xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2 break-all'>
                                dev.lukab@gmail.com
                                <span className='text-gray-500'>↗</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='w-full aspect-[16/9] md:h-full min-h-[350px] rounded-2xl overflow-hidden'>
                    <iframe
                        title='My Location'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23770.29474382656!2d3.1212996547969047!3d41.86517461961626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bbaad8439676e1%3A0x400fae021a46c00!2sPalam%C3%B3s%2C%20Girona!5e0!3m2!1ses!2ses!4v1739454891677!5m2!1ses!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading='lazy'>
                    </iframe>
                </motion.div>
            </motion.div>
        </section>
    );
};