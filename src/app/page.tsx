import HomeBanner from "@/page-components/Home/HomeBanner";
import Simulator from "@/page-components/Home/Simulator";
import Image from "next/image";

function Home() {
  return (
    <main className="m-0 p-0">
      <HomeBanner />
      <Simulator />
    </main>
  );
}
export default Home;