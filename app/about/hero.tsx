import Image from "next/image"
import About from "../../public/about.jpg"

export default function hero() {
    return (
        <section className="relative">
            <div className="w-full lg:h-[70vh] h-[40vh] relative" >
                
                <Image src={About}
                    alt="background image"
                    width={500}
                    height={500}
                    style={{ objectFit: "cover"}}
                    className="w-full h-full"/>
                <div className="absolute inset-0 w-full h-full bg-black opacity-70 z-20" />
                <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-white px-4">
                    <h1 className="lg:text-4xl text-[20px] text-[#F0BD09] font-bold mb-3">About Us</h1>
                    <p className=" lg:max-w-2xl max-w-80.5 lg:text-[15px] text-[10px] text-center">Welcome to our  Forest Product Development and Utilization website! We are your go-to source for stylish, high-quality furniture pieces that will transform your space. From comfortable sofas to elegant dining tables, our collection has everything you need to create the home of your dreams. Browse our website now and discover a world of possibilities for your living space.</p>

                </div>
            </div>
        </section>
    )
}