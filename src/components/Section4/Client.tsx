// import React from 'react
import Image from "next/image";
import Ellips from "../../../public/Ellipse 6.png";
import Ellip from "../../../public/Ellipse 5.png";


export default function Client () {
  return (
    <section className="bg-[#f3f3f3] py-20">
        <div className="flex justify-center items-center flex-col px-4">
                <h1 className="text-black text-3xl font-bold">What our client says</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 pt-10">
                <div className="items-center bg-white justify-center w-full lg:max-w-130  p-4 rounded-xl border border-transparent hover:border-[#F0BD09] hover:shadow-md transition-all cursor-pointer duration-300 ">
                    <div className="flex items-center gap-5 "><Image src={Ellips} alt="Ellise Image" width={100} height={100} className="w-10 h-10"/><h2 className="text-black font-bold">Adewolu A.</h2></div>
                    <p className="text-black pl-15 text-justify">Best experience I have had with furniture designs in my home. Stress-free and great innovations.</p>
                </div>

                <div className="items-center bg-white justify-center w-full lg:max-w-130  p-4 rounded-xl border border-transparent hover:border-[#F0BD09] hover:shadow-md transition-all cursor-pointer duration-300 ">
                    <div className="flex items-center gap-5 "><Image src={Ellip} alt="Ellise Image" width={100} height={100} className="w-10 h-10"/><h2 className="text-black font-bold">Adewolu A.</h2></div>
                    <p className="text-black pl-15 text-justify">Best experience I have had with furniture designs in my home. Stress-free and great innovations.</p>
                </div>

                <div className="items-center bg-white justify-center w-full lg:max-w-130  p-4 rounded-xl border border-transparent hover:border-[#F0BD09] hover:shadow-md transition-all cursor-pointer duration-300 ">
                    <div className="flex items-center gap-5 "><Image src={Ellips} alt="Ellise Image" width={100} height={100} className="w-10 h-10"/><h2 className="text-black font-bold">Adewolu A.</h2></div>
                    <p className="text-black pl-15 text-justify">Best experience I have had with furniture designs in my home. Stress-free and great innovations.</p>
                </div>
                
                <div className="items-center bg-white justify-center w-full lg:max-w-130  p-4 rounded-xl border border-transparent hover:border-[#F0BD09] hover:shadow-md transition-all cursor-pointer duration-300 ">
                    <div className="flex items-center gap-5 "><Image src={Ellip} alt="Ellise Image" width={100} height={100} className="w-10 h-10"/><h2 className="text-black font-bold">Adewolu A.</h2></div>
                    <p className="text-black pl-15 text-justify">Best experience I have had with furniture designs in my home. Stress-free and great innovations.</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}
