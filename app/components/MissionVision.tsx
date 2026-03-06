"use client";
import { useState } from "react";

// ── Data ────────────────────────────────────────────────────────────────────
const missionItems = [
    {
        icon: "/home/mission-1.svg",
        body: "We're the only home delivery service where you can manage everything online — from ordering to tracking, all in one place.",
    },
    {
        icon: "/home/mission-2.svg",
        body: "We have the UK's largest range of medical devices, available to buy online with next-day delivery.",
    },
    {
        icon: "/home/mission-3.svg",
        body: "We'll support you every step of the way with our experienced team of specialists who are always on hand to help.",
    },
    {
        icon: "/home/mission-4.svg",
        body: "We're committed to sustainability. Vyne is the greenest choice for healthcare, reducing waste and carbon footprint.",
    },
];

const valuesItems = [
    {
        icon: "/home/values-1.svg",
        body: "Sustainability in healthcare is crucial. At Vyne, we focus on eco-friendly practices to minimise our environmental impact!",
    },
    {
        icon: "/home/values-2.svg",
        body: "This year, we're focusing on a cause closer to home by supporting The British Red Cross at all our events.",
    },
    {
        icon: "/home/values-3.svg",
        body: "The easiest way to order your prescription continence, stoma, and wound care appliances, all online, all completely free, with Vyne Online.",
    },
    {
        icon: "/home/values-4.svg",
        body: "We value compassionate care, putting patients’ needs and well-being at the heart of everything we do.",
    },
];



// ── Main Component ────────────────────────────────────────────────────────────
export default function MissionVision() {
    const [activeTab, setActiveTab] = useState<"mission" | "values">("mission");

    const items = activeTab === "mission" ? missionItems : valuesItems;

    function handleTabChange(tab: "mission" | "values") {
        setActiveTab(tab);
    }

    return (
        <section className="bg-white py-16 w-full">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Left Sidebar */}
                <div data-aos="fade-right" className="lg:col-span-4 bg-secondary rounded-xl text-white p-6 relative overflow-hidden shadow-lg h-full">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/home/bg-patten.png')] bg-cover bg-no-repeat" />

                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-gray-600 pb-4 mb-6 relative z-10">
                        <button
                            onClick={() => handleTabChange("mission")}
                            className={`font-semibold flex flex-col items-center transition-colors ${activeTab === "mission" ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            Mission
                            <div className={`h-[2px] w-full mt-2 rounded transition-all duration-200 ${activeTab === "mission" ? "bg-white" : "bg-transparent"}`} />
                        </button>
                        <button
                            onClick={() => handleTabChange("values")}
                            className={`font-semibold flex flex-col items-center transition-colors ${activeTab === "values" ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            Values
                            <div className={`h-[2px] w-full mt-2 rounded transition-all duration-200 ${activeTab === "values" ? "bg-white" : "bg-transparent"}`} />
                        </button>
                    </div>

                    {/* Items list */}
                    <div className="space-y-0 relative z-10">
                        {items.map((item, i) => (
                            <div
                                key={`${activeTab}-${i}`}
                                className={`flex items-start gap-3 py-4 ${i < items.length - 1 ? "border-b border-gray-600/50" : ""}`}
                            >
                                <div className="shrink-0 w-[60px] h-[60px] flex items-center justify-center">
                                    <img src={item.icon} alt="" className="w-[60px] h-[60px] object-contain" />
                                </div>
                                <p className="text-[15px] font-light text-gray-200 leading-relaxed">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div data-aos="fade-left" className="lg:col-span-8 flex flex-col justify-center py-6">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-1 w-8 bg-primary rounded-full"></div>
                        <span className="text-gray-600 font-medium text-lg tracking-wide uppercase">About Vyne</span>
                    </div>

                    <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-[#1f2937] mb-8 leading-tight">
                        The UK's most trusted home delivery service.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Main Image */}
                        <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-gray-100 group">
                            <img src="/home/about.png" alt="About Vyne" className="w-full h-full object-cover hover:scale-105 transition-all duration-300" />
                        </div>

                        {/* Right Text & Small Image */}
                        <div className="flex flex-col gap-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We're the UK's best rated medical device shop and prescription home delivery service according to Trust Pilot!
                            </p>

                            <hr className="border-gray-200" />

                            <div className="flex items-center gap-4">
                                <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center shadow-sm">
                                    <img src="/home/about-2.png" alt="About Vyne" className="w-full h-full object-cover hover:scale-105 transition-all duration-300" />
                                </div>
                                <p className="text-sm text-gray-600 leading-tight">
                                    <span className="block font-medium text-gray-800">Andy from Leeds.</span>
                                    Vyne user, grandfather, crossword champion.
                                </p>
                            </div>

                            <div className="mt-2">
                                <button className="bg-primary hover:bg-primary-dark text-black px-8 py-3 rounded-md font-medium transition-colors shadow-sm text-sm tracking-wide">
                                    Who's Vyne
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
