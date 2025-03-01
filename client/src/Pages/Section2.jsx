import { Fragment } from 'react';

const Section2 = () => {
  return (
    <Fragment>
      <div
        className='main-section2 flex lg:flex-row flex-col justify-center 
        lg:mt-48 mt-20 2xl:ml-44 2xl:mr-44 xl:ml-7 xl:mr-7 lg:ml-10 lg:mr-10 sm:ml-10 w-full 
        lg:gap-0 sm:gap-20 gap-10 opacity-0 animate-fade-in'
      >

        {/* Left Content */}
        <div className='left-content w-full xl:w-1/2 xl:ml-10 2xl:ml-0 lg:w-3/4 
          animate-slide-in-left'
        >
          <div className='sub-content p-10 -mt-10'>
            <p className='font-semibold text-lg sm:text-2xl sm:w-5/6 lg:w-3/4'>
              Company newsletters are essential in building
              relationships with your employees, customers, or even prospective clients.
            </p>
          </div>
          <div className='flex sm:flex-row flex-col left-img sm:gap-6 gap-5 ml-5 mr-5 sm:ml-10'>
            <img className='sm:h-80 animate-slide-in-left delay-200' src='/Images/img1-section2.png' />
            <img className='sm:h-80 animate-slide-in-left delay-400' src='/Images/img2-section2.png' />
          </div>
        </div>

        {/* Right Content */}
        <div className='right-content xl:w-2/3 lg:w-2/3 sm:w-full ml-5 mr-5 sm:ml-20 lg:ml-0 
          animate-slide-in-right'
        >
          <img className='animate-slide-in-right  delay-300' src='/Images/img3-section2.png' />
          <div className='right-sub-content mt-8 font-sans text-white'>
            <p className='lg:w-96 sm:w-2/3'>
              Make your newsletter a beautiful representation of
              your company by inserting your logo, infusing it with
              your brand colors, and including official images from
              your files! Do you want to send out newsletters for Holi
              or Christmas? Do you want to show the fun side of
              your company for a change? Or do you want to use
              your company newsletter to advertise your new
              products or services to new and existing leads? The
              options are endless!
            </p>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

export default Section2;
