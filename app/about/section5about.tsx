
import Image from "next/image"
import rec1 from "../../public/rec1.png"
import rec2 from "../../public/rec2.png"
import rec3 from "../../public/rec3.png"



export default function section5about() {
    return (
        <section className="bg- min-h-screen bg-white overflow-hidden">
          <div className="flex py-10 flex-col justify-center space-y-20 items-center">
            <div className="flex flex-col max-w-max justify-center items-center">
                 <h1 className="lg:text-3xl text-[20px] text-black font-bold mb-3">Meet Our Professionals</h1>
                    <p className="lg:max-w-2xl max-w-70.5 lg:text-[15px] text-[10px]  justify-center text-center">We have a team of dedicated professionals who are experts in the furniture industry and are committed to helping you find the perfect pieces for your home or office</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-30 gap-10 ">
                <div className="flex flex-col justify-center items-center ">
                    <Image src={rec1} alt="" width={200} height={200}/>
                    <h1 className="text-[15px] pt-3 font-bold">Dr. Areo Olusola</h1>
                    <p className="text-[10px]">Head of Department</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src={rec2} alt="" width={200} height={200}/>
                    <h1 className="text-[15px] pt-3 font-bold">Mr. Adeniyi Segun</h1>
                    <p className="text-[10px]">Head of Wood Anatomy Section</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src={rec3} alt="" width={200} height={200}/>
                    <h1 className="text-[15px] pt-3 font-bold">Dr. Amoo-Onidundu</h1>
                    <p className="text-[10px]">Head of Wood Seasoning Section</p>
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <Image src={rec1} alt="" width={200} height={200}/>
                    <h1 className="text-[15px] pt-3 font-bold">Dr. Areo Olusola</h1>
                    <p className="text-[10px]">Head of Department</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src={rec2} alt="" width={200} height={200}/>
                    <h1 className="text-[15px] pt-3 font-bold">Mr. Adeniyi Segun</h1>
                    <p className="text-[10px]">Head of Wood Anatomy Section</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src={rec3} alt="" width={200} height={200}/>
                    <h1 className="text-[15px] pt-3 font-bold">Dr. Amoo-Onidundu</h1>
                    <p className="text-[10px]">Head of Wood Seasoning Section</p>
                </div>
            </div>
          </div>
        </section>
    )
}