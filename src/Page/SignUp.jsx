import React from 'react';
import {useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, deleteUser,reauthenticateWithCredential} from "firebase/auth";
import { storage, db, auth } from "../Server/Configer";
import {Link}  from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp(){
    const [formData,setformData]=useState({
        Email:'',
        password:'',
        ReptPassword:'',
       

  });
function onchange(e){
    e.preventDefault();
    setformData({...formData,[e.target.name]:e.target.value})
}
function signUp(){
    if(formData.password==formData.ReptPassword){
    
        handleSignup();
    }else{
        toast('Password not the same!')
    }
}

const handleSignup = async () => {
    try {
        await createUserWithEmailAndPassword(auth, formData.Email, formData.password);
    
     handleSignUp();
    } catch (error) {
        toast(error.code, { type: "error" });
    }
  };
  function handleSignUp(){
    toast('Acount Created successfully go to Login');
  }
    return(
        <div>
             <ToastContainer />
            <div className='row justify-center items-center md:m-5'>
              
                <div className='col-12 col-m-6 col-lg-6'>
<div className=' p-3 m-5' >
    <fieldset>
<p className='text-center text-2xl font-bold'> የኔ Frame</p>
<lable for='email' > <p>Email</p> 
<input className='form-control' type='email' id='email' name='Email' required onChange={(e)=>onchange(e)} placeholde='Enter Your Email'/>
</lable>
<lable for='password'> 
<p>Password</p>
<input  className='form-control' type='password' id='password' name='password'  required onChange={(e)=>onchange(e)} placeholde='Enter Password'/>
</lable>
<lable for='password'> 
<p>Rept Password</p>
<input  className='form-control' type='password' id='password' name='ReptPassword' required  onChange={(e)=>onchange(e)} placeholde='Enter Password'/>
</lable>

<button type='submit' className='px-4 py-1 mt-2 mb-4 bg-blue-500 btn btn-secondary' onClick={signUp} >Sign up </button>
</fieldset>
<div className='flex gap-2'> or <Link to='/login'> <button className=' text-sm'> Log in</button></Link></div>
</div>

                </div>

            </div>
            </div>
    )
}
