import {useEffect,useState} from 'react';
import ReactPaginate from 'react-paginate';
import FilterResults from 'react-filter-search'
import './Pagination.css'
import {Link}  from "react-router-dom"
import {BiSearch } from "react-icons/bi";
export default function Images(props){
    const {data}=props;
 
    const [currentItems,setCurrentItems]=useState([]);
    const [pageCount,setPageCount]=useState(0);
    const [itemOffset,setItemOffset]=useState(0);
    const itemsPerPage=15;
    useEffect(()=>{
        const endOffset=itemOffset+itemsPerPage;
        setCurrentItems(data.slice(itemOffset,endOffset));
        setPageCount(Math.ceil(data.length/itemsPerPage));

    },[itemOffset,itemsPerPage,data])
    const handlePageClick=(event)=>{
        const newOffset=(event.selected*itemsPerPage)%data.length;
        setItemOffset(newOffset);
    }
    const [search,setSearch]=useState(
        {
           
            value: ''
          }
    )
    const handleChange =(e) => {
        const { value } = e.target;
    setSearch({...search, value:value });
   
      };
    return(
        <div>
            {/* <div className='flex  items-center justify-center  '>
    <div className='flex bg-[#FFFFFF] gap-2 p-2 rounded-lg w-8/12 items-center justify-center mt-[100px] '>
    
    <input type="search" value={search.value} onChange={(e)=>handleChange(e)} class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
     
    <button className='bg-blue-500 p-2 text-white rounded-md'><BiSearch size={22} /></button>
    </div>
  
</div> */}
       <FilterResults
          value={search.value}
          data={currentItems}
          renderResults={results => (
            <div className={`flex flex-wrap items-center justify-center mx-auto md:w-12/12 w-3/3 h-scren ${
              results.length > 4 ? "lg:w-12/12 h-scren" : ""
          }   `}>
              {results.map(el => (
                <div className=''>                           
        <Link to={`/frame`} state={{SelectedGraphics:el.base64Frame}}>
           <div key={results.length} className=' rounded-xl bg-[#F8FAFC] shadow-sm hover:bg-black shadow  mt-5  p-2 mx-3 md:mx-0 '>
   <img src={el.base64Frame} className='w-32 md:w-48 '  alt={el.Name} />
  <p className='text-center'>{el.Name}</p> 
   </div>
   </Link>
</div>
      ))}
            </div>
          )}
        />
       
        <ReactPaginate
      
breakLabel="..."
nextLabel="next >" 
onPageChange={handlePageClick}
pageRangeDisplayed={5}
pageCount={pageCount}
previousLabel="< previous"
renderOnZeroPageCount={null}
containerClassName="pagination"
pageLinkClassName="page-num"
previousLinkClassName="page-num"
nextLinkClassName="page-num"
activeLinkClassName="active"
        />
        </div>
    )
}