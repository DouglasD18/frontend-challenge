import { ReactNode, useState } from "react";
import MyContext, { CartProduct } from "./MyContext";

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [count, setCount] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [openAside, setOpenAside] = useState<boolean>(false);

  const states = {
    count,
    setCount,
    cartProducts,
    setCartProducts,
    openAside,
    setOpenAside
  }

  return (
    <main>
      <MyContext.Provider value={states}>
        { children }
      </MyContext.Provider>
    </main>
  )
}
