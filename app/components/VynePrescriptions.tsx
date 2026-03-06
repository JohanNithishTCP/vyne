export default function VynePrescriptions() {
    return (
        <section className="bg-gray-50 py-20 w-full relative overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('/home/bg-patten.png')] bg-cover bg-no-repeat">
            </div>
            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div data-aos="fade-up" className="flex flex-col items-center text-center mb-12">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-1 w-8 bg-primary rounded-full"></div>
                        <span className="text-gray-600 font-medium text-lg tracking-wide uppercase">Vyne Prescriptions</span>
                    </div>
                    <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-[#1f2937] leading-tight">
                        Prescription Home Delivery Service
                    </h2>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center">

                    {/* Left Column (Text & Cards) */}
                    <div data-aos="fade-right" className="flex flex-col gap-8 order-2 lg:order-1">
                        <p className="text-gray-600  leading-relaxed max-w-xl">
                            Ordering your continence and stoma products through Vyne is easy. Manage as much or a little as you'd like online, and we're always here to help when you need it.
                        </p>

                        <div className="flex flex-col gap-4">
                            {/* Card 1 */}
                            <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow">
                                <img src="/home/prescription-1.png" alt="Vyne Prescriptions" className="w-[120px] object-contain rounded-lg shrink-0" />
                                <div className="text-center sm:text-left">
                                    <h3 className="font-medium text-gray-800 text-[20px] mb-1">Home delivery you can trust</h3>
                                    <p className="text-gray-500 text-[15px] leading-snug">
                                        Do you have a repeat prescription for a continence or stoma item? We'll deliver your items directly to your door, completely free.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow">
                                <img src="/home/prescription-2.png" alt="Vyne Prescriptions" className="w-[120px] object-contain rounded-lg shrink-0" />
                                <div className="text-center sm:text-left">
                                    <h3 className="font-medium text-gray-800 text-[20px] mb-1">Manage everything online</h3>
                                    <p className="text-gray-500 text-[15px] leading-snug">
                                        Place your prescription orders using Vyne Online - the easiest way to manage your NHS prescriptions. Order at a time and place that suits you, and even reorder in just 2 clicks!
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow">
                                <img src="/home/prescription-3.png" alt="Vyne Prescriptions" className="w-[120px] object-contain rounded-lg shrink-0" />
                                <div className="text-center sm:text-left">
                                    <h3 className="font-medium text-gray-800 text-[20px] mb-1">Dedicated support</h3>
                                    <p className="text-gray-500 text-[15px] leading-snug">
                                        If you'd prefer, you can order over the telephone with our lovely Customer Care team. They have decades of experience and are here to provide all the support & advice you need along the way.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Large Video) */}
                    <div data-aos="fade-left" className="order-1 lg:order-2 w-full flex justify-center">
                        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                            <video
                                src="https://cdn.clinicalvisuals.com/medical/vyne/shortclips/vyne_short_01.webm"
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>

                </div>

                {/* CTAs Centered Bottom */}
                <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16 pb-8">
                    <button className="bg-primary w-full sm:w-auto justify-center hover:bg-primary-dark text-black px-8 py-3 rounded-md font-medium transition-colors shadow-sm text-sm">
                        Register Online
                    </button>
                    <button className="bg-transparent w-full sm:w-auto justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md font-medium transition-colors text-sm">
                        Find Out More
                    </button>
                </div>
            </div>
        </section>
    );
}
