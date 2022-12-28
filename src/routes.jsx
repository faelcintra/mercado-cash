import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import {ShoppingCart} from './pages/ShoppingCart'

export function InitialRoutes() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/shoppingcart/:id' element={<ShoppingCart client={(cliente) => cliente}/>}  />
            </Routes>
        </BrowserRouter>
    )
}
