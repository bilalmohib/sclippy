import HomeBanner from "@/page-components/Home/HomeBanner";
import AboutUs from "@/page-components/Home/AboutUs";
import WhyJoin from "@/page-components/Home/WhyJoin";
import HomeSimulator from "@/page-components/Home/HomeSimulator";

function Home() {
  return (
    <main className="m-0 p-0">
      <div className="pl-20">
        <HomeBanner />
      </div>
      <AboutUs />
      <WhyJoin />
      <HomeSimulator className="mt-16" />
    </main>
  );
}
export default Home;