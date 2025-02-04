import { MainLeftSection } from "@/components/MainLeftSection";
import { NavBar } from "@/components/NavBar";
import Image from 'next/image';


const Home=()=>{
    return(
        <div className="relative w-screen h-[100vh] bg-gray-100 overflow-x-hidden">
            <div className=" Z-[-1] absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_2px,_transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
            <div className="w-[90%] mx-auto mt-4 rounded overflow-hidden"><NavBar/></div>
            <section className="w-screen h-[100vh] overflow-hidden">
                <div className="flex w-full h-[85%] bg-gray-100 mt-4 overflow-hidden">
                    <MainLeftSection/>
                    <div className=" z-10 w-[50%] h-full">
                        <Image  src='/images/rightmainsection.png'  alt="right section image" width={600} height={100}/>
                    </div>
                </div>
            </section>
            <section className=" w-screen h-[100vh]">
                <div className="w-full h-full flex">
                    <h1>Hello</h1>
                </div>
                
            </section>
        </div>
    )
}

export default Home;