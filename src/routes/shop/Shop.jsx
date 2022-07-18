import React,{useContext} from 'react';
import { ProductContext } from '../../contexts/product.context';
import "./shop.styles.scss";
import CategoryPreview from '../../components/preview/CategoryPreview';

const Shop = () => {
  const {categoriesMap} = useContext(ProductContext)

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((title)=>{
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products}/>
      })}
    </div>
  );
}

export default Shop