import {BsTrashFill} from "react-icons/bs"
import  { Component }  from 'react';
import React,{useState,useEffect} from 'react'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";
import { storage, db, auth } from "../Server/Configer";
import { useAuthState } from "react-firebase-hooks/auth";
import RetravFrame from './RetravFrame'
export default function Upload(){
    const [users] = useAuthState(auth);
    const [progress,setProgress]=useState(null);
    const [formData,setformData] =useState({
        Name:null,
        key:users?.email,
        FrameImage:null,
      
      })
  const [imageview,setImageView]=useState('');
      const handleChange = (e) => {
        setProgress('')
        setformData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleImageChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.files[0] });
        setProgress('')
      
      };
      const handlePublish = () => {
 if(formData.Name!=null && formData.FrameImage!=null){
        const storageRef = ref(
          storage,
          `/Frame/${Date.now()}${formData.FrameImage.name}`
        );

        const uploadImage = uploadBytesResumable(storageRef, formData.FrameImage);
        uploadImage.on(
         "state_changed",
         (snapshot) => {
           const progressPercent = Math.round(
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
           );
           setProgress('Please wait request processing');
         },
         (err) => {
           console.log(err);
         },
         () => {
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                const articleRef = collection(db, "Frame");
               addDoc(articleRef, {      
             Name:formData.Name,
             Key:formData.key,
             FrameImage:url,          
              createdAt: Timestamp.now().toDate(),
                })
                  .then(() => {
                   
                    setProgress('Frame added successfully');
                  })
                  .catch((err) => {
                    // alert("Error adding article", { type: "error" });
                    setProgress('Error adding Frame');
                  });
                  //
              
            }
            );
            //
            }
            );
          }else{
            setProgress('INPUT filed is Empty')
          }

        }
const [database,setDatabase ]=useState(null);
        useEffect(() => {
            const productRef = collection(db, "Frame");
            if(users?.email==null){
            }else{
              const q = query(productRef,  where("Key", "==",users?.email));  onSnapshot(q, (snapshot) => {
                const frame = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
              setDatabase(frame);
          
            });
            }
           
          
          }, []);
    const Delete=(id,FrameImage)=>{
      try {
        deleteDoc(doc(db, "Frame", id));
       
        const storageRef = ref(storage,FrameImage);
        deleteObject(storageRef);
      } catch (error) {
        alert("Error deleting article", { type: "error" });
       
      }
    }
return(
    <div>
      <div>
        <div classNameName="row">
<div classNameName='col-12'>
<div className="flex justify-center mt-8">
    <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
        <div className="m-4">
          <form>
            <label className="inline-block mb-2 text-gray-500">Upload
                Image(jpg,png,svg,jpeg)</label>
            <div className="flex items-center justify-center w-full">
                <label name='FrameImage' className="flex flex-col w-full h-32 border-4 border-dashed  hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                    </div>
                    <input  type='file' name="FrameImage" className="opacity-0"  required  accept="image/*"
                           onChange={(e) => handleImageChange(e)} />
               
                </label>
            </div>
           
            {formData.FrameImage? <img src={URL.createObjectURL(formData.FrameImage)} className='w-28 h-28 rounded-md p-1 '/>:''}
            <input className='form-control mt-3' type='text' name='Name' placeholder='Frame Name' required onChange={(e) => handleChange(e)} />
            </form>
            {progress?<div className=' text-red-500'>{progress } </div>:''}
        </div>
      
        <div className="flex p-2 space-x-4">
         
            <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl" onClick={ handlePublish}>Submit</button>
        </div>
    </div>
</div>
</div>
        </div>
       
        <section className="overflow-auto  text-gray-700 mt-5">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 md:justify-center md:mx-auto">
          <div className="flex flex-wrap -m-1 md:-m-2">

          {database?.map((data,index)=>(

    <div
      className={`flex flex-wrap w-1/3   ${
          database.length > 4 ? "lg:w-2/12" : ""
      }   `}
      key={index}
    >
      <div
        className="w-full  p-1 md:p-2"
      //   onClick={() => changGraphics(data.img)}
      >
    
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full  bg-black rounded-lg"
          src={data.FrameImage}
        />
      
      </div>
      <lable className='flex hover:text-red-500' onClick={()=>Delete(data.id,data.FrameImage)}>
      <BsTrashFill size={20}/> Delete
      </lable>
    </div>

          )
         
          )}
            
          </div>
        
        </div>
      
      </section>
        </div>  
    </div>
)
}
