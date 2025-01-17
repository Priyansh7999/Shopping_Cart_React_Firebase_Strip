import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import "./CartList.css"
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import CartTile from '../../components/cartTitle/CartTile'
export default function CartList() {
  const {cardItems}=useContext(ShoppingCartContext)
  console.log(cardItems)
  const navigate=useNavigate()
  return (
    <>
    <NavBar />
      <div className='cart-header'>
        <h1>My Cart Page</h1>
      </div>
      <div className='cart-main'>
        <div className='cart-first-half'>
        {
          cardItems?.length > 0 ? (
            cardItems.map((item, index) => {
              return (<>
              <CartTile singleCartItem={item} key={index} /> 
              <hr />
              </>
            )  
            })
          ) : (
            <h3 className="empty-cart">Cart is Empty</h3>
          )
        }
        </div>
        <div className='cart-second-half'>
          <h2>Order Summary</h2> 
          <p>Total: 
            <span>$
              {
                cardItems?.reduce((Total_Amount,item) => Total_Amount + item.totalPrice, 0).toFixed(2)
              }
            </span>
          </p>
          <p>Quantity:
            <span>
              {
                cardItems?.reduce((Total_Quantity,item) => Total_Quantity + item.quantity, 0)
              }
            </span>
          </p>
          <div className='buttons'>
            <button>Checkout</button>
            <button onClick={()=>navigate("/product-list")}>Continue Shopping</button>
          </div>
        </div>
      </div>
    </>
  )
}
