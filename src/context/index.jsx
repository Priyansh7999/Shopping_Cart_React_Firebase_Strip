//create context
//provide state to context
//wrap context in root component
//consume the context using useContext
import React, { createContext, useContext, useState, useEffect } from 'react'
export const ShoppingCartContext=createContext(null);
export default function ShopingCart({children}) {
    const [loading,setLoding]=useState(true);
    const [list,setList]=useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response=await fetch("https://dummyjson.com/products");
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const result=await response.json();
                console.log(result)
                if(result){
                    setList(result.products);
                    setLoding(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
  return (
    <ShoppingCartContext.Provider value={{list,setList,loading}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
