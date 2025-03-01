import { Fragment } from 'react';

const Section3 = () => {
  return (
    <Fragment>
      <div
        className='section3-main flex lg:flex-row flex-col justify-center 2xl:gap-36 xl:gap-32 lg:gap-20 gap-10 
        lg:mt-48 mt-20 2xl:ml-44 2xl:mr-44 xl:ml-7 xl:mr-7 sm:ml-20 sm:mr-7 w-full opacity-0 animate-fade-in'
      >
        {/* Left Content */}
        <div className='section3-left-content lg:ml-10 order-2 lg:order-1 xl:ml-16 2xl:ml-0 lg:w-96 sm:w-5/6 
          ml-5 mr-5 sm:ml-0 sm:mr-0 font-sans text-white animate-slide-in-left'
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
        </div>

        {/* Right Content */}
        <div className='section3-right-img xl:w-1/2 lg:w-2/3 order-1 lg:order-2 animate-slide-in-right'>
          <div className='flex flex-col sm:flex-row ml-5 mr-5 gap-6'>
            <img className='hover:scale-105 transition-transform duration-700' src='/Images/img1-section3.png' />
            <img className='hover:scale-105 transition-transform duration-700 delay-200' src='/Images/img2-section3.png' />
          </div>
          <p className='sm:w-96 w-5/6 ml-5 mt-8 font-semibold text-xl opacity-0 animate-fade-in delay-500'>
            Engaging and professionally-made company newsletters have the power to inspire loyalty and repeat business.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Section3;
