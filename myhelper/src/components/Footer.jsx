import React from 'react'
import hammer from '../pics/hammer.png'
import phone from '../pics/phone.png'
import gmail from '../pics/gmail.png'
import fb from '../pics/fb.png'
import ig  from '../pics/ig.png'
import linkedin from '../pics/linkedin.png'

const Footer = () => {
  return (
    <div className=' bg-black '>
      <div className='flex  justify-between'>
      <div className='flex ml-12 mt-20'  > 
                <img src={hammer} className=""  alt="" />
                <p className="font-Shadows text-org mt-10 text-3xl  ">MyHelper</p>
        </div>
        <div className='mt-10 mr-32'>
        <h2 className='font-bold font-roboto text-2xl text-org'>Contact Info</h2>
            <div className='flex mt-5'>
            <img src={phone} className=" w-8" alt="" />
            <p className='font-verdana mt-1 ml-2 text-xl text-white'>0618263624</p>

            </div>
            <div className='flex mt-5'>
            <img src={gmail} className=" w-8" alt="" />
            <p className='font-verdana mt-1 ml-2 text-xl text-white'>Maherhilali5@gmail.com</p>

            </div>


        </div>
        <div className='mt-10 mr-52'>
     
          <h2 className='font-bold font-roboto text-2xl text-org'> Follow Us</h2>
          <div className='flex justify-between'>
            <img src={fb} className="w-8 mt-8" alt="" />
            <img src={ig} className="w-8 mt-8" alt="" />
            <img src={linkedin} className="w-8 mt-8" alt="" />
            
          </div>
        </div>
      

      </div>
     
     <p className='text-white mt-6 font-Verdana py-4  text-2xl text-center border-t '>Copyright © 2021 MyHelper. All rights reserved.</p>

    </div>
  )
}

export default Footer