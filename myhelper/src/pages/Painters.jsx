import React from 'react'
import Navbar from '../components/Navbar'
import sr from '../pics/search.png'
import pt from '../pics/19317.jpg'
import Footer from '../components/Footer'
const Painters = () => {
  return (
    <>
    <Navbar/>
     <div className='  grid  container grid-cols-2  gap-6'>
         <div className='mt-20 '>
         <h1  className='text-org2 font-main  font-bold  text-3xl'>Find and hire a local painter and decorator quickly and easily</h1>
         <p className='font-Verdana text-gray-600 mt-2'>Hire workers that you can count on, in your area…
            There are 500 workers with the skill ‘Painters’ on MyHelper</p>
            <div className='flex mt-4'>
            <input type="text" name='name' className='border-2 relative py-1 w-[250px] rounded-lg  pl-3'  placeholder='Search By City ex "Rabat"'/> 
            <img src={sr} className="absolute w-7 mt-1 ml-52" alt="" />
            <button className='text-org border-2 ml-8 border-org2 hover:bg-org2 hover:text-white px-10 rounded-xl'> Search</button>
            
            
            </div>
           

            

         </div>

        
           
        <img src={pt} className="mt-4" alt="" />

     </div>
     <div className='bg-bk h-[100vh]'>
         <div className='conatainer'>

         </div>

     </div>
     <Footer/>
    </>
  )
}

export default Painters