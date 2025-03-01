import { Fragment } from 'react';
import { motion } from 'framer-motion';

const Section4 = () => {
  return (
    <Fragment>
      <motion.div
        className='main-section4 lg:mt-48 mt-20 text-white'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className='flex justify-center'>
          <div className='xl:w-1/2 lg:w-2/3 text-center'>
            <motion.h1
              className='text-3xl ml-5 mr-5 sm:ml-0 sm:mr-0 sm:text-6xl font-bold'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              MAKE YOUR NEWSLETTER A BEAUTIFUL REPRESENTATION OF YOUR COMPANY.
            </motion.h1>

            <motion.div
              className='flex justify-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className='mt-10 xl:w-2/3 ml-5 mr-5 sm:ml-0 sm:mr-0 w-3/4 text-sm sm:w-3/4 font-sans'>
                Company newsletters are essential in building relationships with your employees, customers, or even prospective clients.
                Since a company newsletter can serve a variety of purposes, ensure the messages you will publish are aligned with your objective.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default Section4;
