"use client"

type props={
    Heading:string
}

export const SectionHeadingBUtton:React.FC<props>=({Heading})=>{
    return(
        <div className=" border border-slate-600/30 drop-shadow-md px-6 py-2 rounded-xl bg-white font-montserrat font-400">
            {Heading}
        </div>
    )
}