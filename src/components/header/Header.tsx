import Image from "next/image";
import CartImage from "@/../public/images/cart.svg";
import { useContext } from "react";
import MyContext from "@/context/MyContext";

export default function Header() {
  const { count } = useContext(MyContext)!;

  return (
    <header className="header-container">
      <div className="logo">
        <span>MKS</span>
        <span>Sistemas</span>
      </div>
      <div className="cart-container">
        <Image src={CartImage} alt={"Imagem de um carrinho de compras."} width={15} height={15} />
        <span>{ count ? count : 0 }</span>
      </div>
    </header>
  );
}
