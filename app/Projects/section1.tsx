// import React from 'react'

import Image from "next/image"
import Rectangle2 from "../../public/Rectangle2.jpg"
import Rectangle3 from "../../public/Rectangle3.jpg"
import Rectangle4 from "../../public/Rectangle4.jpg"


export default function  section1  () {
  return (
    <section className="bg-white h-auto lg:min-h-screen w-full">
        <div className="flex flex-col pt-10">
            <div className="mb-5"><h1 className="text-black font-bold text-center text-3xl" >Our Projects</h1></div>

            <div className="flex flex-col lg:px-10 px-2 py-5 ">
  <h2 className="mb-6 font-bold text-lg text-black">Lecture Hall Designs</h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
    
    {/* Left Image */}
    <div className="h-62.5 lg:h-100">
      <Image
        src={Rectangle2}
        alt="Lecture hall"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    {/* Right Images */}
    <div className="grid grid-rows-2 gap-6 h-62.5 lg:h-100">
      <Image
        src={Rectangle3}
        alt="Lecture hall"
        className="w-full h-full object-cover rounded-lg"
      />
      <Image
        src={Rectangle4}
        alt="Lecture hall"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

  </div>
</div>

        </div>

         <div className="flex flex-col lg:px-10 px-2 py-5 mt-10">
  <h2 className="mb-6 font-bold text-lg text-black">About The Project</h2>
  <p className="text-black/60 text-justify leading-10">Recently, we were tasked with designing and manufacturing chairs and tables for lecture theaters at a prestigious university. The project was a unique challenge that required us to create durable, functional, and comfortable furniture that could withstand the wear and tear of daily use. <br /> The first step in the project was to consult with the university and gather information on the specific requirements for the furniture. We needed to consider factors such as the number of seats required in each lecture theater, the amount of space available, and the comfort of the seating. <br /> Our design team then began working on concepts for the chairs and tables. The team had to balance aesthetics with functionality, ensuring that the furniture was both stylish and practical. They also had to take into account the budget and timeline for the project, ensuring that the final product would be delivered on time and within budget. <br />  Once the designs were approved, the manufacturing process began. We utilized advanced manufacturing techniques and materials to create the chairs and tables. We used high-quality materials that were both durable and aesthetically pleasing, such as metal frames, leather or fabric upholstery, and solid wood tabletops. <br /> Throughout the manufacturing process, we worked closely with the university to ensure that the final product met all of their requirements. They conducted rigorous testing to ensure that the chairs and tables were comfortable, sturdy, and safe for use by students and faculty. <br /> Finally, the project was completed and the furniture was delivered to the university. The chairs and tables were installed in the lecture theaters, and the university was thrilled with the final result. The furniture was not only functional and durable but also beautiful, enhancing the overall appearance of the lecture theaters. <br /> In conclusion, this project was a great success for the our company, as well as the university. Our company was able to create high-quality furniture that met the university's specific requirements, while also staying within budget and delivering on time. This project demonstrates the importance of collaboration and communication between businesses and their clients, and the value of advanced manufacturing techniques and materials in creating durable and functional furniture.</p>
        </div>

        <div className="mt-10 py-10 lg:px-0 px-5">

  <div className="w-full max-w-4xl mx-auto">
    <video
      className="w-full h-62.5 lg:h-100 object-cover rounded-lg"
      controls
      autoPlay 
      loop
      muted
    >
      <source src="/wood.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
    </section>

  )
};
