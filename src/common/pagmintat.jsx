import React from 'react';
import _ from "lodash";
 const Pagination=props =>{
   console.log("hi")
   const {itemCount,pageSize,currentPage}= props;
   const pagesCount=itemCount/pageSize;
   const pages=_.range(1,pagesCount+1);
  return( 
    
  <nav aria-label="Page navigation example">
  <ul className="pagination">
  {pages.map(page=>(<li key={page}className={page===currentPage?'page-item active':'page-item'}><a className="page-link" onClick={()=>props. onPageChange(page)}>{page}</a></li>

))}
    
    
    
  </ul>
</nav>
  )
}
export default Pagination
