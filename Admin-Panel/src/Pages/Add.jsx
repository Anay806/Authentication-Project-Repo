import React from 'react'
import image from '../assets/upload.webp'

const Add = () => {
  return (
    <div className=''>
      <form >
        <div>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image} alt=""  className='w-20 h-20'/>
          </label>
          <input type="file" hidden required  />
        </div>
        <div>
          <p>Product Name</p>
          <input type="text"name='name' placeholder='Type name' />
        </div>
        <div>
          <p>Product Decsription</p>
          <textarea name="description" rows='6' placeholder='Write content here' required></textarea>
        </div>
        <div>
          <div>
            <p>Product Category</p>
            <select name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure-Veg">Pure-Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p>Product Price</p>
            <input type="number" name='price' placeholder='$20' />
          </div>
        </div>
        <button type='submit'>ADD</button>
      </form>
      
    </div>
  )
}

export default Add
