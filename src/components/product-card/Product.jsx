import "./product.styles.scss";
import React,{useContext} from 'react';
import Button from "../button/Button";
import { CartContext } from "../../contexts/cart.context";

const Product = ({product}) => {
 const {name,price,imageUrl} = product
 const {addItemToCart} = useContext(CartContext)

  return (
    <div className="product-card-container">
     <img src={imageUrl} alt={name}/>
     <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>

     </div>
     <Button btnType="inverted" onClick={()=>addItemToCart(product)}>Add to cart</Button>

    </div>
  )
}

export default Product