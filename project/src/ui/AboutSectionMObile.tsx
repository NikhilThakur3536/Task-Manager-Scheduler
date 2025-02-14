"use client"

import Image from "next/image"

export const AboutSectionMobile=()=>{
    return(
        <div>
            <Image className=" absolute z-20 ml-8 transform -translate-y-20" src="/images/aboutsectionmobile.png" width={400} height={700} alt="mobile"/>
            <div className="w-[348px] h-fit-content py-2 rounded-t-4xl">
                
            </div>
            <div className="absolute z-50 w-[348px] h-[500px] bg-white left-20 top-22 transform -translate-x-5.5 rounded-4xl">


            </div>
        </div>
    )
}