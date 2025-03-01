import  { Fragment } from 'react'

 const Section5 = () => {
  return (
    <Fragment>
    <div className='main-section5 flex sm:flex-row flex-col justify-center items-center lg:gap-20 lg:mt-48 mt-20 xl:ml-52 xl:mr-44 ml-10 mr-10'>
    <div className='section5-left-content font-sans  sm:w-1/2 lg:w-96 text-white '>
    <h1 className='text-5xl lg:text-6xl font-bold sm:w-96 lg:w-96'>MENTAL HEALTH
    MATTERS</h1>

    <p className='mt-6 font-bold text-xl lg:text-2xl'>written by Aditi Rao</p>
   </div>

   <div className='section5-right-img mt-10 sm:mt-0'>
   <img src='../../public/Images/section5-img.png'/>
   </div>
    </div>
    </Fragment>
  )
}
export default Section5;