import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const List = () => {
  const url = "http://localhost:4000"
  const [list, setList] = useState([]);

  

  const fetchList = async () =>{
    const response = await axios.get(`${url}/api/food/list`);
    
    
    if(response.data.success) {
      setList(response.data.data)

    }
    else{
      toast.error("Something went wrong while fetching the List")
    }
     
  }

  const removeItem = async (foodId) =>{
    
    const response = await axios.post(`${url}/api/food/remove/`,{id:foodId})
     await fetchList();
     if(response.data.success){
      toast.success("Item removed successfully")
     }
     else{
      toast.error("Failed to remove the Item")
     }
    

    
  }

  useEffect(() =>{
  fetchList()
  },[])




  return (
    <div className='w-full h-100vh p-4 bg-gray-300 flex flex-col gap-4'>
      <p className='items-center mx-auto flex justify-center text-2xl font-bold mt-10 '>All Foods List</p>
      <div>
        <div className='flex justify-between  font-semibold border-b-2  pb-2 mb-2 text-xl mt-[50px]'>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>description</b>
          <b>Image</b>
          <b>Delete</b>
        </div>
        {list.map((item, index) =>{
          return(
            <div >
              <div key={index} className='flex justify-between border-b-1 p-2 items-center text-lg mx-auto'>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <span>{item.category}</span>
                <span>{item.description}</span>
                <img src={`${url}/images/`+item.image} alt={item.name}  className='w-20 h-20'/>
                <p onClick={() =>removeItem(item._id)} className='cursor-pointer'>❌</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )


}


export default List
