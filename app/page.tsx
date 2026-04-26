import Frame from "@/src/components/Frame/Frame";
import Hero from "@/src/components/Hero/hero";
import Nav from "@/src/components/Nav/nav";
import Section from "@/src/components/Section1/Section";
import Slider from "@/src/components/Section2/Slider";
import Section3 from "@/src/components/Section3/Section3";
import Client from "@/src/components/Section4/Client";


export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Frame/>
      <Section/>
      <Slider/>
      <Section3/>
      <Client/>
    </div>

  );
}
