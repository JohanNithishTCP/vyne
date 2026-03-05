"use client";
import React, { useState } from 'react';

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/gynhealth/gynecology.webm",
    "https://cdn.clinicalvisuals.com/medical/gynhealth/obstetrics.webm",
    "https://cdn.clinicalvisuals.com/medical/gynhealth/infertility.webm",
    "https://cdn.clinicalvisuals.com/medical/gynhealth/breast_symptoms.webm",
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative bg-black text-white w-full h-screen flex items-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
                {/* Overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}
            </div>

            <div className="container-custom w-full relative z-10">
                <div className="max-w-2xl text-left">
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-4xl md:text-5xl lg:text-[48px] font-bold leading-tight mb-4 tracking-tighter [text-shadow:8px_4px_7px_rgba(0,0,0,0.6)]"
                    >
                        Because aftercare doesn't <br className="hidden md:block" /> need to be a puzzle.
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className="text-white text-lg md:text-[18px] max-w-lg mt-6 font-medium [text-shadow:8px_4px_7px_rgba(0,0,0,0.6)]"
                    >
                        Let us take care of <br className="hidden md:block" /> your continence, ostomy and wound care products.
                    </p>
                </div>
            </div>
        </section>
    );
}
