import React,{useContext} from 'react';
import { ProductContext } from '../../contexts/product.context';
import Product from '../../components/product-card/Product';
import "./shop.styles.scss"

const Shop = () => {
  const {shopData} = useContext(ProductContext)
  return (
    <div className='products-container'>
     {shopData.map((item)=>{
      return <Product key={item.id} product={item}/>
     })}
    </div>
  )
}

export default Shop