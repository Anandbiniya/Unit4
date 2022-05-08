import react, { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();
//cart context will give two thing two provider and consumer

export const CartProvider = () => {
  const [value, setValue] = useState(0);
  return (
    <CartContext.Provider value={"hello"}>
      (children)
    </CartContext.Provider>
  );
};
 export const CartConsumer=()=>{
    return(
<CartContext.Consumer>

        </CartContext.Consumer>

 )
   }

// CartContext.Provider
// CartContext.Consumer
