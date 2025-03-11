"use client"

import { NavBar } from "@/app/home/components/NavBar";
import { MainDashboard } from "./components/MainDashboard";


const Manager= () => {
    return(
        
        <div className=" flex w-screen h-screen bg-gray-200">
            <NavBar/>
            <MainDashboard/>
        </div>
    )
}

export default Manager;