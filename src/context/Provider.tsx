import { ReactNode, useState } from "react";
import MyContext from "./MyContext";

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [count, setCount] = useState<number>(0);

  const states = {
    count,
    setCount
  }

  return (
    <main>
      <MyContext.Provider value={states}>
        { children }
      </MyContext.Provider>
    </main>
  )
}
