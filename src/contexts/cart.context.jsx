import { createContext, useState,useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const decreaseCartItem =(cartItems,productToRemove)=>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if(existingCartItem.quantity === 1){
    return cartItems.filter((item)=> item.id !== productToRemove.id)
  }
  
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  


}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  count:0,
  cartTotal:0
 
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal,setCartTotal] = useState(0)
  const [count,setCount] = useState(0)
  
  useEffect(()=>{
    const countItemsInCart = cartItems.reduce((prev,curr)=>prev + curr.quantity,0)
    setCount(countItemsInCart)


  },[cartItems])
  useEffect(()=>{
    const cartTotalCount = cartItems.reduce((total,curr)=>{
    return total + curr.quantity * curr.price

 },0)

    setCartTotal(cartTotalCount)
  },[cartItems])
  

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
  const decreaseItemFromCart = (product)=>{
    setCartItems(decreaseCartItem(cartItems,product))


  }
  const clearItemFromCart = (product)=>{
    const remainingItems = cartItems.filter((item)=>{return item.name !== product.name})
    setCartItems(remainingItems)

  }
   
    

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart,clearItemFromCart,count,decreaseItemFromCart,cartTotal};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};