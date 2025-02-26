"use client"
import { motion } from "framer-motion"

type props={
    Heading:string
}

export const SectionHeadingBUtton:React.FC<props>=({Heading})=>{
    return(
        <motion.div className=" flex justify-center border border-slate-600/30 drop-shadow-md px-6 py-2 rounded-xl bg-white font-montserrat font-semibold text-xl font-400"
        whileHover={{
            backgroundColor:"rgb(241, 241, 242)",
            y:-2
        }}
        >
            {Heading}
        </motion.div>
    )
}