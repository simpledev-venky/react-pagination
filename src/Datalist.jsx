import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

const Datalist = () => {
const [comtsData,setComtsData] = useState([])
const [currentPage,setCurrentPage] = useState(1)


const getCommts = async()=>{
const res = await fetch('https://jsonplaceholder.typicode.com/comments')
const data =  await res.json()
setComtsData(data)
console.log(data);
}

useEffect(()=>{
getCommts()
},[])

const itemsPerPage = 20
const lastIndex = currentPage * itemsPerPage
const firstIndex = lastIndex - itemsPerPage
const currentItems = comtsData.slice(firstIndex,lastIndex)
console.log(currentItems);
  return (
    <>
    <header>Datalist</header>
    {
    currentItems.map((item,index)=>{
        return(
            <div key ={index} className='comts-div'>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
            )
        })
    }
    <Pagination 
    totalitems= {comtsData.length} 
    itemsPerPage={itemsPerPage} 
    currentPage={currentPage}
    setCurrentPage = {setCurrentPage}
    />
    </>
  )
}

export default Datalist