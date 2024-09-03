import Link from "next/link";
import Image from "next/image";
import facebook from "../public/home_facebok-icon-50x50.png"
import instagram from "../public/home_insta-icon-50x50.png";
import linkedin from "../public/home_linkedin-icon-50x50.png";

export default function Footer() {
  return (
    <footer>
      <div className="div-container-0">
        <div className="div-container-1">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/graphicdesign">Graphic Design</Link>
          <Link href="/digitalmarketing">Digital Marketing</Link>
          <Link href="/contentcreation">Content Creation</Link>
          <Link href="/allplans">All Planes</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="div-container-1">
          <h3>Information</h3>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/Privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/briefs">Briefs</Link>
        </div>
        <div className="div-container-1">
          <h3>Let's Connect</h3>
          <div className="logos">
          <Link href="#"><Image src={linkedin} alt="Instagram Icon"/></Link>
          <Link href="#"><Image src={facebook} alt="Instagram Icon"/></Link>
          <Link href="#"><Image src={instagram} alt="Instagram Icon"/></Link>
          </div>
        </div>
        <div className="div-container-1">
          <h3>Suscribe to our Newsletter</h3>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
