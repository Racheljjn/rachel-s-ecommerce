import "./product.styles.scss";
import React from 'react';
import Button from "../button/Button"

const Product = ({product}) => {
 const {name,price,imageUrl} = product
  return (
    <div className="product-card-container">
     <img src={imageUrl} alt={name}/>
     <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>

     </div>
     <Button btnType="inverted">Add to cart</Button>

    </div>
  )
}

export default Product