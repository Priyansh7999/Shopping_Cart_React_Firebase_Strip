import React, { useContext } from 'react'
import "./CartTile.css"
import { ShoppingCartContext } from '../../context'
export default function CartTile({singleCartItem}) {
    const {handleRemoveFromCart,handleAddToCart} = useContext(ShoppingCartContext);
  return (
    <div className='cart-card'>
        <div className='cart-card-image-name'>
            <img src={singleCartItem?.thumbnail} alt={singleCartItem?.title} />
            <div>
                <h3>{singleCartItem?.title}</h3>
                <p>{singleCartItem?.rating} ⭐</p>
            </div>
        </div>
        <div className='cart-card-quantity'>
            <button onClick={()=>handleAddToCart(singleCartItem)}>➕</button>
            <p>Quantity</p>
            <p>{singleCartItem?.quantity}</p>
            <button
                onClick={()=>handleRemoveFromCart(singleCartItem,false)}
                disabled={singleCartItem?.quantity===1}>➖</button>
        </div>
        <div className='cart-card-price'>
            <h3>${singleCartItem?.totalPrice}</h3>
            <button onClick={()=>handleRemoveFromCart(singleCartItem,true)}>Remove</button>
        </div>
    </div>
  )
}
