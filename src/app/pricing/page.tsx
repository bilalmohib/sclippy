import PricingBanner from "@/app/pricing/PricingBanner";
import PricingCardsContainer from "@/app/pricing/PricingCardsContainer";

const PricingPage = () => {
    return (
        <div>
            <PricingBanner />

            <PricingCardsContainer className="mt-36 mb-14" />
        </div>
    )
}
export default PricingPage;