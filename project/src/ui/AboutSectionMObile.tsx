"use client"

import Image from "next/image"
import { CiBatteryFull } from "react-icons/ci"
import { FaSignal, FaWifi } from "react-icons/fa6"

export const AboutSectionMobile=()=>{
    return(
        <div>
            <Image className=" absolute z-20 ml-8 transform -translate-y-20" src="/images/aboutsectionmobile.png" width={400} height={700} alt="mobile"/>
            <div className="z-30 absolute flex justify-between w-[348px] h-fit-content py-2 rounded-t-4xl left-14 top-14 transform translate-x-3 -translate-y-1">
                <div className="font-poppins text-xl font-semibold text-black ml-6 transform -translate-y-1">
                    9:14
                </div>
                <div className=" flex gap-1 justiy-between pr-10">
                    <FaSignal color="black" size={20}/>
                    <FaWifi color="black" size={20}/>
                    <CiBatteryFull color="black" size={20}/>
                </div>
            </div>
            <div className="absolute z-50 w-[348px] h-[500px] bg-white left-20 top-22 transform -translate-x-5.5 rounded-4xl">


            </div>
        </div>
    )
}