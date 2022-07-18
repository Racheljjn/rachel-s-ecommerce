import React from 'react';
import "./category-preview.styles.scss";
import Product from '../product-card/Product';
import { Link } from 'react-router-dom';

const CategoryPreview = ({title,products}) => {
  return (
    <div className='category-preview-container'>
     <h2>
      <Link to={`/shop/${title}`}>
      <span className='title'>GO TO {title.toUpperCase()}</span>
      </Link>
     </h2>
     <div className='preview'>
      {products.filter((_,index)=>index < 4).map((product)=>{
       return <Product key={product.id} product={product} />
      })}
     </div>

    </div>
  )
}

export default CategoryPreview