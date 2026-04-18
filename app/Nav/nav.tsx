import Image from "next/image";

import logo from "../../../forest-products/public/logo.png"
import { text } from "stream/consumers";

const nav = [
    {
        text:"Home",
        link:"/",
    },
    {
        text:"Projects",
        link:"/",
    },
    {
        text:"Services",
        link:"/",
    },
    {
        text:"Products",
        link:"/",
    },
    {
        text:"About Us",
        link:"/",
    },
]

export default function Nav() {
  return (
    <nav className=" p-5  bg-[#F9F2DA] w-full max-h-screen sticky top-0 h-full border border-b-gray-500 ">
      <div className="flex flex-row justify-between items-center  px-20">
        <div>
          <Image
          src={logo}
          alt="Logo Image"
          width={300}
          height={300}
          className="w-25 h-15"/>
        </div>
        <div className="text-black flex hidden lg:block  items-center gap-8">
            <div className="flex gap-5 items-center">
                {nav.map((item,index)=>(
                    <div key={index}>
                        <div className=" " >{item.text}</div>
                    </div>
                ))}
                 <button className="bg-[#F0BD09] p-2 text-white lg:text-[15px] flex items-center  px-8 rounded-xl">Contact Us</button>
            </div>
           
        </div>
      </div>
    </nav>
  );
}
