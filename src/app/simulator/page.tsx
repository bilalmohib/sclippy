import SimulatorBanner from "@/app/simulator/SimulatorBanner";
import SimulatorSectionSlider from "@/app/simulator/SimulatorSectionSlider";
import Simulator from "@/page-components/Home/Simulator";

const SimulatorPage = () => {
    return (
        <div>
            <SimulatorBanner />

            <div className="flex flex-col justify-center items-center mt-24">
                <SimulatorSectionSlider />
            </div>

            <Simulator />
        </div>
    )
}
export default SimulatorPage;