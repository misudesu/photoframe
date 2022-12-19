import React from 'react';
import {useEffect,useState} from 'react';
export default function SignUp(){
    return(
        <div>
            <div className='row justify-center items-center m-5'>
                <div className='col-12 col-m-6 col-lg-6'>
<img src=''/>
<p>image here</p>
                </div>
                <div className='col-12 col-m-4 col-lg-4'>
<div className='form-control container p-5 m-5'>
<p>Sign up </p>
<lable for='email' > <p>Email</p> 
<input className='form-control' type='email' id='email' placeholde='Enter Your Email'/>
</lable>

<lable for='password'> 
<p>Password</p>
<input  className='form-control' type='password' id='password' placeholde='Enter Password'/>
</lable>

<button className='px-4 py-1 mt-4 mb-4 rounded-md bg-blue-500'>Sign up </button>
<p>or</p>
<div className='flex gap-4'> icon  <p className='text-lg font-bold '>Continue with Google </p></div>
</div>
                </div>

            </div>
            </div>
    )
}
