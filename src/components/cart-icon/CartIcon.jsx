import React,{useContext} from 'react';
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const {isCartOpen,setIsCartOpen,count} = useContext(CartContext)
  const toggleCart=()=>{
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon"/>
      <span className='item-count'>{count}</span>
    </div>
  )
}

export default CartIcon