
import Footer from "@/src/components/Footer/Footer";
import Navv from "@/src/components/Navv/nav";
import Hero from "../about/hero";
import Sectionabout from "./sectionabout";
import Section2about from "./section2about";
import Section3about from "./section3about";
import ProductSlider from "./section4about";
import Section5about from "./section5about";
import Section6about from "./section6about";




export default function about () {
  return (
    <div>
      <Navv/>
      <Hero/>
      <Sectionabout/>
      <Section2about/>
      <Section3about/>
      <ProductSlider/>
      <Section5about/>
      <Section6about/>
      <Footer/>
      

    </div>
  )
}
