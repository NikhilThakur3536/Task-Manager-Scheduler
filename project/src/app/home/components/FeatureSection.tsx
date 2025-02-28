'use client'

import { SectionHeadingBUtton } from "@/app/home/ui/SectionHeadingButton"
import Image from "next/image"
import { DashBoardFeature } from "../ui/DashBoardFeature"
import { AnalyticsInsights } from "../ui/Analytics&Insights"

type props={
    position: "left"|"right"
}

export const FeatureSection:React.FC<props>=({position})=>{
    return(
        <>{ position==="left"?
        <div className="w-[80%] h-[60%] flex mt-8">
            <div className=" flex flex-col w-[50%] mt-12 ">
                <div className="w-[20%] flex justify-center items-center mb-2"><SectionHeadingBUtton Heading={"Feature"}/></div>
                <h2 className="w-[60%] text-5xl font-montserrat font-lg font-[400]">Task Dashboard</h2>
            </div>
            <div className="relative w-[50%] h-[60%] bg-slate-100 border border-slate-300/60 rounded-xl overflow-hidden">
                <div className={`z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30`}></div>
                <div className=" overflow-hidden">
                    <Image className="absolute z-40 transform translate-x-1/2 -translate-y-10" src="/images/aboutsectionmobile.png" width={300} height={200} alt="dashboard"/>
                </div>
                <DashBoardFeature/>
            </div>
        </div>:
        <div className="w-[80%] h-[60%] flex">
            <div className="relative w-[50%] h-[60%] bg-slate-100 border border-slate-300/60 rounded-xl">
                <div className={`z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30`}></div>
                <div className="overflow-hidden">
                    <Image className="absolute z-40 transform translate-x-1/2 -translate-y-10" src="/images/aboutsectionmobile.png" width={300} height={200} alt="dashboard"/>
                </div>
                <AnalyticsInsights/>        
            </div>
            <div className=" flex flex-col  w-[50%] mt-12 ">
                <div className="w-[20%] flex items-center justify-center self-end mb-2"><SectionHeadingBUtton Heading={"Feature"}/></div>
                <h2 className="w-[60%] text-5xl font-montserrat font-lg self-end text-right font-[400]">Analytics & Insights</h2>
            </div>
        </div>}
        </>

    )
}