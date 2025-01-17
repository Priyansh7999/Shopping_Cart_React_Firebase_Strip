import React from 'react'
import "./NavBar.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
    const navigate=useNavigate()
    const goToCart = () => {
        navigate('/cart'); // Navigate to the cart page
    };
    const goToLogin = () => {
        navigate('/login'); // Navigate to the login page
    }
  return (
    <>
    <div className='navbar' >
      <div className='logo'>
        <h3>Shopping Cart</h3>
      </div>
      <div className='searchbar '>
        <input type="text" placeholder='Search for products, brands, and more' name='search' ></input>
      </div>
      <div className='cart-logo'>
        <button onClick={goToCart}><i className="bi bi-cart"></i></button>
        <button onClick={goToLogin}><i className="bi bi-person"></i></button>
      </div>
    </div>
    </>
  )
}
