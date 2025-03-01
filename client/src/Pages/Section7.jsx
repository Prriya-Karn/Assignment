import { Fragment } from "react";
import { motion } from "framer-motion";

const Section7 = () => {
  return (
    <Fragment>
      <motion.div
        className="main-section7 flex flex-col lg:flex-row justify-center 
        gap-16 lg:gap-32 mt-20 lg:mt-48 sm:px-12 lg:px-44"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Right Content (Image First on Small Screens) */}
        <motion.div
          className="right-section7 w-full lg:w-1/2 p-6 sm:p-12 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            "Keep Break Time Sacred",
            "Reach out to your peers",
            "Connection is key",
          ].map((title, index) => (
            <div key={index} className="right-section7-inside mt-6 sm:mt-7">
              <h1 className="text-xl font-semibold">{title}</h1>
              <p className="text-sm mt-5 sm:text-base text-white">
                Since a company newsletter can serve a variety of purposes, ensure the messages
                you publish are aligned with your objective.
              </p>
            </div>
          ))}
        </motion.div>

        {/* Left Content (Text Below on Small Screens, First on Large Screens) */}
        <motion.div
          className="left-section7 text-white w-full ml-5 mr-5 sm:ml-0 sm:mr-0 lg:w-96 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold -mt-3">THE SHORTLIST</h1>
          <p className="mt-6 sm:mt-7 font-sans w-3/4 sm:w-4/5 lg:w-72 text-sm sm:text-base">
            It’s very crucial to plan how your company newsletter will come to life. Will you
            be assigning the writing tasks to your employees who are good with words or hiring
            an off-site employee for the task? Who will provide the images? These are just some
            of the many questions you need to answer.
          </p>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Section7;
