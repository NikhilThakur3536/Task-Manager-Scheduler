'use client'

import { FeatureMobiDashData} from "../data/data";
import { FeatureMobiDash } from "./FeatureMobiDash";


export const DashBoardFeature = () => {
    return (
        <>
            <div className="absolute w-[260px] grid grid-cols-2 z-60 transform translate-x-42.5 translate-y-24 p-[2px] gap-1">
                {FeatureMobiDashData.map((props,index)=>(<div className="gap-0"key={index}><FeatureMobiDash  {...props}/></div>))}
            </div>
        </>
    );
};
