import React,{createContext,useState,useEffect} from "react";
// import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const ProductContext = createContext({
 categoriesMap:[]
})

export const ProductProvider=({children})=>{


 const [categoriesMap,setCategoriesMap] = useState({})

 useEffect(()=>{
  const getCategoriesMap =async()=>{
   const categoryMap = await getCategoriesAndDocuments();
   setCategoriesMap(categoryMap)
  }
  getCategoriesMap()

 },[])
 // useEffect(()=>{
 //  addCollectionAndDocuments("categories",SHOP_DATA)

 // },[])
 return (
  <ProductContext.Provider value={{categoriesMap}}>
   {children}
  </ProductContext.Provider>
 )
}