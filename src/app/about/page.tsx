import AboutUsBanner from "./AboutUsBanner";
import AboutUsGoals from "./(goals)/AboutUsGoals";
import AboutFeatures from "./AboutFeatures";

const AboutPage = () => {
    return (
        <div>
            <AboutUsBanner />

            <AboutUsGoals
                className="mt-24"
                title="Our Mission"
                description="Our mission is to empower individuals and organizations to achieve their highest potential by providing intuitive and efficient tools for enhanced productivity. 
                We strive to create innovative solutions that simplify complex tasks and streamline workflows, allowing our users to focus on what truly matters. 
                By offering seamless integration and user-friendly interfaces, we aim to transform the way people interact with technology, making it more accessible and effective for everyone. 
                Through continuous improvement and a commitment to excellence, we dedicate ourselves to helping our users save time, increase efficiency, and unlock new possibilities in their personal and professional lives."
            />

            <AboutUsGoals
                className="mt-28"
                title="Our Story"
                description="Our story began with a simple yet profound realization: technology should make our lives easier, not more complicated. As passionate tech enthusiasts and productivity aficionados, we often found ourselves bogged down by the sheer volume of tasks and the time spent searching for shortcuts and solutions. We saw an opportunity to create a tool that could alleviate this frustration and help users navigate their digital environments more efficiently."
            />

            <AboutUsGoals
                className="mt-2"
                title=""
                description="In the early days, we started as a small team of developers and designers, united by a shared vision of enhancing productivity through intuitive solutions. We listened to the common struggles faced by professionals across various fields and realized that a tool for instant shortcut lookup could make a significant impact. Thus, Sclippy was born—a virtual assistant designed to seamlessly integrate into the macOS environment, providing real-time shortcut suggestions and explanations."
            />

            <AboutUsGoals
                className="mt-2"
                title=""
                description="Today, Sclippy is more than just a tool; it’s a testament to our commitment to innovation and user-centric design. Our journey has been driven by the desire to make technology more accessible and effective, enabling our users to save time, increase efficiency, and unlock new possibilities. As we look to the future, we remain dedicated to our mission of transforming the way people interact with technology and helping them achieve their highest potential."
            />

            <div className="px-20 mt-36">
                <AboutFeatures />
            </div>
        </div>
    )
}
export default AboutPage;