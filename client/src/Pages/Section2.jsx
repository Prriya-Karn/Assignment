import { Fragment } from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <Fragment>
      <motion.div
        className='main-section2 flex lg:flex-row flex-col justify-center 
        lg:mt-48 mt-20 2xl:ml-44 2xl:mr-44 xl:ml-7 xl:mr-7 lg:ml-10 lg:mr-10 sm:ml-10 w-full 
        lg:gap-0 sm:gap-20 gap-10'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div
          className='left-content w-full xl:w-1/2 xl:ml-10 2xl:ml-0 lg:w-3/4'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='sub-content p-10 -mt-10'>
            <p className='font-semibold text-lg sm:text-2xl sm:w-5/6 lg:w-3/4'>
              Company newsletters are essential in building relationships with your employees, customers, or even prospective clients.
            </p>
          </div>
          <div className='flex sm:flex-row flex-col left-img sm:gap-6 gap-5 ml-5 mr-5 sm:ml-10'>
            <motion.img
              className='sm:h-80 rounded-xl'
              src='/Images/img1-section2.png'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              className='sm:h-80 rounded-xl'
              src='/Images/img2-section2.png'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className='right-content xl:w-2/3 lg:w-2/3 sm:w-full ml-5 mr-5 sm:ml-20 lg:ml-0'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.img
            className='rounded-xl'
            src='/Images/img3-section2.png'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className='right-sub-content mt-8 font-sans text-white'>
            <p className='lg:w-96 sm:w-2/3'>
              Make your newsletter a beautiful representation of your company by inserting your logo, infusing it with your brand colors, and including official images from your files! Do you want to send out newsletters for Holi or Christmas? The options are endless!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Section2;
