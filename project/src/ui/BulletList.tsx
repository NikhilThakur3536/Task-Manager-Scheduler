import { SiTicktick } from "react-icons/si";
import { Feature } from "@/data/PricingData";

type Props = {
    features: Feature[];
    fill?: "Yes" | "No";
};

export const BulletList = ({ fill, features = [] }: Props) => {
    return (
        <ul className="flex flex-col w-[90%] ml-8 mt-4">
            {features.map((feature) => (
                <li key={feature.id} className="flex items-center">
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-purple-700">
                        <SiTicktick className="text-white" size={20} />
                    </div>
                    <span className="font-poppins text-lg ml-2">{feature.text}</span>
                </li>
            ))}
        </ul>
    );
};

