// import { div, section } from "motion/react-client";
import Image from "next/image"
import Rectangle from "../../../public/Rectangle 3.png";
export default function Services() {
    return(
        <section className="bg-white h-screen ">
            <div className="flex flex-col place-items-center gap-10">
                <h1 className="text-black text-3xl font-bold">Our Services</h1>
                <div className="flex flex-col items-center justify-center text-black">
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
                        <div className="relative"><Image src={Rectangle} alt="Rectangle" width={300} height={300}/> <p className="absolute z-10 top-25 left-15 text-white">Lecture Theater Funiture</p></div>
                        <div className="relative"><Image src={Rectangle} alt="Rectangle" width={300} height={300}/> <p className="absolute z-10 top-25 left-15 text-white">Lecture Theater Funiture</p></div>
                        <div className="relative"><Image src={Rectangle} alt="Rectangle" width={300} height={300}/> <p className="absolute z-10 top-25 left-15 text-white">Lecture Theater Funiture</p></div>
                        
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
                        <div>dgdgdjhuhu</div>
                        <div>jhbcjfjw</div>
                        <div>dfnnjhuhu</div>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    )
}