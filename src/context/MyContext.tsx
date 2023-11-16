import { createContext } from 'react';

export interface IContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const MyContext = createContext<IContext | undefined>(undefined);

export default MyContext;
