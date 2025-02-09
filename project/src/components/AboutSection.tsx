import { AboutContentCards } from "@/ui/AboutContentCards"
import { GridBG } from "@/ui/GridBG"
import { SectionHeadingBUtton } from "@/ui/SectionHeadingButton"
import Image from 'next/image';
import { ContentData,Content } from "@/data/Data";


export const AboutSection=()=>{
    return(
        <>
            <div className=" flex items-center justify-center mt-2">
                <SectionHeadingBUtton Heading={"About"}/>
            </div>
            <div className=" mt-2 flex justify-center items-center">
                <h2 className=" font-poppins text-4xl font-[700]">Get Your Work Done In A Flow</h2>
            </div>
            <div className=" flex items-center justify-center w-full h-[55%] mt-4">
                <div className=" relative w-[80%] h-full bg-slate-100 rounded-lg border border-slate-400/30 overflow-hidden">
                <GridBG size={"14px_14px"} radius={"1px"}/>
                <div><Image className=" absolute z-20 ml-8 transform -translate-y-20" src="/images/aboutsectionmobile.png" width={400} height={700} alt="mobile"/></div>
                </div>
            </div>
            <div className=" w-screen h-[30%] flex justify-center my-8">
                <div className="flex justify-around w-[80%]">
                {ContentData.map((content,index)=>(<AboutContentCards key={index} {...content} />))}
                </div>

            </div>
        </>
    )
}