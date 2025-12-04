import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext(); // create context

export function CartProvider({ children }) {
  const [orderedProduct, setOrderedProduct] = useState([]);


   const increaseQty = (items) => {
    console.log(items);
    
    setOrderedProduct(prev =>
      prev.map(item =>
        item.id === items.id && item.category === items.category
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (items) => {
   
      setOrderedProduct(prev =>
      prev.map(item =>
        item.id === items.id && item.category === items.category
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    
  };

  return (
    <CartContext.Provider value={{ orderedProduct, setOrderedProduct,increaseQty , decreaseQty}}>
      {children}
    </CartContext.Provider>
  );
}
