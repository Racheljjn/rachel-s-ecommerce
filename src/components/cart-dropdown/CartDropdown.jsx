import React,{useContext} from 'react';
import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import { CartContext } from '../../contexts/cart.context';
import CartItem from "../cart-item/CartItem";
import { Link } from 'react-router-dom';

const CartDropdown = () => {
 const {cartItems,isCartOpen,setIsCartOpen} = useContext(CartContext)
 
  return (
    <div className='cart-dropdown-container' onClick={()=>setIsCartOpen(false)}>
     <div className='cart-items' onClick={(e)=>e.stopPropagation()}>
      {cartItems.map((item,index)=>{
       return <CartItem key={index} cartItem={item}/>
      })}
     </div>
     <Link to="/checkout">
     <Button>Go to checkout</Button>
     </Link>
     

    </div>
  )
}

export default CartDropdown