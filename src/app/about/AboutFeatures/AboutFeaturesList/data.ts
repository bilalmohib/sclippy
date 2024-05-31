import { AboutFeatureCardDataList } from "./type";

export const aboutFeaturesListData: AboutFeatureCardDataList[] = [
    {
        title: "Accurate keyboard layout",
        descriptionList: [
            "Exact replication of a Mac keyboard layout, including all keys (letters, numbers, function keys, special characters, and modifier keys like Command, Option, Control).",
            "Support for different Mac keyboard layouts (e.g., US, UK, International)."
        ],
        image: {
            src: "/about-us/features/feature1.png",
            alt: "Accurate keyboard layout"
        }
    },
    {
        title: "Interactive Key Press Simulation",
        descriptionList: [
            "Visual feedback when keys are pressed (keys should change color or appear pressed).",
            "Display of corresponding character or function for each key press."
        ],
        image: {
            src: "/about-us/features/feature2.png",
            alt: "Interactive Key Press Simulation"
        }
    },
    {
        title: "Customizable Settings",
        descriptionList: [
            "Option to switch between different keyboard layouts and languages.",
            "Adjustable key repeat rate and delay settings."
        ],
        image: {
            src: "/about-us/features/feature3.png",
            alt: "Customizable Settings"
        }
    },
    {
        title: "Functionality Demonstration",
        descriptionList: [
            "Ability to simulate key combinations (e.g., Command + C for copy, Command + V for paste).",
            "Show how function keys (F1-F12) work in combination with the 'fn' key."
        ],
        image: {
            src: "/about-us/features/feature4.png",
            alt: "Functionality Demonstration"
        }
    }
]