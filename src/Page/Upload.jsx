import {BsTrashFill,BsThreeDots} from "react-icons/bs"
import  { Component }  from 'react';
import React,{useState,useEffect} from 'react'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL,deleteObject } from "firebase/storage";
import { storage, db, auth } from "../Server/Configer";
import { useAuthState } from "react-firebase-hooks/auth";
import RetravFrame from './RetravFrame'
import imageToBase64 from 'image-to-base64/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Upload(){
    const [users] = useAuthState(auth);
    const [progress,setProgress]=useState(null);
    const [formData,setformData] =useState({
        Name:'',
        key:users?.email,
        FrameImage:null,
        base64Frame:null,
        Discription:null,
        dot:false,
        progressS:null
      })
      const [database,setDatabase ]=useState(null);
  const [imageview,setImageView]=useState('');
      const handleChange = (e) => {
        setProgress('')
        setformData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleImageChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.files[0] });
        // var upl = document.getElementById("file_id");
        // var max = 500000;
    
      //   if(upl.files[0].size > max)
      //   {
      //     toast("File too big! must be less then 500 kb")
         
      //      upl.value = "";
      //   }else{
        
         
      //   var file = document.querySelector('input[type=file]')['files'][0];
      //   var reader = new FileReader();
      //   var baseString;
      //   reader.onloadend = function () {
      //       baseString = reader.result;
        
      //       setformData({...formData, base64Frame : baseString});
      //   };
      // const frame=  reader.readAsDataURL(file);
   
      //   }
      };
      const articleRef = collection(db, "Frame");
      const handlePublish = async() => {
      
  if(formData.Name!=null && formData.Discription!=null && formData.FrameImage!=null){
    toast('Please wait request processing');
// try {
// await addDoc(collection(db, "Frame"),{     
//     Name:formData.Name,
//     Key:users?.email,
//     base64Frame:formData.base64Frame,  
//     Discription:formData.Discription,       
//      createdAt: Timestamp.now().toDate(),
//        })
//          .then(() => {
//           setProgress('')
//           toast('Frame added successfully');
//          })
//          .catch((err) => {
//            // alert("Error adding article", { type: "error" });
//            toast(err);
//          });
// }catch(e){
//   toast(e, { type: "error" });
// } 
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
             
                  //
                  addDoc(articleRef, {
                    
                    Name:formData.Name,
                        Key:users?.email,
                        base64Frame:url,  
                        Discription:formData.Discription,       
                         createdAt: Timestamp.now().toDate(),
                    })
                      .then(() => {
                        toast('Frame added successfully');
                       setformData({...formData,Name:''})
                       setformData({...formData,FrameImage:''})
                       setformData({...formData,Discription:''})
                      })
                      .catch((err) => {
                        alert("Error adding article", { type: "error" });
                      });
              
            }
            );
            //
            }
            );
          }
          // else{
          // //   setProgress('INPUT filed is Empty')
          // //  }
          else{
            toast('All information Requerd');
           }

        }
        const productRef = collection(db, "Frame");
          
        useEffect(() => {
           
              const q = query(productRef,  where("Key", "==",users?.email));  onSnapshot(q, (snapshot) => {
                const frame = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
              setDatabase(frame);         
            });
            
           
          
          }, []);
    const Delete=(id)=>{
      try {
        deleteDoc(doc(db, "Frame", id));
       
        // const storageRef = ref(storage,FrameImage);
        // deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting article", { type: "error" });      
      }
    }
    const OpenDelete=()=>{
      setformData({...formData,dot:true})
    }
return(
  <>
  {users?
    <div>
        <ToastContainer />
      <div>
        <div classNameName="row">
<div classNameName='col-12'>
<div className="flex justify-center mt-8">
    <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
        <div className="m-4">
          <form>
            <label className="inline-block mb-2 text-gray-500">Upload
                Image(png )</label>
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
                    <input  type='file' name="FrameImage" id='file_id'   className="opacity-0"  required accept=".png"
                           onChange={(e) => handleImageChange(e)} />
               
                </label>
            </div>
           
            {formData.FrameImage? <img src={URL.createObjectURL(formData.FrameImage)} className='w-28 h-28 rounded-md p-1 '/>:''}
            <input className='form-control mt-3' type='text' name='Name' value={formData.Name} placeholder='Frame Name' required onChange={(e) => handleChange(e)} />
            <textarea className='form-control mt-3' row='20' col='40' type='text' value={formData.Discription} name='Discription' placeholder='Frame Discrption'  required onChange={(e) => handleChange(e)} />
           
            </form>
       
        </div>
      
        <div className="flex p-2 space-x-4">
         
            <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl ml-4" onClick={ handlePublish}>Submit</button>
        </div>
    </div>
</div>
</div>
        </div>
       
        <section className="overflow-auto  text-gray-700 mt-5">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 md:justify-center md:mx-auto">
          <div className="flex flex-wrap -m-1 md:-m-2">

          {database?.map((data,index)=>(

    <div  key={data.id}
      className={`flex flex-wrap w-1/3   ${
          database.length > 4 ? "lg:w-2/12" : ""
      }   `}
     
    >
      <div
        className="w-full  p-1 md:p-2"
    
      >
    
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full  bg-black rounded-lg"
          src={data.base64Frame}
        />
      
      </div>
      <div><BsThreeDots size={20} onClick={OpenDelete}/>  {formData.dot? <span > 
      <lable className='flex hover:text-red-500 text-sm' onClick={()=>Delete(data.id)}>
      <BsTrashFill size={20}/> Delete
      </lable>
      </span>:""}
      </div>
    </div>

          )
         
          )}
            
          </div>
        
        </div>
      
      </section>
        </div>  
    </div> :
  <span> Looding... </span>
  }
  </>
)
}
