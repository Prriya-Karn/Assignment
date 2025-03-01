import { Fragment } from 'react'


 // sm (640px ya usse above): Small devices, such as phones in portrait mode. (hamburger)
  
  // md (768px): Tablets and small devices in landscape mode.  (hamburger)
  // lg (1024px): Laptops and medium-sized devices. 
  // xl (1280px): Desktops and larger screens. 
  // 2xl (1536px): Extra-large desktop screens or wide monitors. 

  // And if no prefix then they are  for mobile  (hamburger)




const Section6 = () => {
  return (
    <Fragment>
    <div className='main-section6 flex lg:flex-row flex-col justify-center   2xl:gap-36 
   xl:gap-32 lg:mt-48 mt-20 2xl:ml-44 2xl:mr-44 xl:ml-7 xl:mr-7 lg:ml-10 lg:mr-10 sm:ml-20 sm:mr-20 ml-5 mr-5
     lg:gap-32 gap-10'>
    <div className='left-section6 flex sm:flex-row flex-col justify-center items-center sm:w-1/2 xl:gap-10 lg:ml-16 md:ml-40 sm:ml-32 gap-3 xl:ml-0 order-2 lg:order-1'>
    <img className='h-80' src='/Images/section6-img1.png'/>
    <img className='h-80' src='/Images/section6-img2.png'/>
    </div>

    <div className='right-section6  lg:w-1/2 font-sans text-white order-1 lg:order-2'>
    <h1 className='text-3xl font-bold'>Company newsletters are essential in
    building relationships with your
    employees and customers</h1>

    <p className='mt-10  font-sans'>Make your newsletter a beautiful representation of
    your company by inserting your logo, infusing it with
    your brand colours, and including official images from
    your files! Do you want to send out newsletters for Holi
    or Christmas? Do you want to show the fun side of
    your company for a change? Or do you want to use
    your company newsletter to advertise your new
    products or services to new and existing leads? The
    options are endles</p>

    <p className='mt-10  font-sans'>When sending out a company newsletter, keep in mind
    these three things. First, send out your newsletter
    regularly. Stick to your promise if it’s going to be
    weekly, monthly or quarterly. The second is to have a
    proper layout. Make your newsletter is interesting and
    easy to read. Lastly, ensure the quality of the content
    and images you will share.</p>
    </div>
    </div>
    </Fragment>
  )
}
export  default Section6;