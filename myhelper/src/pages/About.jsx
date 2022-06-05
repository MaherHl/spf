import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bg2 from '../pics/bg2.jpg'
const About = () => {
  return (
    <>
    <Navbar/>
    <div className='relative  h-[100vh] '>
        <img src={bg2} className=" w-full h-full object-cover  absolute mix-blend-overlay" alt="" />
        <div  
         data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="3000"
         className='bg-white absolute left-6 top-32 w-[500px] opacity-10'>
            <h3 className='text-2xl pt-10 font-roboto font-bold text-center text-org'> About MyHelper</h3>
            <p className='font-Verdana mt-10 pb-20 ml-10' >We started MyHelper with  the mission to connect  companies and  workers. We saw that employers , <br /> as well as workers, were struggling to find each <br /> other and struggling to  make employment decisions <br /> that were in their best interests.</p>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default About