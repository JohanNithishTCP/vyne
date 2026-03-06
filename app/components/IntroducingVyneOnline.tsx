"use client";

import { ThumbsUp, MessageCircle, Home, Apple, Play, Pause } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const features = [
    {
        id: 0,
        icon: "/home/iv-1.svg",
        title: "Three click reordering",
        description: "Running out of stock? You can reorder your prescription on Vyne Online in just three clicks.",
        video: "https://www.vyne.co.uk/cdn/shop/videos/c/vp/d5e4a5bf46894d4dba70aebbf3db24bc/d5e4a5bf46894d4dba70aebbf3db24bc.HD-1080p-7.2Mbps-54731463.mp4?v=0"
    },
    {
        id: 1,
        icon: "/home/iv-2.svg",
        title: "Anytime, anywhere",
        description: "Place your Vyne Prescriptions order anytime, anywhere - at a time that suits you.",
        video: "https://www.vyne.co.uk/cdn/shop/videos/c/vp/3a789b8406fc405ca4ecc61753fb6fec/3a789b8406fc405ca4ecc61753fb6fec.HD-1080p-7.2Mbps-54731461.mp4?v=0"
    },
    {
        id: 2,
        icon: "/home/iv-3.svg",
        title: "Easy order tracking",
        description: "Want to see where your order is? Our five-step progress tracker keeps you up to date.",
        video: "https://www.vyne.co.uk/cdn/shop/videos/c/vp/0081a30746de4c3f8fa9e8184e205970/0081a30746de4c3f8fa9e8184e205970.HD-1080p-7.2Mbps-54734043.mp4?v=0" // Recycling one as 3rd wasn't provided, but unique logic is ready
    }
];

export default function IntroducingVyneOnline() {
    const [activeId, setActiveId] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(5);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Sync video source with active card
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            if (isPlaying) {
                videoRef.current.play().catch(e => console.log("Video play failed:", e));
            }
        }
    }, [activeId]);

    // Handle play/pause sync
    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(e => console.log("Video play failed:", e));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    const handleVideoEnd = () => {
        if (isPlaying) {
            setActiveId((prev) => (prev + 1) % features.length);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleCardClick = (id: number) => {
        if (activeId === id) {
            setIsPlaying(!isPlaying);
        } else {
            setActiveId(id);
            setIsPlaying(true);
        }
    };

    return (
        <section className="relative w-full bg-secondary pt-20 pb-32 overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[url('/home/bg-patten.png')] bg-cover bg-no-repeat mix-blend-overlay">
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-14 items-start">

                    {/* Left - Phone Mockup with Video */}
                    <div data-aos="fade-right" className="w-full md:w-[35%] flex justify-center">
                        <div className="relative w-[360px] h-[650px] -mb-48 md:-mb-64">
                            {/* Phone Frame Image Overlay */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <img src="/home/phone.png" alt="Phone Frame" className="w-full h-full object-contain" />
                            </div>

                            {/* Video Screen Content - Positioned precisely in the screen area */}
                            <div className="absolute top-[18px] bottom-[14px] left-[15px] right-[15px] rounded-[38px] overflow-hidden bg-black z-10">
                                <video
                                    ref={videoRef}
                                    src={features[activeId].video}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    playsInline
                                    onLoadedMetadata={handleLoadedMetadata}
                                    onEnded={handleVideoEnd}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div data-aos="fade-left" className="w-full md:w-[65%] flex flex-col pt-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-1 w-8 bg-primary rounded-full"></div>
                            <span className="text-white font-semibold tracking-wide uppercase">New</span>
                        </div>

                        <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-white mb-4">
                            Introducing Vyne Online
                        </h2>

                        <p className="text-gray-300 text-sm md:text-base mb-12">
                            Manage your NHS Prescriptions orders online, with the new <strong className="font-semibold text-white">Vyne Online</strong> portal and app!
                        </p>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up"
                            data-aos-delay={150}>
                            {features.map((feature, idx) => (
                                <div

                                    key={feature.id}
                                    onClick={() => handleCardClick(feature.id)}
                                    className={`bg-white rounded-xl p-6 text-center shadow-xl relative mt-4 sm:mt-0 cursor-pointer transition-all duration-300 border-[3px] h-full ${activeId === feature.id ? "border-primary scale-105 z-20" : "border-transparent scale-100"
                                        }`}
                                >
                                    <div className="absolute top-3 right-3 text-primary">
                                        {activeId === feature.id && isPlaying ? (
                                            <Pause size={16} fill="currentColor" />
                                        ) : (
                                            <Play size={16} fill="currentColor" />
                                        )}
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        <img src={feature.icon} alt="Icon" className="w-[48px] h-[48px] object-contain" />
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-[18px] mb-3">{feature.title}</h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Progress line for active card */}
                                    {activeId === feature.id && duration > 0 && (
                                        <div
                                            key={activeId}
                                            className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-xl"
                                            style={{
                                                animationName: isPlaying ? 'progress' : 'none',
                                                animationDuration: `${duration}s`,
                                                animationTimingFunction: 'linear',
                                                animationFillMode: 'forwards',
                                                animationPlayState: isPlaying ? 'running' : 'paused'
                                            }}
                                        ></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 pb-24 md:pb-0">
                            <button className="bg-primary hover:bg-primary-dark text-black px-8 py-3 rounded-md font-medium transition-colors shadow-sm text-sm shrink-0 w-full sm:w-auto">
                                Find Out More
                            </button>

                            <div className="flex justify-center items-center gap-4 w-full sm:w-auto">
                                <img src="/home/store.png" alt="App Store" className="w-[250px] object-contain" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* White extended bg at the bottom so the phone mockup can overlap cleanly */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-[54%] bg-gray-100 z-0"></div>
        </section>
    );
}
