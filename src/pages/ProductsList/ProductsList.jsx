import React from 'react'
import { useContext } from 'react'
import Items from '../../components/items/Items'
import { ShoppingCartContext } from '../../context/index.jsx'
import "./ProductsList.css"
import NavBar from '../../components/NavBar/NavBar.jsx'
export default function ProductsList() {
  const {list,loading}=useContext(ShoppingCartContext)
  // console.log(list)
  if(loading){
    return <h1>Loading data...</h1>
  }
  return (
    <>
      <NavBar />
      <div className="products-heading">
        <h1>Our Featured Product</h1>
      </div>
      <div className='products-lists'>
        {
          (list && list.length>0) ?
                  list.map((item,index)=>{
                  return (
                    <Items key={index} item={item} />
                  )
                  }):<h3 className='text-center'>No Product Found</h3>
        }
      </div>
    </>
  )
}
