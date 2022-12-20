import React, { useEffect, useState } from 'react';
import {BiSearch } from "react-icons/bi";
import Database from './Database'
import {Link}  from "react-router-dom"
import FilterResults from 'react-filter-search'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc } from "firebase/firestore";
import { storage, db, auth } from "../Server/Configer";
import imageToBase64 from 'image-to-base64/browser';
const Search=()=>{
    const [search,setSearch]=useState(
        {
            data: [],
            value: ''
          }
    )
    useEffect(()=>{
      const productRef = collection(db, "Frame");
        const q = query(productRef,   orderBy("createdAt", "desc"));  onSnapshot(q, (snapshot) => {
          const frame = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      
        setSearch({...search , data:frame});
      });
      },[]);  
   const handleChange =(e) => {
        const { value } = e.target;
    setSearch({...search, value:value });
      };
const sendFrame=(image)=>{
   
  imageToBase64(image) // Image URL
  .then(
      (response) => {
        console.log(response)
        return response;
      }
  )
  .catch(
      (error) => {
          console.log(error); // Logs an error if there was one
      }
  )

}
    return(
        <div className=' bg-gradient-to-b from-gray-300  h-screen '>
<div className='flex  items-center justify-center  '>
    <div className='flex bg-[#FFFFFF] gap-2 p-2 rounded-lg w-8/12 items-center justify-center mt-[100px] '>
    
    <input type="search" value={search.value} onChange={(e)=>handleChange(e)} class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
     
    <button className='bg-blue-500 p-2 text-white rounded-md'><BiSearch size={20} /></button>
    </div>
   
</div>

<div >
   <div className='flex flex-grow md:gap-4 mt-4  items-center justify-center   '>
   <FilterResults
          value={search.value}
          data={search.data}
          renderResults={results => (
            <div className={`flex flex-wrap md:w-2/3 w-3/3   ${
              results.length > 4 ? "lg:w-2/12" : ""
          }   `}>
              {results.map(el => (
                <div className=''>
                  {results.length==0?<span>Looding...</span>:''}             
        <Link to={`/frame`} state={{SelectedGraphics:el.base64Frame}}>
           <div key={results.length} className='  rounded-xl bg-[#F8FAFC] shadow-sm hover:bg-black shadow  mt-5  p-2 mx-3 md:mx-0 '>
   <img src={el.base64Frame} className='w-32  ' alt={el.Name} />
   </div>
   </Link>
</div>
      ))}
            </div>
          )}
        />
    
   </div>
</div>
           
        </div>
    )
}
export default Search;