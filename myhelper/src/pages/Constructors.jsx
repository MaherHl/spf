 import React from 'react'
 import Navbar from '../components/Navbar'
 import Footer from '../components/Footer'
 import sr from '../pics/search.png'
 import ct from '../pics/5138438.jpg'
 
 const Constructors = () => {
   return (
    
    <>
    <Navbar/>
     <div className='  grid  container grid-cols-2 pb-10 gap-6'>
         <div className='mt-20 '>
         <h1  className='text-org2 font-main  font-bold  text-3xl'>Find and hire local construction workers quickly and easily</h1>
         <p className='font-Verdana text-gray-600 mt-2'>Hire workers that you can count on, in your area…
There are 500 workers with the skill ‘Construction worker’ on MyHelper</p>
            <div className='flex mt-4'>
            <input type="text" name='name' className='border-2 relative py-1 w-[250px] rounded-lg  pl-3'  placeholder='Search By City ex "Rabat"'/> 
            <img src={sr} className="absolute w-7 mt-1 ml-52" alt="" />
            <button className='text-org border-2 ml-8 border-org2 hover:bg-org2 hover:text-white px-10 rounded-xl'> Search</button>
            
            
            </div>
           

            

         </div>

        
           <img src={ct} alt="" />
        

     </div>
     <div className='bg-bk h-[100vh]'>
    <div className='grid grid-cols-2'>

    <div class="container h-screen max-w-full">
    <div class="m-auto my-28 w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
      <div class="h-24 bg-white"></div>
      <div class="-mt-20 flex justify-center">
        <img class="h-32 rounded-full" src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A=" />
      </div>
      <div class="mt-5 mb-1 px-3 text-center text-lg">Your Name</div>
      <div class="mb-5 px-3 text-center text-sky-500">Title</div>
      <blockquote>
        <p class="mx-2 mb-7 text-center text-base">Bio</p>
      </blockquote>
    </div>
  </div>
  

    </div>
    
        

     </div>
     <Footer/>
    </>
   )
 }
 
 export default Constructors