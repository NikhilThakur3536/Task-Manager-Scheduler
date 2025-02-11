import { FadingCardsProps } from "@/data/Data"
import { motion } from "framer-motion"

export const FadingCards=({Opacity,delay, icon:Icon,content,heading,progress,y}:FadingCardsProps)=>{
    return(
        <div className=" absolute flex flex-col z-12 w-[80%] h-full gap-6 top-20">
            <motion.div className=" flex w-full h-26 bg-white rounded-2xl drop-shadow-lg"
                initial={{y:50, opacity:0}}
                animate={{y:y, opacity:Opacity}}
                transition={{duration:.5, delay:delay, ease:"easeInOut"}}
            >
                <div className="bg-purple-400 w-20 h-20 flex justify-center items-center mx-2 my-2 rounded-3xl"><Icon size={60} color="white"/></div>
                <div className="flex flex-col ml-6">
                    <h3 className="font-poppins font-semibold text-slate-900 text-xl">{heading}</h3>
                    <h4 className="font-montserrat  text-slate-500 text-lg">{content}</h4>
                </div>
                <div className="ml-12 py-2 px-4 rounded-2xl border border-yellow-500/40 bg-yellow-100 text-yellow-70 text-2xl">{progress}</div>
            </motion.div>
        </div> 
    )

}