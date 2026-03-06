"use client";
import { Phone, Calendar, Send, Twitter, Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";


// ─── Review data from Trustpilot screenshots ───────────────────────────────
const reviewSlides = [
    [
        { stars: 5, title: "Purchases arrived as planned.", body: "Purchases arrived as planned.", author: "Mary Fogerty", date: "2 days ago" },
        { stars: 4, title: "Quick delivery of the ordered product", body: "Quick delivery of the ordered product", author: "Derek Harrison", date: "3 days ago" },
        { stars: 5, title: "Night time catheter bag hanger", body: "Fast delivery , product as described", author: "Julie Rafferty", date: "5 days ago" },
    ],
    [
        { stars: 5, title: "Excellent.", body: "Excellent.", author: "Satisfied user", date: "16 hours ago" },
        { stars: 5, title: "Correct product delivered on time", body: "The order was picked and sent and delivered within time frame no waiting wonderi...", author: "Billy Fillon-payoux", date: "2 days ago" },
        { stars: 5, title: "Purchases arrived as planned.", body: "Purchases arrived as planned.", author: "Mary Fogerty", date: "4 days ago" },
    ],
    [
        { stars: 4, title: "Quick delivery of the ordered product", body: "Quick delivery of the ordered product", author: "Derek Harrison", date: "5 days ago" },
        { stars: 4, title: "Night time catheter bag hanger", body: "Fast delivery , product as described", author: "Julie Rafferty", date: "26 February" },
        { stars: 5, title: "Prompt service.", body: "Prompt service.", author: "Alan Hoaksey", date: "26 February" },
    ],
    [
        { stars: 5, title: "I can't praise Vyne enough as my...", body: "I can't praise Vyne enough as my experience so far has been faultless. Great com...", author: "Tessa Hibbert", date: "26 February" },
        { stars: 5, title: "Good service and very pleased with the...", body: "Good service and very pleased with the product I purchased.", author: "Karen Breffit", date: "25 February" },
        { stars: 4, title: "Very pleased with Vynes service", body: "Very pleased with Vynes service, but disappointed with the Ugo night urine bag s...", author: "Stephen Bradshaw", date: "24 February" },
    ],
    [
        { stars: 5, title: "It's quick and easy", body: "It's very quick and easy", author: "Ian A Alston", date: "23 February" },
        { stars: 5, title: "Very polite and swift servis", body: "Very polite and swift servis. Good communications.", author: "Keith Curtis", date: "23 February" },
        { stars: 5, title: "Consistently good service", body: "Consistently good service, very helpful staff and very prompt delivery", author: "Angela", date: "23 February" },
    ],
];

function StarRow({ count, total = 5 }: { count: number; total?: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(total)].map((_, i) => (
                <div key={i} className={`w-4 h-4 flex items-center justify-center rounded-[2px] ${i < count ? "bg-[#00b67a]" : "bg-gray-600"}`}>
                    <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
            ))}
        </div>
    );
}

function TrustpilotCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div data-aos="fade-up" data-aos-delay="200" className="w-full bg-[#2F4365] border border-[#00E54A] rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start gap-8 mb-16 shadow-lg shadow-black/20">
            {/* Left: Excellent rating */}
            <div className="flex flex-col items-start gap-1.5 min-w-[140px] shrink-0 border-r border-gray-700/60 pr-8">
                <span className="text-white font-bold text-xl">Excellent</span>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-7 h-7 bg-[#00b67a] flex items-center justify-center rounded-[2px]">
                            <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                    ))}
                </div>
                <p className="text-[11px] text-gray-400">
                    Based on <strong className="text-white underline decoration-gray-600">1,290 reviews</strong>
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                    {/* Trustpilot star logo */}
                    <img src="/home/trustpilot.svg" alt="Trustpilot" width={106} height={27} />
                </div>
            </div>

            {/* Right: Swiper reviews */}
            <div className="flex-1 w-full flex flex-col min-w-0">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="shrink-0 text-gray-300 hover:text-white transition-colors p-1 border border-gray-400 rounded-full"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <div className="flex-1 overflow-hidden min-w-0">
                        <Swiper
                            onSwiper={(s) => { swiperRef.current = s; }}
                            slidesPerView={1}
                            loop
                        >
                            {reviewSlides.map((slide, si) => (
                                <SwiperSlide key={si}>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
                                        {slide.map((r, ri) => (
                                            <div
                                                key={ri}
                                                className={`flex flex-col gap-1.5 px-4 ${ri < slide.length - 1 ? "md:border-r md:border-gray-700/50" : ""}`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <StarRow count={r.stars} />
                                                    <span className="flex items-center gap-1 text-[10px] text-gray-300">
                                                        <CircleCheck size={12} className="text-primary" />
                                                        Verified
                                                    </span>
                                                </div>
                                                <h4 className="text-white text-[13px] font-bold leading-snug">{r.title}</h4>
                                                <p className="text-[12px] text-gray-400 leading-snug">{r.body}</p>
                                                <span className="text-[11px] text-gray-500 mt-0.5">
                                                    <strong className="text-gray-300 font-medium">{r.author}</strong>, {r.date}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="shrink-0 text-gray-300 hover:text-white transition-colors p-1 border border-gray-400 rounded-full"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
                <p className="text-[11px] text-gray-300 mt-4 pl-8">Showing our latest reviews</p>
            </div>
        </div>
    );
}

export default function Footer() {

    return (
        <footer className="bg-secondary text-white pt-20 pb-12 w-full relative overflow-hidden">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('/home/bg-patten.png')] bg-cover bg-no-repeat">
            </div>

            <div className="container-custom relative z-10">

                {/* Top Row */}
                <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16">

                    {/* Logo & Description */}
                    <div className="max-w-xs flex flex-col pt-2">
                        <Link href="/" className="mb-6 flex items-center" aria-label="Home">
                            <img src="/logo.png" alt="Vyne Logo" width={`200px`} />
                        </Link>
                        <p className="text-gray-300 text-[13px] leading-relaxed mb-8">
                            Order your prescriptions and buy your continence and ostomy products, <span className="text-primary">all in one place</span>
                        </p>
                        <div className="flex items-center gap-5 text-gray-400">
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Contact Blocks */}
                    <div className="flex-1 w-full lg:ml-20 xl:ml-32">
                        <h3 className="text-white font-semibold text-lg mb-6">Have a question?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Call Us */}
                            <div className="flex items-start gap-4">
                                {/* <Phone className="text-gray-400 mt-1" size={20} /> */}
                                <div className="flex flex-col gap-2">
                                    <span className="bg-primary text-secondary text-[20px] font-bold px-3 py-1 rounded-lg w-max">Call us:</span>
                                    <div className="text-[13px]! text-gray-300">
                                        <p className="mb-1 text-[14px]!">Customer services:</p>
                                        <a href="tel:02039877560" className="text-primary font-semibold hover:underline text-[14px]!">020 3987 7560</a>
                                    </div>
                                </div>
                            </div>

                            {/* We're open */}
                            <div className="flex items-start gap-4">
                                {/* <Calendar className="text-gray-400 mt-1" size={20} /> */}
                                <div className="flex flex-col gap-2">
                                    <span className="bg-primary text-secondary text-[20px] font-bold px-3 py-1 rounded-lg w-max">We're open:</span>
                                    <div className="text-[14px]! text-gray-300 leading-relaxed">
                                        <p className="text-[14px]!">Mon-Fri: <span className="text-primary">8:00am - 6:00pm</span></p>
                                        <p className="text-[14px]!">Sat: <span className="text-primary">8:00am - 1:00pm</span></p>
                                        <p className="text-[14px]!">Sun: <span className="text-primary">10am - 2pm</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Email us */}
                            <div className="flex items-start gap-4">
                                {/* <Send className="text-gray-400 mt-1" size={20} /> */}
                                <div className="flex flex-col gap-2">
                                    <span className="bg-primary text-secondary text-[20px] font-bold px-3 py-1 rounded-lg w-max">Email us anytime:</span>
                                    <div className="text-[14px]!">
                                        <a href="mailto:hello@vyne.co.uk" className="text-primary hover:underline">hello@vyne.co.uk</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700/50 my-12 hidden"></div>

                {/* Middle Row: Newsletter & Links */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16 pt-6">

                    {/* Newsletter */}
                    <div className="max-w-xs w-full">
                        <h3 className="text-white font-semibold text-xl mb-3">Be the first to know...</h3>
                        <p className="text-gray-300 text-[13px] leading-relaxed mb-6">
                            Sign up to our newsletter for support, advice and exclusive offers.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 outline-none text-sm placeholder:text-gray-500"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white rounded-lg px-4 py-3 font-medium transition-colors text-sm shadow-md"
                            >
                                Sign up
                            </button>
                        </form>

                        {/* Awards Placeholders */}
                        <div className="flex lg:flex-nowrap flex-wrap lg:items-center items-start justify-start gap-3 mt-12">
                            <img src="/home/award-1.png" alt="Award 1" className="w-24 h-24 object-contain" />
                            <img src="/home/award-2.png" alt="Award 2" className="w-24 h-24 object-contain" />
                            <img src="/home/award-3.png" alt="Award 3" className="w-24 h-24 object-contain" />
                            <img src="/home/award-4.png" alt="Award 4" className="w-24 h-24 object-contain" />
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="flex-1 w-full lg:ml-20 xl:ml-32 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[13px]">
                        {/* Services */}
                        <div className="flex flex-col">
                            <span className="bg-primary text-secondary text-[20px] mb-4 font-bold px-3 py-1 rounded-lg w-max">Services</span>
                            <ul className="flex flex-col gap-4 text-gray-300">
                                <li><Link href="#" className="hover:text-primary transition-colors">Vyne Prescriptions</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Vyne Shop</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Vyne Online</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Support & advice</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Healthcare professionals</Link></li>
                            </ul>
                        </div>

                        {/* About Vyne */}
                        <div className="flex flex-col">
                            <span className="bg-primary text-secondary text-[20px] mb-4 font-bold px-3 py-1 rounded-lg w-max">
                                About Vyne
                            </span>
                            <ul className="flex flex-col gap-4 text-gray-300">
                                <li><Link href="#" className="hover:text-primary transition-colors">About us</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Get in touch</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Sustainability</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Charity</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Help centre</Link></li>
                            </ul>
                        </div>

                        {/* Important bits */}
                        <div className="flex flex-col col-span-2 sm:col-span-1">
                            <span className="bg-primary text-secondary text-[20px] mb-4 font-bold px-3 py-1 rounded-lg w-max">
                                Important bits
                            </span>
                            <ul className="flex flex-col gap-4 text-gray-300">
                                <li><Link href="#" className="hover:text-primary transition-colors">Delivery information</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Returns & refund information</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Terms of service</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Privacy policy</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Complaints procedure</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">VAT relief form</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Multi-language support</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Trustpilot Box */}
                <TrustpilotCarousel />
                <div className="w-full h-[1px] bg-gray-600 my-6"></div>

                {/* Copyright */}
                <div className="text-center text-[12px]! text-gray-400 flex flex-col gap-3">
                    <p className="text-[12px]!">Copyright of <a href="#" className="text-primary hover:underline font-semibold">vyne.co.uk</a></p>
                    <div className="flex flex-col gap-1">
                        <p className="text-[12px]!">Vyne is a brand of Optimum Medical Solutions Ltd.</p>
                        <p className="text-[12px]!">Tennant Hall, Blenheim Grove, Leeds, United Kingdom, LS2 9ET</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
