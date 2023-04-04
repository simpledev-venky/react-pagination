import React from 'react'

const Pagination = (props) => {
   const {totalitems,itemsPerPage,currentPage, setCurrentPage} 
   = props
   let numArr = []
   for( let i=1;i<=Math.ceil(totalitems/itemsPerPage); i++){
     numArr.push(i)
}
  return (
        <div className='btn-container'>
    {
    numArr.map((n,index)=>{
    return(
        <button key={index}
        onClick={ ()=>setCurrentPage(n)}
        className= {currentPage === n ?"active-btn":""}
        >{n}</button>
        )
    
    })
    
    }
    </div>
  )
}

export default Pagination