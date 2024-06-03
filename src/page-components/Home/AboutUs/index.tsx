const AboutUs = () => {
    return (
        <div className="flex flex-col mlg:flex-row w-full">
            <div className="w-full mlg:w-6/12 bg-aboutUsLeftBannerBg px-10 sm:px-20 py-10">
                <h2 className="font-semibold text-3xl sm:text-4xl leading-10 text-[#000007] dark:text-white">Instant Shortcut Lookup with <span className="text-lightHeadingText">Mac Simulator</span></h2>

                <p className="text-black dark:text-white mt-5 line-clamp-6 sm:line-clamp-none">
                    Sclippy is an innovative tool designed to enhance productivity by providing instant shortcut lookups within a Mac simulator.
                    <br />
                    This utility acts as a virtual assistant, helping users to quickly access and learn keyboard shortcuts without interrupting their workflow.
                    <br />
                    Sclippy seamlessly integrates into the macOS environment, offering real-time suggestions and explanations for shortcuts relevant to the current application or task. Whether you are navigating through complex software, coding, or performing routine tasks, Sclippy simplifies the process by reducing the time spent searching for shortcuts, thereby streamlining operations and boosting efficiency. Perfect for both novice and expert users, Sclippy ensures that mastering shortcuts is easy and intuitive, making it an indispensable companion for anyone looking to optimize their Mac experience.
                </p>
            </div>
            <div className="w-full hidden mlg:block mlg:w-6/12 bg-aboutUsRightBannerBg h-96 mlg:h-auto">

            </div>
        </div>
    )
}
export default AboutUs;