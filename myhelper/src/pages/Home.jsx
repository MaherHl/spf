import React from 'react'
import Navbar from '../components/Navbar';
import sr2 from '../pics/seervice2.jpg';
import sr from '../pics/419.jpg';
import bg from '../pics/bg3.jpg';
import pn from '../pics/pn.jpg'
import ct from '../pics/ct.jpg'
import Footer from '../components/Footer'
import p2 from '../pics/P2.jpg'
import p1 from '../pics/P1.jpg'
import wh from '../pics/wh.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import arr from '../pics/arr.png'

// ..
AOS.init();




const Home = () => {
  return (
    <>
    <Navbar/>
    
    <div className=' h-[95VH] w-full relative ' >
      <img src={bg} className=" w-full h-full object-cover  absolute mix-blend-overlay"/>
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" className=' text-7xl font-main text-center pt-52 pr-7 font-black text-org2 '>The better way <br/> to find a worker</h1>

    </div>

    <div  
     className="mt-10">
    <h1  className="text-center font-main underline underline-offset-8  mb-20 decoration-org2 text-5xl text-"> Our Services</h1>

      <div className="mt-12  bg-bk " >
        <div className=" container flex gap-x-52 ">
        <div  data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-white my-14 w-[420px]  ">
         
          <img src={sr2} className="w-full   " alt=""/>
        
          
          <h3 className=" mt-6 text-center text-org text-2xl  font-bold">Build Your Crew</h3>
          <p className="ml-10 font-Verdana  mt-6">

                With MyHelper you can easily access a wide pool of talent and hire workers. <br /> 
                MyHelper’s technology lets you: <br />

                  1-Find workers quickly <br />

                  2-Cut time and costs <br />
                  
                3-Manage the hiring process <br /> </p>
                <button className='ml-24 text-white w-52 mb-4 mt-10 text-xl rounded-xl pb-1  bg-org2'>Hire a Talent</button>

                        

          </div>
          <div  data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-white  my-14  w-[420px]  ">
         
          <img src={sr} className="w-full   " alt=""/>
        
          
          <h3 className=" mt-6 text-center text-org text-2xl  font-bold">Send Your Job Request</h3>
          <p className="ml-10 font-Verdana  mt-6">

          With MyHelper you can easily send your job request and we will hire for you the best  talent. <br /> 
                MyHelper’s technology lets you: <br />

                  1-Find workers quickly <br />

                  2-Cut time and costs <br />
                  
                3-Manage the hiring process <br /> </p>
                <button className='ml-24 text-white w-56 mb-4 mt-6 text-xl rounded-xl pb-1  bg-org2'>Tell Us What You Need</button>

                        

          </div>
           
        </div>
          
          
      </div>

    </div>
    <div className='mt-10'>
    <h1  className="text-center font-main underline underline-offset-8 mb-20  decoration-org2 text-4xl"> Find and hire all types of skilled workers</h1>
    <div className='conatiner  justify-between flex'>
      <div data-aos="fade-right"
      data-aos-easing="linear" 
             data-aos-duration="2000"
      className='w-1/4 relative ml-32' >
      <img src={pn} className="rounded-3xl absolute mix-blend-overlay " alt="" />
      <button className='bg-white absolute mb-8 mx-auto text-3xl flex  rounded-md px-4 h-11 inset-x-0 bottom-0 text-org'> Painters <img src={arr} alt="" /></button>

      </div>
      <div data-aos="fade-down" 
        data-aos-easing="linear"
             data-aos-duration="2000" className='w-1/4 ml-3 relative '>
        <img src={wh} className="rounded-3xl  " alt="" />
        <button className='bg-white  absolute mix-blend-overlay mb-8 mx-auto text-3xl flex  rounded-md px-4 h-11 inset-x-0 bottom-0 text-org'> WareHouse  
        <img src={arr}  className="ml-20 " alt="" /> </button>        
        </div>

      <div data-aos="fade-left" 
            data-aos-easing="linear"
             data-aos-duration="2000"
              className="w-1/4 relative mr-32"> 
       <img src={ct} className="rounded-3xl absolute mix-blend-overlay" alt="" />
       <button className='bg-white absolute mb-8 mx-auto text-3xl flex  rounded-md px-4 h-11 inset-x-0 bottom-0 text-org'> Constructors <img src={arr} alt="" /></button>

       </div>
      
     
    </div>


    </div>
    <div className='  mt-20'>
    <h1  className="text-center font-main underline underline-offset-8 mb-20  decoration-org2 text-4xl "> Find and hire all types of skilled workers</h1>
        <div className='bg-bk'>
          <div className='  grid  grid-cols-2 '>
            
            <div data-aos="fade-right" 
             data-aos-duration="3000"
             data-aos-easing="linear"
              className='ml-20 mt-20'>
              <h1 className='font-roboto text-org2 font-bold mt-32 text-3xl'>INSURANCE FOR YOUR JOB</h1>
              <p className=' font-Verdana text-xl mt-3'>MyHelper Plus is a comprehensive  optional policy for your job that takes away the stress and financial risk if the unexpected happens.</p>
            </div>
            <img src={p2} 
            data-aos="fade-left" 
            data-aos-duration="3000"
            data-aos-easing="linear"
            className="my-28 h-[360px] ml-8 w-[500px] rounded-[50px]" alt="" />
          
            
              
            

          </div>


        </div>

    </div>
    <div className='mt-20 mb-16'>
          <div className='  grid  grid-cols-2 '>
            
            
            <img src={p1} 
            data-aos="fade-right" 
            data-aos-duration="2500"
            data-aos-easing="linear"
            className=" h-[360px] ml-32 w-[500px] rounded-[50px]" alt="" />
            <div data-aos="fade-left" 
             data-aos-duration="2500"
             data-aos-easing="linear"
              className=' mt-16'>
              <h1 className='font-roboto  font-bold text-org2  text-3xl'>THE SKILLS OUR GOOD  WORKERS <br /> POSSESS</h1>
              <p className=' font-Verdana text-xl mt-6'>1-Extensive Experience <br />
                                    2-Strength / Endurance <br />
                                    3-Timeliness <br />
                                    4-Cooperativeness <br />
                                    5-Money management / math knowledge <br /> </p>
            </div>
          
            
              
            

          </div>


        </div>
        <Footer/>
    </>
  )
}

export default Home