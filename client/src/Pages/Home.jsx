import { Fragment } from 'react';
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

                
                <div className='hero-section xl:gap-10 lg:gap-7 w-full flex md:flex-row flex-col justify-center items-center'>

                  
                    <div className='hero-content lg:w-96 p-6 sm:p-8 md:p-10 text-center md:text-left'>

                    
                    <div className="head flex flex-col sm:flex-row justify-center items-center w-full sm:w-auto mx-auto md:-ml-32 text-center sm:text-left">
                    <img src="../../public/Images/logo.png" className="w-14 h-12 sm:w-16 sm:h-14" />
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
                    </div>

                   
                    <div className='hero-img  w-full md:w-auto'>
                        <img className='w-full h-auto' src='../../public/Images/heroimage.png' />
                    </div>
                </div>

                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />

                <Footer />
            </div>
        </Fragment>
    )
}

export default Home;
