'use client'

import {motion} from 'framer-motion'

type Props = {
    height: number;
    width: number;
    y: string;
    x: string; 
    y_animate:number[],
    color:string,
    // border:string
};

export const FloatingCards: React.FC<Props> = ({ height, width, y, x,y_animate, color }) => {
    return (
        <div 
            className="absolute z-50"
            style={{ transform: `translate(${x}, ${y})` }}
        >
            <motion.div
                className={`${color} rounded-2xl drop-shadow-md`}
                style={{ height: `${height}px`, width: `${width}px` }}
                animate={{
                    y:y_animate,
                }} 
                transition={{
                    duration:4,
                    repeat:Infinity,
                    repeatType:"loop",
                    ease:'easeInOut'
                }}
            />
        </div>
    );
};
