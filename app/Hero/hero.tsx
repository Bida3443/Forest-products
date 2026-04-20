import React from 'react'
import Image from 'next/image'
import Arrow from "../../public/Arrow.png"



export default function hero() {
  return (
    <section className="h-screen bg-[#F9F2DA] w-full ">
        <div className="flex flex-row pt-40 justify-between place-items-center text-black ">
            <div className='pl-20'>
                <div className='space-y-4 w-150 bg-amber-800'>
                    <h1 className='text-4xl font-bold'>Experience <br /> comfort and style  <br /> like never before</h1>
                    <p>Upgrade your home with our stylish and functional furniture collection. Shop <br /> now and transform your living space</p>
                     <button className="bg-[#F0BD09] p-2 text-white lg:text-[15px] flex items-center  px-8 rounded-xl">See our products 
                        <Image
                        src={Arrow}
                        alt='arrow'
                        width={300}
                        height={300}
                        className='w-5 h-5'/>  </button>
                </div>
            </div>
            <div>nnnnnmvbdddddder</div>
        </div>
    </section>
  )
}

