import React from 'react'
import Navbar from '../components/Navbar'
import ivr from '../pics/ivr.png'
import undraw from '../pics/undraw.png'
import Footer from '../components/Footer'

const Pricing = () => {
  return (
    <>
     <Navbar/> 
     <div className=' grid  container grid-cols-2  gap-6'>
         <div className='mt-28 '>
         <h1  className='text-org2 font-main  font-bold  text-4xl'>No Fee Until You Have Found Someone To Hire</h1>
         <div className='flex mt-3'>
             <img src={ivr} className='w-8' alt="" />
            <p className='font-Verdana text-gray-600 pt-1 ml-2'> Free access to list of available workers  </p>

         </div>
         <div className="flex mt-2">
         <img src={ivr} className='w-8' alt="" />
             
         <p className='font-Verdana text-gray-600 pt-1 ml-2'> Free to view workers profiles, past work and reviews  </p>
         </div>
         
         </div>
         <img src={undraw} className='mt-4' alt="" />



     </div>
     <div className='bg-bk py-10 '>
     <div className=' container mt-10 mb-10 grid grid-cols-4 gap-4'>
     <div className="bg-gray-100 flex items-center">
  
  <a className="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="/">
  

  <p className="text-lg text-gray-800 font-semibold"> Pay as you go</p>
  <p className="text-gray-600 font-light mt-5"> Starts At </p>
  

  <div className="flex flex-row mt-3 gap-2 place-items-end"> 
    <p className="text-6xl font-bold"> $20 </p>
    <p className="text-2xl font-light items-bottom pb-1"> /Hr </p>
  </div>
  
  <div className="flex flex-col gap-2 mt-5">
  

    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500"> Single Worker hire</p>
      </div>
    </div>
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500"> Access contact  </p>
      </div>
    </div>

  
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500">CIS worker tax check </p>
      </div>
    </div>
    
  </div>

</a>

        </div>
        <div className="bg-gray-100 flex items-center">
  
  <a className="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="/">
  

  <p className="text-lg text-gray-800 font-semibold"> basic</p>
  <p className="text-gray-600 font-light mt-5"> Starts At </p>
  

  <div className="flex flex-row mt-3 gap-2 place-items-end"> 
    <p className="text-6xl font-bold"> $30 </p>
    <p className="text-2xl font-light items-bottom pb-1"> /Hr </p>
  </div>
  
  <div className="flex flex-col gap-2 mt-5">
  

    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500">5 Workers per month</p>
      </div>
    </div>
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500"> Access contact  </p>
      </div>
    </div>

  
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500">CIS worker tax check </p>
      </div>
    </div>
    
  </div>

</a>

        </div>
        <div className="bg-gray-100 flex items-center">
  
  <a className="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="/">
  

  <p className="text-lg text-gray-800 font-semibold"> Standard</p>
  <p className="text-gray-600 font-light mt-5"> Starts At </p>
  

  <div className="flex flex-row mt-3 gap-2 place-items-end"> 
    <p className="text-6xl font-bold"> $50 </p>
    <p className="text-2xl font-light items-bottom pb-1"> /Hr </p>
  </div>
  
  <div className="flex flex-col gap-2 mt-5">
  

    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500"> 10 Workers per month</p>
      </div>
    </div>
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500"> Access contact  </p>
      </div>
    </div>

  
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500">CIS worker tax check </p>
      </div>
    </div>
    
  </div>

</a>

        </div>
        <div className="bg-gray-100 flex items-center">
  
  <a className="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="/">
  

  <p className="text-lg text-gray-800 font-semibold"> Premium</p>
  <p className="text-gray-600 font-light mt-5"> Starts At </p>
  

  <div className="flex flex-row mt-3 gap-2 place-items-end"> 
    <p className="text-6xl font-bold"> $70 </p>
    <p className="text-2xl font-light items-bottom pb-1"> /Hr </p>
  </div>
  
  <div className="flex flex-col gap-2 mt-5">
  

    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500"> 15 workers per month</p>
      </div>
    </div>
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500"> Access contact  </p>
      </div>
    </div>

  
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="col-span-10">
        <p className="text-gray-500">CIS worker tax check </p>
      </div>
    </div>
    
  </div>

</a>

</div>

     </div>
     </div>
    
     <Footer/>
    </> 
  )
}

export default Pricing