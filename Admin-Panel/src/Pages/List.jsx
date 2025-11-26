import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const List = () => {
  const url = "http://localhost:4000"
  const [list, setList] = useState([]);

  

  const fetchList = async () =>{
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response);
    
    if(response.data.success) {
      setList(response.data.data)

    }
    else{
      toast.error("Something went wrong while fetching the List")
    }
     
  }

  useEffect(() =>{
  fetchList()
  },[])




  return (
    <div>
      <p>All Foods List</p>
      <div>
        <div className='flex'>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>description</b>
          <b>Image</b>
        </div>
        {list.map((item, index) =>{
          return(
            <div >
              <div key={index} className='flex gap-4'>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <span>{item.category}</span>
                <span>{item.description}</span>
                <img src={item.image} alt={item.name}  className='w-20 h-20'/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )


}


export default List
