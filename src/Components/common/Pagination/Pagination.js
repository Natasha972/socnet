import React, {useState} from 'react'
import './Pagination.css'

function Pagination(props) {

  let pagesCount = Math.ceil(props.itemsCount / props.limit);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionSize= 3;
  let portionsCount= Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPage= (portionNumber-1)*(portionSize+1);
  let rightPortionPage=portionNumber*portionSize;



  return (
    <div>
      <button onClick={ ()=> setPortionNumber( (state)=> state>1?state-1:state )}>&lt;</button>
      {pages.filter(page=> page>=leftPortionPage && page<=rightPortionPage)
      .map((page) => (
        <span key={page}
              onClick={() => props.setCurrentPage(page)}
              className={page === props.currentPage ? "selected" : ""}
        >{page}</span>
      ))}
      <button onClick={
        ()=> setPortionNumber( (state)=> state<portionsCount?state+1:state )}>&gt;</button>
    </div>
  )
}

export default Pagination
