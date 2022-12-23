import React from 'react'
import {BiSearch } from "react-icons/bi";
import Database from './Database'
import YouTube from 'react-youtube';
import {Link} from 'react-router-dom'

import { BsFillRecordFill } from "react-icons/bs";
const LandingPage=()=>{
  const opts = {
    height: '290',
    width: '350',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const upload='https://firebasestorage.googleapis.com/v0/b/enzemr-9b526.appspot.com/o/gg.PNG?alt=media&token=b0a6a354-c1c4-45b5-9037-b16de251adcb'
return(
    <div className='bg-[#F8FAFC] '>
      <div className='flex-grow w-full md:w-[1200px]  mx-[34px]    mx-auto   items-center'>
      
        <div className='  flex  items-center justify-center '>
<div className=' grid md:grid-cols-2 gap-16 items-center  md:p-5 mt-32'>
<div>
<p className='text-3xl font-bold text-center md:text-left'>Find your design dream Frame</p>
<p className='w-[400px] mt-4 mb-4  text-justify text-center md:text-left'>{Database.firstDis}</p>
<div className='flex justify-center items-center mx-auto'>
<Link to='/search'>
<button className='text-white rounded-md bg-blue-500 py-2 px-4 justify-center'>Select photo Frame Now</button>
</Link>
</div>
</div>
<img src={Database.image1} className='rounded-xl h-92 w-92'/>
</div>
</div>
<div className='  flex  items-center justify-center mt-3'>
<div className=' grid grid-cols-1 gap-4 items-center p-5'>
<div className=''>
<p className='text-3xl font-bold text-center '>Get inspired and stimulate your unlimited potential</p>
<p className='  text-justify md:text-center '>{Database.secondDis}</p>
</div>
<img src={Database.image2} className='rounded-xl h-92'/>
</div>
</div>
<div className='  flex  items-center justify-center '>
<div className=' grid md:grid-cols-2 gap-4 items-center px-5'>
        <div>
        <img src={upload} className='w-[350] h-[290]'/>
          </div>
          <div className=''>
            <h5>How to Add A Photo Frame to Your Photos?</h5>
<ul>
  {Database.howto.map((data,index)=>(
    <p key={index} className='flex gap-3 items-center'><span><BsFillRecordFill /></span>{data.name}</p> 
  ))}
</ul>
          </div>
        </div>
       </div>
      </div>
    </div>
)
}

export default LandingPage;