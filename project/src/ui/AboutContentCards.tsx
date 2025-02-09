"use client";

import { Content } from "@/data/Data";

export const AboutContentCards = ({ id,heading,content }:Content) => {
    return (
        <div key={id} className="flex flex-col w-1/4 mx-2 border-b-2 border-slate-200">
            <h3 className="font-poppins text-xl font-bold">{heading}</h3>
            <p className="font-montserrat text-sm text-slate-300/80">{content}</p>
        </div>
    );
};
