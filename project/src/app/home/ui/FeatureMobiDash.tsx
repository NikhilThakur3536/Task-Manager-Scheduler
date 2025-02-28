'use client'

import {motion} from 'framer-motion'
import { IconType } from 'react-icons';

type Props = {
    height: number;
    width: number;
    y?: string;
    x?: string; 
    y_animate?:number[],
    color:string,
    heading:string,
    count:number,
    icon:IconType,
    iconColor:string,
    animatedBorder:string
};

export const FeatureMobiDash = ({ height, width, color,heading,count,icon:Icon,iconColor,animatedBorder }:Props) => {
    return (
        <div>
            <motion.div
                className={`${color} rounded-xl  border border-gray-400/50 flex group`}
                style={{ height: `${height}px`, width: `${width}px` }}
                initial={{scale:0}}
                whileInView={{scale:1,rotate:360}}
                whileHover={{borderColor:`${animatedBorder}`,y:-4,backgroundColor:"#000000"}}
                transition={{duration:.9,ease:"linear",type:"spring",}}
            >
                <motion.div className='  w-[60%] flex flex-col my-2 ml-2 gap-1'>
                    <h3  className='font-poppins text-gray-600 font-bold group-hover:text-white'>{heading}</h3>
                    <h3 className='font-poppins text-gray-400'>{count}</h3>
                </motion.div>
                <div className='ml-4 mt-6'>
                    <Icon className={`${iconColor}`} size={20}/>
                </div>
            </motion.div>
        </div>
    );
};
