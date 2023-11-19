import Image from "next/image";
import Close from "@/../public/images/close.svg";
import { useContext } from "react";
import MyContext, { CartProduct } from "@/context/MyContext";
import { CSSProperties } from "react";

export function SideBar() {
  const { cartProducts, setCartProducts, openAside, setOpenAside } = useContext(MyContext)!;

  const closeProduct = (product: CartProduct): void => {
    product.qtd = 0;

    cartProducts.map(element => {
      if (element.id == product.id) {
        element = product;
      }
    })

    const newCart = cartProducts.filter(product => product.qtd > 0);
    setCartProducts(newCart);
  }

  const onPlus = (product: CartProduct): void => {
    product.qtd += 1;
    cartProducts.map(element => {
      if (element.id == product.id) {
        element = product;
      }
    })

    const newCart = cartProducts.filter(product => product.qtd > 0);
    setCartProducts(newCart);
  }

  const onMinus = (product: CartProduct): void => {
    product.qtd -= 1;
    cartProducts.map(element => {
      if (element.id == product.id) {
        element = product;
      }
    })

    const newCart = cartProducts.filter(product => product.qtd > 0);
    setCartProducts(newCart);
  }

  const closeAside = () => {
    setOpenAside(false);
  }

  const style: CSSProperties = {
    opacity: (openAside ? 1 : 0),
    visibility: (openAside ? "visible" : "hidden"),
    transform: (openAside ? "translateX(0%)" : "translateX(110%)"),
    transition: "all 0.5s"
  }

  return (
    <aside className="aside" style={style}>
      <div className="aside-header">
        <div>
          <p>Carrinho de compras</p>
        </div>
        <Image src={Close} alt={"Imagem de um X"} width={40} height={40} onClick={() => closeAside()}/>
      </div>
      <div className="auxiliar">
        { cartProducts[0] ? cartProducts.map(product => (
          <div key={ product.id } className="product-box">
              <Image src={product.photo} alt={ product.name + " foto" } width={80} height={80} />
              <span>{product.name}</span>
              <div className="product-qtd">
                <button
                  className="minus"
                  onClick={() => onMinus(product)}
                >
                  -
                </button>
                <span>{ product.qtd }</span>
                <button
                  className="plus"
                  onClick={() => onPlus(product)}
                >
                  +
                </button>
              </div>
              <span>{`R$${Number(product.price) * product.qtd}`}</span>
              <Image src={Close} alt={"Imagem de um X"} width={20} height={20} onClick={() => closeProduct(product)} className="little-close" />
          </div>
        )) : "" }
      </div>
      <div className="total">
        <p>TOTAL:</p>
        <p>R${ cartProducts.reduce((acc: number, curr: CartProduct) => acc + Number(curr.price) * curr.qtd, 0) }</p>
      </div>
      <div className="aside-footer">
        <p>Finalizar Compra</p>
      </div>
    </aside>
  );
}