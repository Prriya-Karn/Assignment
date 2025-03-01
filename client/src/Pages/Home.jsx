import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <Fragment>
            <div className='main-section overflow-x-hidden'>

                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1 }}
                    className='hero-section xl:gap-10 lg:gap-7 w-full flex md:flex-row flex-col justify-center items-center'>

                    {/* Hero Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1, delay: 0.2 }}
                        className='hero-content lg:w-96 p-6 sm:p-8 md:p-10 text-center md:text-left'
                    >
                        <div className="head flex flex-col sm:flex-row justify-center items-center w-full sm:w-auto mx-auto md:-ml-32 text-center sm:text-left">
                            <img src="/Images/logo.png" className="w-14 h-12 sm:w-16 sm:h-14" />
                            <p className="text-sm sm:text-base font-semibold text-white mt-2 sm:mt-0 sm:ml-2">
                                Sriva Premium Co.
                            </p>
                        </div>

                        <div className='sub-head text-white mt-6 sm:mt-10'>
                            <h1 className='text-4xl sm:text-5xl md:text-8xl'>
                                THE <span className='premium-color'>PREMIUM</span> PULSE
                            </h1>
                        </div>

                        <div className='mt-6 sm:mt-10 sub-p w-full sm:w-60 mx-auto md:mx-0'>
                            <p className='text-lg sm:text-2xl font-semibold font-mono text-white'>
                                Issue 70 | Volume 3 May 17, 2025
                            </p>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1, delay: 0.4 }}
                        className='hero-img w-full md:w-auto'
                    >
                        <img className='w-full h-auto' src='/Images/heroimage.png' />
                    </motion.div>
                </motion.div>

                {/* Animated Sections */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Section2 />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Section3 />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Section4 />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Section5 />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Section6 />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <Section7 />
                </motion.div>

                <Footer />
            </div>
        </Fragment>
    )
}

export default Home;
