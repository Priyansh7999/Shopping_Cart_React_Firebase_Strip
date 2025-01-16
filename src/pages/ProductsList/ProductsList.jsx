import React from 'react'
import { useContext } from 'react'
import Items from '../../components/items/Items'
import { ShoppingCartContext } from '../../context/index.jsx'
export default function ProductsList() {
  const {list,loading}=useContext(ShoppingCartContext)
  console.log(list)
  if(loading){
    return <h1>Loading data...</h1>
  }
  return (
    <>
      <section className='py-12 sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-full mx-auto text-center'>
            <h2 className='text-3xl font-extralight leading-tight text-gray-900 sm:text-4xl lg:text-5xl'>Our Featured Product</h2>
          </div>
          <div className='grid grid-cols-2 gap-5 mt-20 p-10 lg:mt-10 lg:gap-10 lg:grid-cols-4 '>
            {
              (list && list.length>0) ?
                     list.map((item,index)=>{
                      return (
                        <Items key={index} item={item} />
                      )
                     }):<h3 className='text-center'>No Product Found</h3>
            }
          </div>
        </div>
      </section>
    </>
  )
}
