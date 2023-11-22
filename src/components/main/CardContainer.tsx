import Image from "next/image";
import Buy from "@/../public/images/buy.svg";
import { useContext } from "react";
import MyContext, { CartProduct } from "@/context/MyContext";
import { ShowToast } from "../infos/ToastMessage";

interface CardProps {
  product: Products
}

export function Card({ product }: CardProps) {
  const { setCount, count, setCartProducts, cartProducts } = useContext(MyContext)!;

  const onClick = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      qtd: 1,
      photo: product.photo,
      price: product.price,
      name: product.name
    }

    if (!cartProducts.find(product => product.id === cartProduct.id)) {
      if (typeof cartProducts !== "undefined") {
        cartProducts.push(cartProduct);
        setCartProducts(cartProducts);
      } else {
        setCartProducts([cartProduct]);
      }
  
      if (!count) {
        setCount(1);
      } else {
        setCount(count + 1);
      }
      
      ShowToast({ message: `${product.name} adicionado ao carrinho!`, type: "success"})
    } else {
      ShowToast({ message: `${product.name} já foi adicionado ao carrinho!`, type: "info" })
    }

  }

  return (
    <div className="card-container">
      <Image src={product.photo} alt={ product.name + " foto" } width={150} height={150} />
      <div className="name-and-price">
          <p>{ product.name }</p>
          <p>R${ parseFloat(product.price.toString().replace(",", "")) }</p>
      </div>
      <p className="description">{ product.description }</p>
      <button className="buy" onClick={ () => onClick() }>
        <Image src={ Buy } alt={"Imagem de uma sacola de compras"} width={18} height={18} />
        <span>COMPRAR</span>
      </button>
    </div>
  )
}
