import {useEffect,useState} from 'react';
import ReactPaginate from 'react-paginate';
import FilterResults from 'react-filter-search'
import './Pagination.css'
import {Link}  from "react-router-dom"
export default function Images(props){
    const {data}=props;
 
    const [currentItems,setCurrentItems]=useState([]);
    const [pageCount,setPageCount]=useState(0);
    const [itemOffset,setItemOffset]=useState(0);
    const itemsPerPage=6;
    useEffect(()=>{
        const endOffset=itemOffset+itemsPerPage;
        setCurrentItems(data.slice(itemOffset,endOffset));
        setPageCount(Math.ceil(data.length/itemsPerPage));

    },[itemOffset,itemsPerPage,data])
    const handlePageClick=(event)=>{
        const newOffset=(event.selected*itemsPerPage)%data.length;
        setItemOffset(newOffset);
    }
    return(
        <div>
       <FilterResults
          value={props.value}
          data={currentItems}
          renderResults={results => (
            <div className={`flex flex-wrap md:w-12/12 w-3/3 h-scren ${
              results.length > 4 ? "lg:w-12/12 h-scren" : ""
          }   `}>
              {currentItems.map(el => (
                <div className=''>                           
        <Link to={`/frame/${el.base64Frame}`} state={{SelectedGraphics:el.base64Frame}}>
           <div key={results.length} className='  rounded-xl bg-[#F8FAFC] shadow-sm hover:bg-black shadow  mt-5  p-2 mx-3 md:mx-0 '>
   <img src={el.base64Frame} className='w-32'  alt={el.Name} />
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