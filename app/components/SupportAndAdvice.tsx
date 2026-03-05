"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const articles = [
    {
        id: 1,
        title: "What causes a UTI?",
        image: "/home/blog-1.png",
        description: "A Urinary Tract Infection (UTI), is a common type of infection affecting your bladder (cystitis), urethra (urethritis) or kidneys (kidney infection).",
        author: "Lily M",
        date: "Feb 24, 2026",
        role: "Clinical Content Writer",
    },
    {
        id: 2,
        title: "Foley Catheter Basics",
        image: "/home/blog-2.png",
        description: "Do you have questions about foley catheters, or urethral catheters? Perhaps you or a loved will be having one fitted soon, and you currently know little to nothing about them, or how they work?",
        author: "Lily M",
        date: "Jan 29, 2026",
        role: "Clinical Content Writer",
    },
    {
        id: 3,
        title: "Why is my urine bag leaking?",
        image: "/home/blog-3.png",
        description: "Let's take a look at some of the most common causes of a leaking urine bag.",
        author: "Sam H",
        date: "Aug 13, 2025",
        role: "Clinical Content Writer",
    },
    {
        id: 4,
        title: "Understanding ISC",
        image: "/home/blog-2.png",
        description: "Intermittent Self-Catheterisation basics and how it might improve your quality of life.",
        author: "Lily M",
        date: "Dec 05, 2025",
        role: "Clinical Content Writer",
    },
];

const tabs = ["Catheter Support", "ISC Support", "Colostomy Support", "Ileostomy Support"];

export default function SupportAndAdvice() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="bg-gray-50 py-24 w-full relative overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('/home/bg-patten.png')] bg-cover bg-no-repeat">
            </div>
            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-1 w-8 bg-primary rounded-full"></div>
                        <span className="text-gray-600 font-medium text-lg tracking-wide uppercase">Support & advice</span>
                    </div>
                    <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-[#1f2937] leading-tight">
                        Continence, Bowel & Ostomy Support
                    </h2>
                </div>

                {/* Tabs and Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 mb-8 pt-4">
                    {/* Tabs */}
                    <div className="flex overflow-x-auto w-full md:w-auto hide-scrollbar gap-8 lg:gap-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 whitespace-nowrap text-[15px] font-medium transition-colors relative ${activeTab === tab ? "text-gray-800" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-sm"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Custom Nav Buttons for Swiper */}
                    <div className="hidden md:flex gap-3 pb-4">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-[#1a2333] transition-colors shadow-sm"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-[#1a2333] transition-colors shadow-sm"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="relative mb-16">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        pagination={{ clickable: true, el: '.custom-pagination' }}
                        className="pb-4"
                    >
                        {articles.map((article) => (
                            <SwiperSlide key={article.id} className="h-auto">
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full rounded-b-2xl">
                                    {/* Article Image Placeholder */}
                                    <img src={article.image} alt={article.title} className="w-full aspect-4/3 bg-gray-200 relative shrink-0 object-cover" />

                                    {/* Article Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                            {article.description}
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-3 pt-6 border-t border-gray-50 mt-auto">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                                <img src="/favicon.svg" alt="Author" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-gray-800 flex gap-1">
                                                    {article.author} <span className="text-gray-300">-</span> <span className="text-gray-500">{article.date}</span>
                                                </span>
                                                <span className="text-[11px] text-gray-400">{article.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Mobile pagination & arrows */}
                    <div className="md:hidden flex justify-center items-center gap-6 mt-8">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div className="custom-pagination w-auto! flex justify-center gap-2"></div>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-6">
                    <button className="bg-primary hover:bg-primary-dark text-black px-8 py-3 rounded-md font-medium transition-colors shadow-sm text-sm">
                        View all Catheter support articles
                    </button>
                </div>
            </div>
        </section>
    );
}
