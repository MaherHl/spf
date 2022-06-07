import React from 'react'
import Navbar from '../components/Navbar'
import sr from '../pics/search.png'
import pt from '../pics/19317.jpg'
import Footer from '../components/Footer'

import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const Painters = () => {
   
  const [painters,setPainters]=useState([])
  


  
  
  
  const c = async () => {
    try {
        const resp = await axios.get('http://localhost:3500/painters/allPnt');
        setPainters(resp.data);
     
        
    } catch (err) {
        
        console.error(err);
    }
};
        useEffect(()=>{
          
          console.log('i fire once');
          c()
        },[]);
       
  

    


  

  
  
  
  
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
     <div className='bg-bk pb-16 '>
      <div className='container  gap-20 grid grid-cols-3 '>
      {painters.map((p)=>
            <div key={p._id} class=" w-90 mt-16 items-center overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
            <div class="h-24 bg-white"></div>
            <div class="-mt-20 flex justify-center">
              <img class="h-32 rounded-full" src={p.avatar} />
            </div>
            <div class="mt-5 mb-1 font-bold font-main px-3 text-center text-lg">{p.full_name}</div>
            <div class="mb-5 px-3 text-center text-sky-500">{p.email}</div>
            <blockquote>
              <p class="mx-2 mb-7 text-center text-base">{p.city}</p>
            </blockquote>
          </div>
           
         
       )}
       
      </div>
      
      
 

     </div>
     
     <Footer className=''/>
    </>
  )
}

export default Painters