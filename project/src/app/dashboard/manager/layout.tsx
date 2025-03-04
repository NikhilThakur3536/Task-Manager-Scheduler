"use client"

import { MainDashboard } from "./components/MainDashboard";
import { NavBar } from "./components/NavBar";

const Manager= () => {
    return(
        
        <div className=" flex w-screen h-screen bg-gray-200">
            <NavBar/>
            <MainDashboard/>
        </div>
    )
}

export default Manager;