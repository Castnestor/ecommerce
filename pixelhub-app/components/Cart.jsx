import Image from "next/image";
import Button from "./Button";

export default function Cart() {
  return (
    <div className="cart-content">
      <div className="cart-image">
        <Image
          src="/images/home_graphic-design-logo-design-nz-615x430.webp"
          alt="laptop"
          fill
        ></Image>
      </div>
      <div className="cart-info">

      </div>
      <div className="cart-btn">
        <Button lRef="#" style="outlined">I'm a Button</Button>
      </div>
    </div>
  );
}
