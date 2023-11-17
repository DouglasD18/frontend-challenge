import { ReactNode, useState } from "react";
import MyContext, { CartProduct } from "./MyContext";

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [count, setCount] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const states = {
    count,
    setCount,
    cartProducts,
    setCartProducts
  }

  return (
    <main>
      <MyContext.Provider value={states}>
        { children }
      </MyContext.Provider>
    </main>
  )
}
