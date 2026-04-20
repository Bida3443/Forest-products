import Image from "next/image";

import logo from "../../../forest-products/public/logo.png";
import Link from "next/link";
// import { text } from "stream/consumers";

const nav = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Projects",
    link: "/project",
  },
  {
    text: "Services",
    link: "services",
  },
  {
    text: "Products",
    link: "/product",
  },
  {
    text: "About Us",
    link: "/about",
  },
];

export default function Nav() {
  return (
    <nav className=" p-5  bg-[#F9F2DA] w-full z-20 max-h-screen sticky top-0 h-full border border-b-[#8B8B8B] ">
      <div className="flex flex-row justify-between items-center  px-20">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo Image"
            width={300}
            height={300}
            className="w-25 h-15"
          />
        </Link>
        <div className="text-black  hidden lg:block  items-center gap-8">
          <div className="flex gap-5 items-center">
            {nav.map((item, index) => (
              <a
                
                key={index}
                className="hover:text-[#F0BD09] transition-all duration-300"
              >
                <a href={item.link} className="active">
                    {item.text}
                </a>
                
              </a>
            ))}
            <a
              href="/contact"
              className="bg-[#F0BD09] transition-all duration-300 hover:bg-amber-50 hover:font-bold hover:text-[#F0BD09] p-2 text-white lg:text-[15px] flex items-center  px-8 rounded-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
