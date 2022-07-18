import React,{useContext,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./single-category.styles.scss";
import { ProductContext } from '../../contexts/product.context';
import Product from '../../components/product-card/Product';
import { Link } from 'react-router-dom';

const SingleCategory = () => {

 const {category} = useParams()
 const {categoriesMap} = useContext(ProductContext)
 const [products,setProducts] = useState(categoriesMap[category])
 useEffect(()=>{

  setProducts(categoriesMap[category])
  console.log(categoriesMap);

 },[category,categoriesMap])
  return (
    <>
    {/* <Link to="/shop">
    <span className='single-category-back'>BACK</span>
    </Link> */}
     <h2 className='single-category-title'>{category.toUpperCase()}</h2>
    <div className='single-category-container'>    
     {products && products.map((product)=>{
      return (
         <Product key={product.id} product={product} />
      )
     })}
    </div>
    </>
    
  )
}

export default SingleCategory