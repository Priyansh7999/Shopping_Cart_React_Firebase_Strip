import React from 'react'
import "./items.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
export default function Items({item}) {
  const naviagte=useNavigate()
  const {handleAddToCart,cardItems}=useContext(ShoppingCartContext)
  function handleClick(id){
      naviagte(`/product-details/${id}`)
  }
  return (
    <div className='card'>
        <div className='card-image'>
          <img 
            src={item.thumbnail}
            alt={item.title}
          />
        </div>
        <div className='card-content'>
          <h3 className='font-bold text-gray-950'>{item?.title}</h3>
          <h3 className='font-bold text-gray-950'>${item?.price}</h3>
        </div>
        <div className='Button'>
          <button className='px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold' onClick={()=>{handleClick(item.id)}}> View Details </button>
          <button className='btn px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold '
                disabled={cardItems?.findIndex((it) => it.id === item?.id) > -1}
                 onClick={() => handleAddToCart(item)}  >Add To Cart</button>
        </div>
    </div>
  )
}
