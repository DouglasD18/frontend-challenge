import { createContext } from 'react';

export interface CartProduct {
  qtd: number;
  photo: string;
  price: string;
  name: string;
}

export interface IContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const MyContext = createContext<IContext | undefined>(undefined);

export default MyContext;
