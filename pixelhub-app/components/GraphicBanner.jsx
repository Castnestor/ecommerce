import Cart from "./Cart";

export default function GraphicBanner() {
  return (
    <div className="banners">
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
      <Cart
        color="cartcolor-green"
        picture="/images/home_digital-marketing-nz-615x430.webp"
        altern="computer graphics"
        button="LEARN MORE"
        title="DIGITAL MARKETING"
      >
        <ul>
          <li>-Social Media Creatives</li>
          <li>-Visual SEO</li>
          <li>-Web Desing</li>
          <li>-Content Marketing</li>
          <li>-Google Ads Creatives</li>
        </ul>
      </Cart>
      <Cart
        color="cartcolor-aqua"
        picture="/images/home_content-creation-nz-615x430.webp"
        altern="Person holding a camera"
        button="LEARN MORE"
        title="CONTENT CREATION"
      >
        <ul>
          <li>-Photo & Video</li>
          <li>-Editing Services</li>
          <li>-Aerial Shooting</li>
          <li>-Photo Slideshow</li>
          <li>-Motion Graphic</li>
        </ul>
      </Cart>
    </div>
  );
}
