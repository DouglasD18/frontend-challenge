import "@/styles/header/header.scss";
import Image from "next/image";

export default function Header() {
  return 
  <header>
    <div>
      <span>MKS</span>
      <span>Sistemas</span>
    </div>
    <div>
    <Image src={"@/../public/images/"} alt={""} />
    </div>
  </header>
}
