import { SectionHeadingBUtton } from "@/ui/SectionHeadingButton"

type props={
    position: "left"|"right"
}

export const FeatureSection:React.FC<props>=({position})=>{
    return(
        <>{ position==="left"?
        <div className="w-[80%] h-[60%] flex">
            <div className=" flex flex-col w-[50%] mt-12 ">
                <div className="w-[20%] flex justify-center items-center mb-2"><SectionHeadingBUtton Heading={"Feature"}/></div>
                <h2 className="w-[60%] text-5xl font-montserrat font-lg font-[400]">Task Scheduling Made Simple</h2>
            </div>
            <div className="relative w-[50%] h-[60%] bg-slate-100 border border-slate-300/60 rounded-xl">
        <div className={`z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30`}></div>        
            </div>
        </div>:
        <div className="w-[80%] h-[60%] flex">
            <div className="relative w-[50%] h-[60%] bg-slate-100 border border-slate-300/60 rounded-xl">
            <div className={`z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30`}></div>        
            </div>
            <div className=" flex flex-col  w-[50%] mt-12 ">
                <div className="w-[20%] flex items-center justify-center self-end mb-2"><SectionHeadingBUtton Heading={"Feature"}/></div>
                <h2 className="w-[60%] text-5xl font-montserrat font-lg self-end text-right font-[400]">Task Scheduling Made Simple</h2>
            </div>
        </div>}
        </>

    )
}