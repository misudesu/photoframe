import React,{useState} from 'react'

import {Link}  from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navigation = () => {
  const [nav,setNav]=useState(false);
  const eventHandler=()=>{
    setNav(!nav)
  }
  return (
    <div className='flex md:mx-auto md:justify-center shadow-sm '>
      <div className=''>
      <div className='flex   gap-8 mt-[17px] w-[1550px]  mx-[34px] h-[45px]   mx-auto    '>
      <div>
      <Link to="/">
        <button className='font-bold w-[148px]   text-lg'><span className='text-red-500 '>/</span> የኔ Frame</button>
        </Link>
      </div>
      <div className='flex grow  hidden md:block'>
      <ul className=" flex gap-8 items-center  ">
      <Link to='search'>   <button>Search</button> </Link> 
            <li>God Tools</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      </div>
        <div className='flex gap-4   hidden md:block md:flex md:items-center mr-32' >
            <button className='bg-blue-500 text-white px-2 rounded-md'>Loge in</button>
           
        </div>
        </div> 
         
        <div>
   </div>
           {/*smoll screen  */}
           <div onClick={eventHandler} className='block md:hidden mt-2 mr-5 items-center'>
    {!nav?<AiOutlineMenu size={20} />:<AiOutlineClose size={20} />}
</div> 
<div className={nav?'absolute top-0 left-0 mt-6 z-50  h-screen w-[60%] bg-black text-white  ease-in-out duration-500':'fixed left-[-100%] ease-in-out duration-500'}>
<h1 className='font-bold w-[148px] mt-5 ml-5'><span className='text-red-500 '>/</span>የኔ Frame</h1>
<ul className=" flex-1 gap-8 items-center p-5 mt-6  ">
<Link to='search' className='hover:bg-blue-500 px-2 rounded-md mt-2'>   <button>Search</button> </Link>   
            <li className='hover:bg-blue-500 px-2 rounded-md mt-2 '>God Tool</li>
            <li className='hover:bg-blue-500 px-2 rounded-md mt-2 '>Contact</li>
            <li className='hover:bg-blue-500 px-2 rounded-md mt-2 '>About us!</li>
        </ul>
</div>
</div>
    </div>
  )
}

export default Navigation