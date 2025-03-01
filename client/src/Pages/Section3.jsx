import { Fragment } from 'react';
import { motion } from 'framer-motion';

const Section3 = () => {
  return (
    <Fragment>
      <motion.div
        className='section3-main flex lg:flex-row flex-col justify-center 2xl:gap-36 xl:gap-32 lg:gap-20 gap-10 
        lg:mt-48 mt-20 2xl:ml-44 2xl:mr-44 xl:ml-7 xl:mr-7 sm:ml-20 sm:mr-7 w-full'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div
          className='section3-left-content lg:ml-10 order-2 lg:order-1 xl:ml-16 2xl:ml-0 lg:w-96 sm:w-5/6 
          ml-5 mr-5 sm:ml-0 sm:mr-0 font-sans text-white'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className='text-lg'>
            Company newsletters are essential in building relationships with your employees, customers, or
            even prospective clients. Engaging and professionally-made company newsletters have
            the power to inspire loyalty and repeat business. Get in touch with the people who matter to your
            business by making company newsletters one of your priorities.
          </p>

          <p className='mt-10 text-lg'>
            When sending out a company newsletter, keep in mind these three things. First, send out your
            newsletter regularly. Stick to your promise if it’s going to be weekly, monthly, or quarterly. The
            second is to have a proper layout. Make sure your newsletter is interesting and easy to read. Lastly,
            ensure the quality of the content and images you share.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className='section3-right-img xl:w-1/2 lg:w-2/3 order-1 lg:order-2'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col sm:flex-row ml-5 mr-5 gap-6'>
            <motion.img
              className='rounded-xl'
              src='/Images/img1-section3.png'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              className='rounded-xl'
              src='/Images/img2-section3.png'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </div>
          <motion.p
            className='sm:w-96 w-5/6 ml-5 mt-8 font-semibold text-xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Engaging and professionally-made company newsletters have the power to inspire loyalty and repeat business.
          </motion.p>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Section3;
