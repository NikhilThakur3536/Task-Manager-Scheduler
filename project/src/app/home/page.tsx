"use client"

import { AboutSection } from "@/components/AboutSection";
import { FeatureSection } from "@/components/FeatureSection";
import { MainLeftSection } from "@/components/MainLeftSection";
import { MainSectionMobile } from "@/components/MainSectionMobile";
import { NavBar } from "@/components/NavBar";
import { PricingSection} from "@/components/PricingSection";
import { FloatingCards } from "@/ui/FloatingCards";
import { GridBG } from "@/ui/GridBG";
import Image from 'next/image';

const Home = () => {
    return (
        <div className="relative w-screen h-screen bg-gray-100 overflow-x-hidden">
        <div className={`z-1 absolute inset-0 w-full h-[115vh] bg-[radial-gradient(circle,_#9ca3af_2px,_transparent_1px)] bg-[size:24px_24px] opacity-30`}></div>        
        <NavBar />
            <section className="w-screen h-[100vh] overflow-hidden">
                <div className="flex w-full h-[100vh] bg-gray-100 mt-4 overflow-hidden">
                    <MainLeftSection />
                    <div className="relative flex z-10 w-[50%] h-full">                        
                        <MainSectionMobile/>
                        <FloatingCards color={"bg-sky-200/80"} height={180} width={250} y="400px" x="-70px" y_animate={[10,0,10]}/>
                        <FloatingCards  color={"bg-rose-200/80"} height={170} width={380} y="30px" x="320px" y_animate={[-10,0,-10]}/>
                    </div>
                </div>
            </section>
            <section className=" bg-white flex flex-col w-screen h-[100vh]">
                <AboutSection/>
            </section>
            <section className="w-screen h-[200vh] flex flex-col bg-white justify-center items-center">
              <FeatureSection position={"left"}/>
              <FeatureSection position={"right"}/>  
            </section>
            <section className="relative w-screen h-[200vh]">
                <PricingSection/>

            </section>
        </div>
    );
};

export default Home;
