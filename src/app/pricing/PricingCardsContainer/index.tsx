import PricingCard from "./PricingCard";
import { pricing_card_list } from "./data";

interface PricingCardsContainerProps {
    className?: string
}

const PricingCardsContainer = ({
    className
}: PricingCardsContainerProps) => {
    return (
        <div className={`${className} flex flex-col justify-center items-center`}>
            <div className={`grid grid-cols-3 gap-8 w-fit`}>
                {
                    pricing_card_list.map((pricingCard, index) => (
                        <PricingCard key={index} data={pricingCard} />
                    ))
                }
            </div>
        </div>
    )
}
export default PricingCardsContainer;