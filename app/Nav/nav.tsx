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
    <nav className=" p-5  bg-[#F9F2DA] w-full h-full">
      <div className="flex flex-row justify-between items-center px-20">
        <div>
          <Image
          src={logo}
          alt="Logo Image"
          width={300}
          height={300}
          className="w-25 h-10"/>
        </div>
        <div className="text-black flex gap-3">
            <div className="flex gap-5">
                {nav.map((item,index)=>(
                    <div key={index}>
                        <div >{item.text}</div>
                    </div>
                ))}
            </div>
            <div>fvvvvs</div>
        </div>
      </div>
    </nav>
  );
}
