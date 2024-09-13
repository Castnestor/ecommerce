import GraphicBanner from "../../components/GraphicBanner";
import Hero from "../../components/Hero";
import Outsorce from "../../components/Outsorce";

export default function Home() {
  return (
    <div>
      <Hero/>
      <section className="section-packages">
      <GraphicBanner/>
      <Outsorce/>
      </section>
    </div>
  );
}
