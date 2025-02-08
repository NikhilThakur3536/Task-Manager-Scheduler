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
