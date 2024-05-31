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
                description="Lorem ipsum dolor sit amet consectetur. Erat hendrerit lectus aliquam amet diam. Senectus tincidunt a turpis amet leo. Metus et varius lacinia aliquam curabitur magna amet. Dui parturient ac sed blandit egestas ut pulvinar varius a. Tristique commodo faucibus tortor tortor nulla et arcu nullam. Dictumst nisl viverra id mauris odio lectus semper lectus varius. Risus ac in ut eu suspendisse eu molestie dapibus.
            Id neque morbi at et neque eu lectus quis. In porttitor urna diam mollis sagittis aliquam eu suspendisse. Rhoncus quis viverra felis pharetra tempor. Turpis faucibus venenatis vitae lacus etiam volutpat tortor. Ultrices quam diam turpis in mi. Imperdiet sit ridiculus curabitur facilisis risus vehicula non et. Blandit dis euismod id id morbi non. Scelerisque et magna lorem sit mattis odio eu leo egestas. Et volutpat ut ipsum mauris eget eget diam. Senectus vitae condimentum duis posuere morbi dui egestas. Pellentesque egestas sit nunc tellus. Et sed sit sit sem vestibulum. Sit porttitor mi mattis augue leo quis elementum.
            Nulla volutpat elit pellentesque elementum commodo. Viverra sed feugiat nisl ultrices. Purus faucibus risus non tortor posuere enim. Tellus aliquet sed porttitor convallis ornare. Urna nulla ante lacinia nisi. Euismod interdum velit tellus eget tortor tempor ut urna. Varius sagittis malesuada odio feugiat est vestibulum sagittis consequat. Viverra congue quis egestas ornare sit facilisi fringilla ultrices. Mauris consectetur dolor elit elit neque. Sit ac est sed ut vulputate sed lobortis ac rhoncus. Sem ac libero tortor sapien tortor aliquet turpis donec. Scelerisque interdum tellus morbi mauris nulla scelerisque.
            Facilisis venenatis id scelerisque condimentum eget id ultrices ultrices. Sodales eget mollis hendrerit et."
            />

            <AboutUsGoals
                className="mt-28"
                title="Our Story"
                description="Lorem ipsum dolor sit amet consectetur. Erat hendrerit lectus aliquam amet diam. Senectus tincidunt a turpis amet leo. Metus et varius lacinia aliquam curabitur magna amet. Dui parturient ac sed blandit egestas ut pulvinar varius a. Tristique commodo faucibus tortor tortor nulla et arcu nullam. Dictumst nisl viverra id mauris odio lectus semper lectus varius. Risus ac in ut eu suspendisse eu molestie dapibus.
                Id neque morbi at et neque eu lectus quis. In porttitor urna diam mollis sagittis aliquam eu suspendisse. Rhoncus quis viverra felis pharetra tempor. Turpis faucibus venenatis vitae lacus etiam volutpat tortor. Ultrices quam diam turpis in mi. Imperdiet sit ridiculus curabitur facilisis risus vehicula non et. Blandit dis euismod id id morbi non. Scelerisque et magna lorem sit mattis odio eu leo egestas. Et volutpat ut ipsum mauris eget eget diam. Senectus vitae condimentum duis posuere morbi dui egestas. Pellentesque egestas sit nunc tellus. Et sed sit sit sem vestibulum. Sit porttitor mi mattis augue leo quis elementum.
                Nulla volutpat elit pellentesque elementum commodo. Viverra sed feugiat nisl ultrices. Purus faucibus risus non tortor posuere enim. Tellus aliquet sed porttitor convallis ornare. Urna nulla ante lacinia nisi. Euismod interdum velit tellus eget tortor tempor ut urna. Varius sagittis malesuada odio feugiat est vestibulum sagittis consequat. Viverra congue quis egestas ornare sit facilisi fringilla ultrices. Mauris consectetur dolor elit elit neque. Sit ac est sed ut vulputate sed lobortis ac rhoncus. Sem ac libero tortor sapien tortor aliquet turpis donec. Scelerisque interdum tellus morbi mauris nulla scelerisque.
                Facilisis venenatis id scelerisque condimentum eget id ultrices ultrices. Sodales eget mollis hendrerit et."
            />

            <div className="px-20 mt-36">
                <AboutFeatures />
            </div>
        </div>
    )
}
export default AboutPage;