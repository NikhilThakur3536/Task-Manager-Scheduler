'use client'

import { FeatureMobiDashData} from "../data/data";
import { BarChart } from "./Chart";
import { FeatureMobiDash } from "./FeatureMobiDash";
import { motion } from "framer-motion";

export const DashBoardFeature = () => {
    return (
        <>
            <div className="absolute w-[260px] grid grid-cols-2 z-60 transform translate-x-42.5 translate-y-24 p-[2px] gap-1">
                {FeatureMobiDashData.map((props,index)=>(<div className="gap-0"key={index}><FeatureMobiDash  {...props}/></div>))}
            </div>
            <motion.div 
                className=" absolute z-60 w-[40%] h-[40%] bg-white rounded-xl top-2/3 left-1/4 transform translate-x-6"
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,rotate:30,opacity:1}}
            >
                <BarChart/>
            </motion.div>
        </>
    );
};
