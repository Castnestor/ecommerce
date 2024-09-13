import Image from "next/image";
import Button from "./Button";

{
  /* To use this component you need to add all the information like is shown in the next line
  
  <Cart
        color="cartcolor-black"
        picture="/images/home_graphic-design-logo-design-nz-615x430.webp"
        altern="Person drawing"
        button="LEARN MORE"
        title="GRAPHIC DESIGN"
      >
        <ul>
          <li>-Logo Design</li>
          <li>-Digital Products</li>
          <li>-Collateral Print</li>
          <li>-Packaging</li>
          <li>-Event Graphics</li>
        </ul>
      </Cart> 

      use color to change the background color of the cart, use cartcolor-black/green/aqua 
*/
}

export default function Cart({
  button,
  title,
  children,
  picture,
  altern,
  color,
}) {
  return (
    <div className={"cart-content " + color}>
      <div className="cart-image">
        <Image src={picture} alt={altern} fill></Image>
      </div>
      <div className="cart-info">
        <div className="cart-info">
          <h3>{title}</h3>
          <div className="cart-list">{children}</div>
        </div>
        <div className="cart-btn">
          <Button lRef="#" type="btn-primary">
            {button}
          </Button>
        </div>
      </div>
    </div>
  );
}
