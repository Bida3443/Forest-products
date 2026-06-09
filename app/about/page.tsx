
import Footer from "@/src/components/Footer/Footer";
import Navv from "@/src/components/Navv/nav";
import Hero from "../about/hero";
import Sectionabout from "./sectionabout";
import Section2about from "./section2about";
import Section3about from "./section3about";




export default function about () {
  return (
    <div>
      <Navv/>
      <Hero/>
      <Sectionabout/>
      <Section2about/>
      <Section3about/>
      <Footer/>
      

    </div>
  )
}
