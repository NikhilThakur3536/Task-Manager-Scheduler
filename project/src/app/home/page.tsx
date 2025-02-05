import { MainLeftSection } from "@/components/MainLeftSection";
import { NavBar } from "@/components/NavBar";
import { FloatingCards } from "@/ui/FloatingCards";
import Image from 'next/image';

const Home = () => {
    return (
        <div className="relative w-screen h-[100vh] bg-gray-100 overflow-x-hidden">
            <div className="z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_2px,_transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
            <NavBar />
            <section className="w-screen h-[100vh] overflow-hidden">
                <div className="flex w-full h-[85%] bg-gray-100 mt-4 overflow-hidden">
                    <MainLeftSection />
                    <div className="relative flex z-10 w-[50%] h-full">                        
                        <div className="z-20"><Image src='/images/rightmainsection.png' alt="right section image" width={600} height={100} /></div>
                        <FloatingCards color={"bg-sky-200"} height={180} width={250} y="400px" x="-80px" y_animate={[10,0,10]}/>
                        <FloatingCards  color={"bg-rose-200"} height={170} width={380} y="30px" x="320px" y_animate={[-10,0,-10]}/>
                    </div>
                </div>
            </section>
            <section className="w-screen h-[100vh]">
                <div className="w-full h-full flex">
                    <h1>Hello</h1>
                </div>
            </section>
        </div>
    );
};

export default Home;
