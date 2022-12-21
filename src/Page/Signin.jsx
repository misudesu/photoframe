import React from 'react';
import {useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail, updateProfile, deleteUser,reauthenticateWithCredential} from "firebase/auth";
import { storage, db, auth } from "../Server/Configer";
import {Link}  from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signin(){
    let navigate = useNavigate();
    const [formData,setformData]=useState({
        Email:'',
        password:'',
        netification:'',
        success:''

  });
function onchange(e){
    e.preventDefault();
    setformData({...formData,[e.target.name]:e.target.value})
}


const handleSignin = async () => {       
    try {
        await signInWithEmailAndPassword(auth, formData.Email, formData.password);    
        navigate("/");
        
      } catch (error) {
        toast(error.code, { type: "error" });
      }
  };

  const ResetPassword=async()=>{
    await sendPasswordResetEmail(auth, formData.Email)
  .then(() => {
    toast("Password reset email sent!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    toast(errorMessage)
  });
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
<input  className='form-control' type='password' id='password' name='password' max={8}  required onChange={(e)=>onchange(e)} placeholde='Enter Password'/>
</lable>
<p>{formData.netification} {formData.success} </p>
<button type='submit' className='px-4 py-1 mt-2 mb-4 bg-blue-500 btn btn-secondary' onClick={handleSignin} >Login </button>
<p class="text-sm mt-3 mb-0"> <a onClick={ResetPassword} class="text-dark font-weight-bolder">Reset Password?</a></p>
             
</fieldset>
<div className='flex gap-2'> or <Link to='/signup'> <button className=' text-sm'> Sign up</button></Link></div>
</div>

                </div>

            </div>
            </div>
    )
}
