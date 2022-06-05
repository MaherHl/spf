import React, { useRef } from 'react';
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer'



const Request = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rkipzzd', 'template_cjf4zxd', form.current, 'pplVKnu1ysAnG7ZLa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      
    };
  
    
  return (
      <>
      <Navbar/>
      <div className='container m-4'>
        <h1 className='text-org2 font-main mt-10 font-bold ml-24 text-4xl'>What Service You’re Looking For</h1>
        <form ref={form} onSubmit={sendEmail} className='mt-8 ml-8  container'>
           <div  className='mb-8'>
           <label  className='text-2xl font-roboto ' htmlFor="">Full Name : <span className='text-red-700 text-xl'>*</span></label>
            <input type="text" name='name' className='border-2 rounded-lg  pl-3 ml-28' required placeholder='FuLl name'/> 
           </div>
          <div  className='mb-8'>
           <label  className='text-2xl font-roboto ' htmlFor=""> Email:  <span className='text-red-700 text-xl'>*</span></label>
            <input type="email" name='email' className='border-2 rounded-lg  pl-3 ml-40' required placeholder='xxxx@gmail.com'/> 
           </div>
           <div  className='mb-8'>
           <label  className='text-2xl font-roboto ' htmlFor="">Job Tittle : <span className='text-red-700 text-xl'>*</span></label>
            <input type="text" name='Tittle' className='border-2 rounded-lg  pl-3 ml-28' required placeholder='Wall Painting'/> 
           </div>
          <div  className='mb-8'>
           <label  className='text-2xl font-roboto ' htmlFor="">Phone Number : <span className='text-red-700 text-xl'>*</span></label>
            <input type="text" name='Phone number' className='border-2 rounded-lg  pl-3 ml-16' required placeholder='06666666'/> 
           </div>
           <div className="mb-8">
           <label  className='text-2xl font-roboto ' htmlFor="">Describe the service you're looking to purchase - <br /> please be as detailed as possible:<span className='text-red-700 text-xl'>*</span></label> <br />
           <textarea rows="6" cols="75" name='message' required placeholder='Description ...' className='border-2 pt-2 pl-3 ml-16 mt-5 rounded-lg'></textarea>

           </div>
           <div className="mb-8">
           <label  className='text-2xl font-roboto ' htmlFor="">Category : <span className='text-red-700 text-xl'>*</span></label>
            <select name='Category' className='border-2 rounded-lg px-3  pl-3 ml-28'  id="">
                <option> Construction</option>
                <option > Painting</option>
                <option> WareHouse Work </option>

            </select>
           </div>
           <input type="submit" value='send' className='ml-20 h-8 text-white font-main mb-2 mt-4 text-xl rounded-xl w-52  bg-org2'/>
           
        </form>

 
      </div>
      <Footer/>
      </>
    
    
  )
}

export default Request