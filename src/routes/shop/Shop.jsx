import {Routes,Route} from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import "./shop.styles.scss";
import SingleCategory from "../single-category/SingleCategory";

const Shop =()=>{
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<SingleCategory/>}/>
    </Routes>
  )
}

export default Shop