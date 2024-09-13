import GraphicBanner from "../../components/GraphicBanner";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <section className="section-packages">
      <GraphicBanner/>
      </section>
    </div>
  );
}
