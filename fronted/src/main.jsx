import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product_list from './pages/Product_list.jsx'
import Product_detail from './pages/Product_detail.jsx'
import Cart from './pages/Cart.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product_list' element={<Product_list/>}/>
      <Route path='/Product_detail' element={<Product_detail/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
