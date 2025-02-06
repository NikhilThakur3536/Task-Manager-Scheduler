import { AboutContentCards } from "@/ui/AboutContentCards"

export const AboutSection=()=>{
    return(
        <>
            <div className=" flex items-center justify-center mt-2">
                <div className=" border border-slate-600/30 drop-shadow-md px-6 py-2 rounded-xl bg-white font-montserrat font-400 ">About</div>
            </div>
            <div className=" mt-2 flex justify-center items-center">
                <h2 className=" font-poppins text-4xl font-[700]">Get Your Work Done In A Flow</h2>
            </div>
            <div className=" flex items-center justify-center w-full h-[55%] mt-4">
                <div className=" relative w-[80%] h-full bg-slate-100 rounded-lg border border-slate-400/30">
                <div className="z-1 absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] bg-[size:14px_14px] opacity-30"></div>
                </div>
            </div>
            <div className=" w-screen h-[30%] flex justify-center my-2">
                <div className="flex justify-around w-[80%] h-full">
                <AboutContentCards heading={"Heading"} content={"hy i am writing this as an demo content fuck you ustador you want to eb the king"}/>
                <AboutContentCards heading={"Heading"} content={"hy i am writing this as an demo content"}/>
                <AboutContentCards heading={"Heading"} content={"hy i am writing this as an demo content"}/>
                <AboutContentCards heading={"Heading"} content={"hy i am writing this as an demo content"}/>
                </div>

            </div>
        </>
    )
}