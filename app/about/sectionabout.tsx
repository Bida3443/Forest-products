
import Image from "next/image"
import ellipse from "../../public/Ellipse 7.png"
import ellipes from "../../public/ellipse2.jpg"

export default function serviceabout() {
    return (
        <section className="bg-white lg:py-10 py-5 overflow-hidden">
            <div className="flex lg:flex-row flex-col justify-between lg:px-35 px-5 items-center">
                <div className="space-y-4">
                    <h1 className="lg:text-3xl text-[#4C4C4D]  text-2xl font-bold">Who we are</h1>
                    <p className="lg:max-w-s lg:max-w-125.5 z-0 max-w-110 lg:text-[14px] text-[#B6B6B7] text-justify text-[10px]">Forest Products Development and Utilization Department (FPD&U) is one of the four (4) departments in the Forestry Research Institute of Nigeria (FRIN) which was established in 1954. The Institute's Decree 35 of 1973 and other establishing Research Institute of 1977 changed the status of the Department to an institute being supervised by the Federal Ministry of Environment. The department has identified and is still identifying properties of various wood species for proper usage. Research work on different forest fruits and bamboo and rattan as non-timber forest products has witnessed tremendous achievement in term of food production and wealth creation.</p>
                </div>
                {/* <div className="relative z-10">
                    <div className="">
                        <Image src={ellipse} alt="" width={300} height={300} className=""/>
                    </div>
                    <div className="">
                        <Image src={ellipes} alt="" width={300} height={300} className="absolute top-10 right-0"/>
                    </div>
                </div> */}

                <div className="relative z-10 lg:w-100 w-60 lg:h-112.5 h-70">

                    {/* Yellow Shape */}
                    <Image
                        src={ellipse}
                        alt=""
                        fill
                        className="object-contain"
                    />

                    {/* Photo */}
                    <div
                        className="absolute top-0 left-0 w-full h-full overflow-hidden"
                        style={{
                            clipPath:
                                "ellipse(45% 45% at 50% 50%)"
                        }}
                    >
                        <Image
                            src={ellipes}
                            alt=""
                            fill
                            className="object-cover "
                        />
                    </div>

                </div>
            </div>

        </section>
    )
}