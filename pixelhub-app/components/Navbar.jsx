import Link from "next/link";
import Image from "next/image";
import logo from "../public/home_pixelhub-nz-logo-325x125.png";

export default function Navbar() {
    return(
        <header>
            <Link href="/"><Image src={logo} alt="Pixelhub"/></Link>
            
            <nav>
                <Link href="/graphicdesign">Graphic Design</Link>
                <Link href="/digitalmarketing">Digital Marketing</Link>
                <Link href="/contentcreation">Content Creation</Link>
                <Link href="/allplans">All Planes</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}