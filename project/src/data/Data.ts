import { AiOutlineHome } from "react-icons/ai";
import { FaRegCalendar } from "react-icons/fa6";
import { TbFileAnalytics } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";
import { MdOutlineDownloading } from "react-icons/md";


export type Feature = {
    id: number;
    text: string;
};


export type PricingPlan = {
    heading: string;
    price: string;
    tagline: string;
    buttonheading: string;
    fill: "Yes" | "No";
    features: Feature[];
};


export const pricingData: PricingPlan[] = [
    {
        heading: "Free",
        price: "$300",
        tagline: "Buy And Enjoy Now",
        buttonheading: "Start For Free",
        fill: "No",
        features: [
            { id: 1, text: "Feature 1" },
            { id: 2, text: "Feature 2" }
        ]
    },
    {
        heading: "Pro",
        price: "$600",
        tagline: "Upgrade for More Features",
        buttonheading: "Go Pro",
        fill: "Yes",
        features: [
            { id: 1, text: "Advanced Feature 1" },
            { id: 2, text: "Advanced Feature 2" }
        ]
    },
    {
        heading: "Enterprise",
        price: "$900",
        tagline: "Best for Businesses",
        buttonheading: "Get Started",
        fill: "No",
        features: [
            { id: 1, text: "Premium Feature 1" },
            { id: 2, text: "Premium Feature 2" }
        ]
    }
];



export type Content={
    id:number,
    heading:string,
    content:string
}

export const ContentData:Content[]=[
    {id:11, content:"hyy there", heading:"fuck off"},
    {id:12, content:"hyy there", heading:"feature"},
    {id:13, content:"hyy there", heading:"feature"}
]


export type IconProps={
    icon:IconType,
    label:string
}


export const iconArr:IconProps[]=[{icon:AiOutlineHome,label:"Home"},{icon:FaRegCalendar,label:"Calendar"},{icon:TbFileAnalytics,label:"Analytics"},{icon:CgProfile,label:"Profile"}]

export type FadingCardsProps={
    Opacity:number,
    delay:number,
    icon:IconType,
    heading:string,
    content:string,
    progress:string,
    y:number,
    bg:string
}

export const FadingCardsArray:FadingCardsProps[]=[
    {
        Opacity:1,
        delay:0,
        icon:MdOutlineDownloading,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:0,  
        bg:"bg-purple-700"   
    },
    {
        Opacity:.5,
        delay:.6,
        icon:MdOutlineDownloading,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:130,
        bg:"bg-rose-700"       
    },
    {
        Opacity:.4,
        delay:.7,
        icon:MdOutlineDownloading,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:260,
        bg:"bg-emerald-700"      
    },
    {
        Opacity:.3,
        delay:.8,
        icon:MdOutlineDownloading,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:390,
        bg:"bg-cyan-700"          
    },
    {
        Opacity:.2,
        delay:.9,
        icon:MdOutlineDownloading,
        heading:"Heading ",
        content:"Content",
        progress:"In Progress",
        y:520,
        bg:"bg-yellow-700"       
    }
]
