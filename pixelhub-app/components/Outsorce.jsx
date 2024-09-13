import Image from "next/image";

export default function Outsorce() {
  return (
    <div className="outsorce-info">
      <div className="outsorce-image">
        <Image
          src="/images/home_Digital-marketing-stats-nz-1230x770.webp"
          alt="Explanation of how much time a person uses internet"
          fill
        />
      </div>
      <div className="outcome-data">
        <h3>Why Outsource Your Visual Content Creation?</h3>
        <ul>
          <li>Enhance your branding</li>
          <li>Showcase excellence</li>
          <li>Build consumer trust and engagement</li>
          <li>Avoid the hiring hassle</li>
          <li>No software purchasing</li>
          <li>No equipment acquisition</li>
        </ul>
      </div>
    </div>
  );
}
