import Image from "next/image";

const SimulatorBanner = () => {
    return (
        <div className="relative bg-simulator-banner bg-cover bg-center bg-no-repeat h-[427px] flex flex-col justify-center items-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-row justify-center items-center gap-4 w-full">
                <Image
                    src="/learn/round-cube.png"
                    alt="learn cube"
                    width={186}
                    height={170}
                    className="absolute left-0"
                />

                <div className="flex flex-col">
                    <div className="flex justify-end items-end">
                        <Image
                            src="/learn/upper-dome.png"
                            alt="upper dome"
                            width={109}
                            height={97}
                            className="relative -mr-12"
                        />
                    </div>
                    <h2 className="text-white text-center text-6xl font-bold font-inter">
                        Mac Keyboard Shortcuts
                    </h2>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/learn/bottom-ring.png"
                            alt="bottom ring"
                            width={72}
                            height={81}
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SimulatorBanner;