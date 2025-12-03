import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext(); // create context

export function CartProvider({ children }) {
  const [orderedProduct, setOrderedProduct] = useState([]);
   const increaseQty = (id) => {
    setOrderedProduct(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (items) => {
    if(items.quantity <= 1 ){
       toast.warning("Quantity cannot be less than 1!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "colored",
            });
    }else{
      setOrderedProduct(prev =>
      prev.map(item =>
        item.id === items.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    }

    
  };

  return (
    <CartContext.Provider value={{ orderedProduct, setOrderedProduct,increaseQty , decreaseQty}}>
      {children}
    </CartContext.Provider>
  );
}
