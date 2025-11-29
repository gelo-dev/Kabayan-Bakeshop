import { createContext, useState } from "react";

export const CartContext = createContext(); // create context

export function CartProvider({ children }) {
  const [orderedProduct, setOrderedProduct] = useState([]);

  return (
    <CartContext.Provider value={{ orderedProduct, setOrderedProduct }}>
      {children}
    </CartContext.Provider>
  );
}
