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
        category: "Catheter Support"
    },
    {
        id: 2,
        title: "Foley Catheter Basics",
        image: "/home/blog-2.png",
        description: "Do you have questions about foley catheters, or urethral catheters? Perhaps you or a loved will be having one fitted soon, and you currently know little to nothing about them, or how they work?",
        author: "Lily M",
        date: "Jan 29, 2026",
        role: "Clinical Content Writer",
        category: "Catheter Support"
    },
    {
        id: 3,
        title: "Why is my urine bag leaking?",
        image: "/home/blog-3.png",
        description: "Let's take a look at some of the most common causes of a leaking urine bag.",
        author: "Sam H",
        date: "Aug 13, 2025",
        role: "Clinical Content Writer",
        category: "Catheter Support"
    },
    {
        id: 4,
        title: "What are the different types of catheters?",
        image: "/home/blog-4.jpg",
        description: "If you're new to the world of catheters, you may not yet be aware of the different varieties which...",
        author: "Sam H",
        date: "Aug 6, 2024",
        role: "Clinical Content Writer",
        category: "ISC Support"
    },
    {
        id: 5,
        title: "A-Z Intermittent Self-Catheterisation (ISC)",
        image: "/home/blog-5.jpg",
        description: "Intermittent self-catheterisation, or ISC for short, is used if you can't empty your bladder by y...",
        author: "Sam H",
        date: "Jul 31, 2024",
        role: "Clinical Content Writer",
        category: "ISC Support"
    },
    {
        id: 6,
        title: "Finding the right ISC size for you",
        image: "/home/blog-6.jpg",
        description: "Everyone has different bodies and unique needs, so finding the right catheter for you is very imp...",
        author: "Sam H",
        date: "Jul 30, 2024",
        role: "Clinical Content Writer",
        category: "ISC Support"
    },
    {
        id: 7,
        title: "Bowel blockage and obstruction",
        image: "/home/blog-7.jpg",
        description: "Constipation, loose stools, and diarrhoea are among the fairly common experiences after an ileost...",
        author: "Sam H",
        date: "Jun 7, 2022",
        role: "Clinical Content Writer",
        category: "Colostomy Support"
    },
    {
        id: 8,
        title: "A-Z Colostomy",
        image: "/home/blog-8.jpg",
        description: "What is a colostomy? A colostomy is a surgical procedure by which a surgeon brings part of your l...",
        author: "Sam H",
        date: "Jun 7, 2022",
        role: "Clinical Content Writer",
        category: "Colostomy Support"
    },
    {
        id: 9,
        title: "What is the difference between a colostomy and an ileostomy?",
        image: "/home/blog-9.jpg",
        description: "On a first glance, both colostomies and ileostomies sound fairly similar. As the name suggests, t...",
        author: "Sam H",
        date: "Jul 14, 2021",
        role: "Clinical Content Writer",
        category: "Colostomy Support"
    },
    {
        id: 10,
        title: "A-Z Ileostomy",
        image: "/home/blog-4.jpg",
        description: "An ileostomy means that your small intestine is brought out through an opening in your abdomen to...",
        author: "Sam H",
        date: "Jul 31, 2024",
        role: "Clinical Content Writer",
        category: "Ileostomy Support"
    },
    {
        id: 11,
        title: "Bowel blockage and obstruction",
        image: "/home/blog-7.jpg",
        description: "Constipation, loose stools, and diarrhoea are among the fairly common experiences after an ileost...",
        author: "Sam H",
        date: "Jun 7, 2022",
        role: "Clinical Content Writer",
        category: "Ileostomy Support"
    },
    {
        id: 12,
        title: "What is the difference between a colostomy and an ileostomy?",
        image: "/home/blog-9.jpg",
        description: "On a first glance, both colostomies and ileostomies sound fairly similar. As the name suggests, t...",
        author: "Sam H",
        date: "Jul 14, 2021",
        role: "Clinical Content Writer",
        category: "Ileostomy Support"
    },
    {
        id: 13,
        title: "Common bowel problems - stoma odour, wind, diarrhoea and constipation",
        image: "/home/blog-11.jpg",
        description: "Constipation, loose stools, and diarrhoea are among the fairly common experiences after an ileost...",
        author: "Sam H",
        date: "Jun 7, 2022",
        role: "Clinical Content Writer",
        category: "Stoma support"
    },
    {
        id: 14,
        title: "The most common stoma problems",
        image: "/home/blog-10.jpg",
        description: "If you're living with a stoma, all sorts of issues can come up over time. There's usually no need...",
        author: "Sam H",
        date: "Jun 7, 2022",
        role: "Clinical Content Writer",
        category: "Stoma support"
    },
    {
        id: 15,
        title: "Stoma retraction or prolapse",
        image: "/home/blog-12.jpg",
        description: "When your stoma suddenly doesn't stick out anymore but lays flat on the skin or has even sunken b...",
        author: "Sam H",
        date: "Jun 7, 2022",
        role: "Clinical Content Writer",
        category: "Stoma support"
    },
];

const tabs = ["Catheter Support", "ISC Support", "Colostomy Support", "Ileostomy Support", "Stoma support"];

export default function SupportAndAdvice() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const swiperRef = useRef<SwiperType | null>(null);

    const handlePrevTab = () => {
        const currentIndex = tabs.indexOf(activeTab);
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[prevIndex]);
    };

    const handleNextTab = () => {
        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
    };

    const filteredArticles = articles.filter(article => article.category === activeTab);

    return (
        <section className="bg-gray-50 py-24 w-full relative overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('/home/bg-patten.png')] bg-cover bg-no-repeat">
            </div>
            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div data-aos="fade-up" className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-1 w-8 bg-primary rounded-full"></div>
                        <span className="text-gray-600 font-medium text-lg tracking-wide uppercase">Support & advice</span>
                    </div>
                    <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-[#1f2937] leading-tight">
                        Continence, Bowel & Ostomy Support
                    </h2>
                </div>

                {/* Tabs and Navigation */}
                <div data-aos="fade-left" className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 mb-8 pt-4">
                    {/* Tabs */}
                    <div className="flex overflow-x-auto w-full md:w-auto hide-scrollbar gap-8 lg:gap-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 whitespace-nowrap text-[18px] font-medium transition-colors relative ${activeTab === tab ? "text-gray-800" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-sm"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Custom Nav Buttons for Tabs */}
                    <div className="hidden md:flex gap-3 pb-4">
                        <button
                            onClick={handlePrevTab}
                            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-[#1a2333] transition-colors shadow-sm"
                            aria-label="Previous tab"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNextTab}
                            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-[#1a2333] transition-colors shadow-sm"
                            aria-label="Next tab"
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
                        {filteredArticles.map((article, idx) => (
                            <SwiperSlide key={article.id} className="h-auto mb-2">
                                <div data-aos="fade-up" data-aos-delay={idx * 150} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full rounded-b-2xl">
                                    {/* Article Image Placeholder */}
                                    <img src={article.image} alt={article.title} className="w-full aspect-4/3 bg-gray-200 relative shrink-0 object-cover" />

                                    {/* Article Content */}
                                    <div className="p-6 flex flex-col flex-1 h-full">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[56px]">{article.title}</h3>
                                        <p className="text-gray-500 text-[16px] leading-relaxed mb-6 line-clamp-3 min-h-[72px]">
                                            {article.description}
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-3 pt-6 border-t border-gray-200 mt-auto">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                                <img src="/favicon.svg" alt="Author" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[14px] font-medium text-gray-800 flex gap-1">
                                                    {article.author} <span className="text-gray-300">-</span> <span className="text-gray-500 text-[14px]">{article.date}</span>
                                                </span>
                                                <span className="text-[14px] text-gray-400">{article.role}</span>
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
                            onClick={handlePrevTab}
                            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div className="custom-pagination w-auto! flex justify-center gap-2"></div>
                        <button
                            onClick={handleNextTab}
                            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* View All Button */}
                <div data-aos="fade-up" className="flex justify-center mt-6">
                    <button className="bg-primary hover:bg-primary-dark text-black px-8 py-3 rounded-md font-medium transition-colors shadow-sm text-sm">
                        View all Catheter support articles
                    </button>
                </div>
            </div>
        </section>
    );
}
