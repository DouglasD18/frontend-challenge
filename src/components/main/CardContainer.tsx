import Image from "next/image";
import Buy from "@/../public/images/buy.svg";

interface CardProps {
  products: Products
}

export function Card({ products }: CardProps) {
  return (
    <div className="card-container">
      <Image src={products.photo} alt={ products.name + " foto" } width={150} height={150} />
      <div className="name-and-price">
          <p>{ products.name }</p>
          <p>R${ parseFloat(products.price.toString().replace(",", "")) }</p>
      </div>
      <p>{ products.description }</p>
      <div className="buy">
        <Image src={ Buy } alt={"Imagem de uma sacola de compras"} width={40} height={40} />
        <span>COMPRAR</span>
      </div>
    </div>
  )
}