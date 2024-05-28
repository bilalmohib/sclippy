import TopNav from "@/components/TopNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MainAppLayoutProps {
    children: React.ReactNode;
}

const MainAppLayout = ({
    children
}: MainAppLayoutProps) => {
    return (
        <div>
            <TopNav />
            <section className="px-10">
                <Header />
                {children}
            </section>

            <br />
            <br />
            <Footer />
        </div>
    )
}
export default MainAppLayout;