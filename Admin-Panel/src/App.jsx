import React from 'react'
import Navbar from './Components/Navbar'
import Sidebaar from './Components/Sidebaar'
import { Route, Routes} from 'react-router-dom'
import Add from './Pages/Add'
import List from './Pages/List'
import Order from './Pages/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='flex '>
        <Sidebaar />
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path='/list' element={<List />} />
          <Route path='/order' element= {<Order />} />
        </Routes>
      </div>

      
    </div>
  )
}

export default App
