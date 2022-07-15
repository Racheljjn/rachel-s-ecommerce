import React,{createContext,useState} from "react";
import SHOP_DATA from "../data/shopData.json"

export const ProductContext = createContext({
 products:[]
})

export const ProductProvider=({children})=>{


 const [shopData,setShopData] = useState(SHOP_DATA)

 return (
  <ProductContext.Provider value={{shopData}}>
   {children}
  </ProductContext.Provider>
 )
}