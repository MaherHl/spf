import React from 'react'
import hammer from '../pics/hammer.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
            <div className=' cursor-pointer  sticky top-0 z-50 pb-2 bg-gray-100 mb-2 justify-center flex'>
        <div className='flex '  > 
                <img src={hammer} className=""  alt="" />
                <p className="font-Shadows  text-3xl  pt-4">MyHelper</p>
        </div>
        <ul className=' ml-36 mt-6 flex font-main'>
            <li className='font-main   hover:border-b-2 border-org2 text-xl'>
                <Link to="/" >HOME</Link>
            </li>
            <li className='font-main ml-6  hover:border-b-2 border-org2  text-xl'>
                <Link to="/request" >SEND REQUEST</Link>
            </li>
            <li className='font-main ml-6 hover:border-b-2 border-org2    text-xl'>
                <Link to="/about"  >ABOUT</Link>
            </li>
            <li className='font-main ml-6 hover:border-b-2 border-org2    text-xl'>
                <Link to="/pricing"  >PRICING</Link>
            </li>
            
        </ul> 
          <button className='ml-40 h-8 text-white font-main mb-2 mt-5 text-xl rounded-xl w-32  bg-org2'>CONTACT</button>
    </div>

    
     
   
  )
}

export default Navbar