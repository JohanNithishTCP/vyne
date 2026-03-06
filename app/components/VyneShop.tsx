export default function VyneShop() {
    return (
        <section className="bg-secondary py-20 w-full relative overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('/home/bg-patten.png')] bg-cover bg-no-repeat">
            </div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div data-aos="fade-up" className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-1 w-8 bg-primary rounded-full"></div>
                        <span className="text-white font-medium text-lg tracking-wide uppercase">Vyne Shop</span>
                    </div>
                    <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-white leading-tight">
                        Online Medical Device Shop
                    </h2>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">

                    {/* Left Column (Large Video) */}
                    <div data-aos="fade-right" className="w-full flex justify-center">
                        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                            <video
                                src="https://cdn.clinicalvisuals.com/medical/vyne/shortclips/vyne_short_02.webm"
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>

                    {/* Right Column (Text & Cards) */}
                    <div data-aos="fade-left" className="flex flex-col gap-6">
                        <p className="text-gray-300 text-[16px] leading-relaxed mb-2 font-medium">
                            Home to the UK's largest range of medical devices, available to buy online.
                        </p>

                        <div className="flex flex-col gap-4">
                            {/* Card 1 */}
                            <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-xl p-4 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <img src="/home/online-1.png" alt="Vyne Prescriptions" className="w-[120px] object-contain rounded-lg shrink-0" />
                                <div className="flex-1 pb-2 sm:pb-0 text-center sm:text-left">
                                    <h3 className="font-medium text-gray-800 text-[20px] mb-1">The medical device store</h3>
                                    <p className="text-gray-500 text-[15px] leading-snug">
                                        Browse & buy thousands of medical devices, all available with next day delivery, or free delivery when you spend over £50.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-xl p-4 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <img src="/home/online-2.png" alt="Vyne Prescriptions" className="w-[120px] object-contain rounded-lg shrink-0" />
                                <div className="flex-1 pb-2 sm:pb-0 text-center sm:text-left">
                                    <h3 className="font-medium text-gray-800 text-[20px] mb-1">1000s of products</h3>
                                    <p className="text-gray-500 text-[15px] leading-snug">
                                        Whether you're popping up for a trip, or you'd just like to give another device a go, Vyne Shop has a huge range of options to choose from.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-xl p-4 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <img src="/home/online-3.png" alt="Vyne Prescriptions" className="w-[120px] object-contain rounded-lg shrink-0" />
                                <div className="flex-1 pb-2 sm:pb-0 text-center sm:text-left">
                                    <h3 className="font-medium text-gray-800 text-[20px] mb-1">Speedy service</h3>
                                    <p className="text-gray-500 text-[15px] leading-snug">
                                        Need to get something quickly? Order before 2pm on weekdays and you'll have the option to choose next day delivery at checkout.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CTAs Centered Bottom */}
                <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16 pt-4 pb-4">
                    <button className="bg-primary hover:bg-primary-dark text-black px-10 py-3 rounded-md font-medium transition-colors shadow-sm text-sm w-full sm:w-auto justify-center">
                        Shop Now
                    </button>
                    <button className="bg-transparent border border-white text-white hover:bg-white/10 px-10 py-3 rounded-md font-medium transition-colors text-sm w-full sm:w-auto justify-center">
                        Shop by brand
                    </button>
                </div>
            </div>
        </section>
    );
}
