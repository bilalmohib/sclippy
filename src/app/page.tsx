import HomeBanner from "@/page-components/Home/HomeBanner";
import AboutUs from "@/page-components/Home/AboutUs";
import Simulator from "@/page-components/Home/Simulator";
import Image from "next/image";
import WhyJoin from "@/page-components/Home/WhyJoin";

function Home() {
  return (
    <main className="m-0 p-0">
      <div className="pl-20">
        <HomeBanner />
      </div>
      <AboutUs />

      <WhyJoin />
    </main>
  );
}
export default Home;