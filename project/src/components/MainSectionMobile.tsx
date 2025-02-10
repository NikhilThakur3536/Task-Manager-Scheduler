"use client"

import { MobileNavBarIcons } from "@/ui/MobileNavBarIcons";
import Image from "next/image"
import { iconArr } from "@/data/Data";
import { FaSignal } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";





export const MainSectionMobile=()=>{
    return(
        <>
        <div className=" absolute z-30 w-[50%] flex justify-between top-48 left-36 transform translate-y-1.5 -translate-x-2">
            <div className="font-poppins text-xl font-semibold text-black ml-6">
                9:14
            </div>
            <div className=" flex gap-1 justiy-between pr-10">
                <FaSignal color="black" size={20}/>
                <FaWifi color="black" size={20}/>
                <CiBatteryFull color="black" size={20}/>
            </div>
        </div>
        <div className="z-20 h-[100vh] ml-12 transform translate-x-4 -translate-y-8">
            <Image src='/images/longmobile.png' alt="right section image" width={500} height={100} />
        </div>
        <div className=" bottom-10 left-34 transform translate-x-1 z-21 absolute bg-black w-[45%] h-[50px] rounded-3xl flex justify-around gap-2">
            {iconArr.map((icon,index)=>(<MobileNavBarIcons  key={index} {...icon}/>))} 
        </div>
        </>
    )
}