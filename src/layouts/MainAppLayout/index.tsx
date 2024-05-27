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
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default MainAppLayout;