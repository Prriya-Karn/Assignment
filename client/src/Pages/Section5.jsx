import { Fragment } from 'react';
import { motion } from 'framer-motion';

const Section5 = () => {
  return (
    <Fragment>
      <motion.div
        className='main-section5 flex sm:flex-row flex-col justify-center items-center lg:gap-20 lg:mt-48 mt-20 xl:ml-52 xl:mr-44 ml-10 mr-10'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div
          className='section5-left-content font-sans sm:w-1/2 lg:w-96 text-white'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className='text-5xl lg:text-6xl font-bold sm:w-96 lg:w-96'>
            MENTAL HEALTH MATTERS
          </h1>
          <p className='mt-6 font-bold text-xl lg:text-2xl'>written by Aditi Rao</p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className='section5-right-img mt-10 sm:mt-0'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src='/Images/section5-img.png'
            className='w-full max-w-xs sm:max-w-sm lg:max-w-md hover:scale-105 transition-transform duration-700'
            alt='Mental Health'
          />
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Section5;
