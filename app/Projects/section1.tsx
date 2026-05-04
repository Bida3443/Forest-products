// import React from 'react'

import Image from "next/image"
import Rectangle2 from "../../public/Rectangle2.jpg"
import Rectangle3 from "../../public/Rectangle3.jpg"
import Rectangle4 from "../../public/Rectangle4.jpg"

export default function  section1  () {
  return (
    <section className="bg-white h-auto lg:min-h-screen w-full">
        <div className="flex flex-col pt-10">
            <div><h1 className="text-black font-bold text-center text-3xl" >Our Project</h1></div>

            {/* <div className="flex flex-col justify-start">
                <div><h2>Lecture Hall Designs</h2></div>
                <div className="flex lg:flex-row flex-col justify-center gap-10">
                  <div><Image src={Rectangle2} alt="Image Rectangle" width={600} height={300} className="w-full h-full" /></div>
                  <div className="flex flex-col space-y-8"> 
                    <div><Image src={Rectangle3} alt="Image Rectangle" width={300} height={300} className="w-100 h-50"/></div>
                    <div><Image src={Rectangle4} alt="Image Rectangle" width={300} height={300} className="w-100 h-50"/></div>
                  </div>
                </div>
            </div> */}


            <div className="flex flex-col">
  <h2 className="mb-6 font-bold text-lg">Lecture Hall Designs</h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    {/* Left Large Image */}
    <div className="w-full h-full">
      <Image
        src={Rectangle2}
        alt="Lecture hall"
        width={600}
        height={400}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    {/* Right Two Images */}
    <div className="grid grid-rows-2 gap-6">
      <Image
        src={Rectangle3}
        alt="Lecture hall"
        width={300}
        height={200}
        className="w-full h-full object-cover rounded-lg"
      />

      <Image
        src={Rectangle4}
        alt="Lecture hall"
        width={300}
        height={200}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

  </div>
</div>

        </div>
    </section>
  )
}
