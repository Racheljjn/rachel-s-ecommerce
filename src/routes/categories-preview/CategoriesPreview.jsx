import React,{useContext} from 'react';
import { ProductContext } from '../../contexts/product.context';
import CategoryPreview from '../../components/preview/CategoryPreview';

const CategoriesPreview = () => {
  const {categoriesMap} = useContext(ProductContext)

  return (
    <div className='category-preview-container'>
      {Object.keys(categoriesMap).map((title)=>{
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products}/>
      })}
    </div>
  );
}

export default CategoriesPreview