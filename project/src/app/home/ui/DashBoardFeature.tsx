'use client'

import { FeatureMobiDashData} from "../data/data";
import { BarChart } from "./Chart";
import { FeatureMobiDash } from "./FeatureMobiDash";

export const DashBoardFeature = () => {
    return (
        <>
            <div className="absolute w-[260px] grid grid-cols-2 z-60 transform translate-x-42.5 translate-y-24 p-[2px] gap-1">
                {FeatureMobiDashData.map((props,index)=>(<div className="gap-0"key={index}><FeatureMobiDash  {...props}/></div>))}
            </div>
            <div className=" absolute z-60 w-[40%] h-[40%] bg-white rounded-xl top-2/3 left-1/4 transform translate-x-6"><BarChart/></div>
        </>
    );
};
