
import Footer from "@/src/components/Footer/Footer";
import Navv from "@/src/components/Navv/nav";
// import Products from "@/src/components/Section3/Section3";
import ProductSection1 from "./productSection1";
import ProductSection2 from "./productSection2";



export default function products () {
  return (
    <div>
      <Navv/>
      <ProductSection1/>
      <ProductSection2/>
      <Footer/>

    </div>
  )
}
