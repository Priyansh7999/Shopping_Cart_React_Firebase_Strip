import React from "react"
import { Route, Routes,Router } from "react-router-dom"
import ProductsList from "./pages/ProductsList/ProductsList"
import ProductsDetails from "./pages/ProductsDetails/ProductsDetails"
import CartList from "./pages/CartList/CartList"
function App() {
  return(
    <>
        <Routes>
          <Route path="/product-list" element={<ProductsList />} />
          <Route path="/product-details/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
    </>
  )
}

export default App
