'use client'

import {motion} from 'framer-motion'

type Props = {
    height: number;
    width: number;
    y?: string;
    x?: string; 
    y_animate?:number[],
    color:string,
    borderColor:string
};

export const FeatureMobiDash = ({ height, width, color, borderColor }:Props) => {
    return (
        <div 
            className="p"
        >
            <div
                className={`${color} rounded-xl  border ${borderColor} `}
                style={{ height: `${height}px`, width: `${width}px` }}
            >
            </div>
        </div>
    );
};
