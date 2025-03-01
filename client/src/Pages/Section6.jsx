import { Fragment } from 'react';
import { motion } from 'framer-motion';

const Section6 = () => {
  return (
    <Fragment>
      <motion.div
        className='main-section6 flex lg:flex-row flex-col justify-center 2xl:gap-36 xl:gap-32 lg:mt-48 mt-20 
        2xl:ml-44 2xl:mr-44 xl:ml-7 xl:mr-7 lg:ml-10 lg:mr-10 sm:ml-20 sm:mr-20 ml-5 mr-5 lg:gap-32 gap-10'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Left Section (Images) */}
        <motion.div
          className='left-section6 flex sm:flex-row flex-col justify-center items-center sm:w-1/2 
          xl:gap-10 lg:ml-16 md:ml-40 sm:ml-32 gap-3 xl:ml-0 order-2 lg:order-1'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            className='h-80 hover:scale-105 transition-transform duration-700 rounded-xl'
            src='/Images/section6-img1.png'
            alt='Newsletter Image 1'
          />
          <img
            className='h-80 hover:scale-105 transition-transform duration-700 rounded-xl'
            src='/Images/section6-img2.png'
            alt='Newsletter Image 2'
          />
        </motion.div>

        {/* Right Section (Text) */}
        <motion.div
          className='right-section6 lg:w-1/2 font-sans text-white order-1 lg:order-2'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className='text-3xl font-bold leading-snug'>
            Company newsletters are essential in building relationships with your employees and customers
          </h1>

          <p className='mt-6 text-lg leading-relaxed'>
            Make your newsletter a beautiful representation of your company by inserting your logo, infusing it with
            your brand colors, and including official images from your files! Do you want to send out newsletters for Holi
            or Christmas? Do you want to show the fun side of your company for a change? Or do you want to use
            your company newsletter to advertise your new products or services to new and existing leads? The
            options are endless.
          </p>

          <p className='mt-6 text-lg leading-relaxed'>
            When sending out a company newsletter, keep in mind these three things. First, send out your newsletter
            regularly. Stick to your promise if it’s going to be weekly, monthly, or quarterly. The second is to have a
            proper layout. Make your newsletter interesting and easy to read. Lastly, ensure the quality of the content
            and images you share.
          </p>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Section6;
