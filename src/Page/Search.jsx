import React, { useEffect, useState } from 'react';
import {BiSearch } from "react-icons/bi";
import Database from './Database'
import {Link}  from "react-router-dom"
import FilterResults from 'react-filter-search'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc,limit } from "firebase/firestore";
import { storage, db, auth } from "../Server/Configer";
import imageToBase64 from 'image-to-base64/browser';
import { useAuthState } from "react-firebase-hooks/auth";
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");
const Search=()=>{
  const [user] = useAuthState(auth);
    const [search,setSearch]=useState(
        {
            data: [],
            value: ''
          }
    )
    useEffect(()=>{
      const productRef = collection(db, "Frame");
        const q = query(productRef,   orderBy("createdAt", "desc"),limit(6));  onSnapshot(q, (snapshot) => {
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
const [state ,setStates] = useState({
  activePage: 15,
});
const page=[1,2,3,4,5,6,7,8,9]
function handlePageChange(pageNumber) {
  console.log(`active page is ${pageNumber}`);
  setStates({activePage: pageNumber});
}
    return(
        <div className=' bg-gradient-to-b from-gray-300  h-screen '>
<div className='flex  items-center justify-center  '>
    <div className='flex bg-[#FFFFFF] gap-2 p-2 rounded-lg w-8/12 items-center justify-center mt-[100px] '>
    
    <input type="search" value={search.value} onChange={(e)=>handleChange(e)} class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
     
    <button className='bg-blue-500 p-2 text-white rounded-md'><BiSearch size={22} /></button>
    </div>
   
</div>

<div >

   <div className='flex flex-grow md:gap-4 mt-4  items-center justify-center   '>
 
   <FilterResults
          value={search.value}
          data={search.data}
          renderResults={results => (
            <div className={`flex flex-wrap md:w-2/3 w-3/3 h-scren ${
              results.length > 4 ? "lg:w-10/12 h-scren" : ""
          }   `}>
              {results.map(el => (
                <div className=''>                           
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
<div className='mt-5 align-left ml-32'> {user?<Link to='/uplood' className=" px-4 text-blue-800 ml-8 bg-blue-500 text-white mt-8 hover:bg-gray-700 hover:text-white ',
                          'px-3 py-2 rounded-md text-sm font-medium"><button>Add Frame </button></Link>:<Link to='/login' className=" px-4 text-blue-800 ml-8 hover:bg-gray-700 hover:text-white ',
                          'px-3 py-2 rounded-md bg-blue-500 mt-5 text-white text-sm font-medium"><button>Add Frame </button></Link>}
                          </div>   

                          <div className='flex justify-between'>
                            <p stayle={{

}}>Privew</p>

<Pagination
          activePage={state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange.bind(this)}
        />
<p>next</p>
                             </div>
        </div>
    )
}
export default Search;