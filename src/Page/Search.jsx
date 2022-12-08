import React, { useEffect, useState } from 'react';
import {BiSearch } from "react-icons/bi";
import Database from './Database'
import {Link}  from "react-router-dom"
import FilterResults from 'react-filter-search'
const Search=()=>{
    const [search,setSearch]=useState(
        {
            data: [],
            value: ''
          }
    )
    useEffect(()=>{
        setSearch({...search , data:Database.image});
   },[]);  
   const handleChange =(e) => {
        const { value } = e.target;
    setSearch({...search, value:value });
      };

    return(
        <div className=' bg-gradient-to-b from-indigo-500  h-screen '>
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
            <div className='flex md:gap-4 '>
              {results.map(el => (
                <div className=''>
        <Link to={`/frame`} state={{SelectedGraphics:el.img}}>
           <div key={results.length} className='rounded-xl bg-[#F8FAFC] shadow-sm hover:bg-black shadow  mt-5  p-2 mx-3 md:mx-0 '>
   <img src={el.img} className='w-32  ' alt={el.name} />
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