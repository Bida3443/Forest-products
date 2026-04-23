import Frame from "@/src/components/Frame/Frame";
import Hero from "@/src/components/Hero/hero";
import Nav from "@/src/components/Nav/nav";
import Section from "@/src/components/Section1/Section";
import Section3 from "@/src/components/Section3/Section3";


export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Frame/>
      <Section/>
      <Section3/>
    </div>

  );
}
