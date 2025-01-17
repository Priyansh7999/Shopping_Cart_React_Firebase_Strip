import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ShoppingCartContext = createContext(null);

export default function ShoppingCart({ children }) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  
  // Safeguard: Ensure cardItems is an array, even if localStorage is empty or corrupted
  const [cardItems, setCardItems] = useState(() => {
    const storedItems = localStorage.getItem("cardItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const navigate = useNavigate();

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        console.log(result);
        if (result) {
          setList(result.products);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Handle adding items to the cart
  function handleAddToCart(item) {
    console.log(item);

    // Ensure cardItems is an array
    const updatedCart = [...cardItems];
    const itemIndex = updatedCart.findIndex((x) => x.id === item.id);

    if (itemIndex === -1) {
      updatedCart.push({ ...item, quantity: 1, totalPrice: item.price });
    } else {
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: updatedCart[itemIndex].quantity + 1,
        totalPrice: updatedCart[itemIndex].price * (updatedCart[itemIndex].quantity + 1),
      };
    }

    setCardItems(updatedCart);
    localStorage.setItem("cardItems", JSON.stringify(updatedCart));
  }

  // Handle removing items from the cart
  function handleRemoveFromCart(item, isFullyRemoveFromCart) {
    let updatedCart = [...cardItems];
    const itemIndex = updatedCart.findIndex((x) => x.id === item.id);

    if (itemIndex !== -1) {
      if (isFullyRemoveFromCart) {
        updatedCart.splice(itemIndex, 1);
      } else {
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity - 1,
          totalPrice: updatedCart[itemIndex].price * (updatedCart[itemIndex].quantity - 1),
        };
        // If quantity goes to 0, remove the item
        if (updatedCart[itemIndex].quantity <= 0) {
          updatedCart.splice(itemIndex, 1);
        }
      }
      setCardItems(updatedCart);
      localStorage.setItem("cardItems", JSON.stringify(updatedCart));
    }
  }

  console.log("in context");
  console.log(cardItems);

  return (
    <ShoppingCartContext.Provider value={{ list, setList, loading, setLoading, handleAddToCart, productDetails, setProductDetails, cardItems, handleRemoveFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
