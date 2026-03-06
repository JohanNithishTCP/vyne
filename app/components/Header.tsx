"use client";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-100 py-4 w-full sticky top-0 z-50 shadow-sm">
            <div className="container-custom flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 md:gap-6">

                {/* Mobile/Tablet Header Left Side */}
                <div className="flex items-center gap-3">
                    {/* Hamburger Button */}
                    <button
                        className="lg:hidden text-gray-800 flex items-center justify-center p-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>

                    {/* Logo Placeholder */}
                    <Link href="/" className="flex items-center gap-2" aria-label="Home">
                        {/* A space for future user image upload */}
                        <div className="flex items-center relative w-[100px] md:w-[120px] h-[36px] md:h-[40px]">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain object-left" />
                        </div>
                    </Link>
                </div>

                {/* Navigation Links (Desktop only) */}
                <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
                    <Link href="#" className="hover:text-primary transition-colors text-sm">Vyne Shop</Link>
                    <Link href="#" className="hover:text-primary transition-colors text-sm">Vyne Prescriptions</Link>
                    <Link href="#" className="hover:text-primary transition-colors text-sm">Vyne Online</Link>
                </nav>

                {/* Search Bar (Desktop only) */}
                <div className="hidden lg:flex flex-1 max-w-[400px] min-w-[200px] w-full lg:w-auto mt-2 lg:mt-0">
                    <div className="relative w-full flex shadow-sm border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                        <input
                            type="text"
                            placeholder="Search for a product, article"
                            className="w-full px-4 py-2 outline-none bg-transparent text-sm placeholder:text-gray-400"
                        />
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 transition-colors flex items-center justify-center shrink-0" aria-label="Search">
                            <Search size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 z-40 rounded-b-xl">

                    {/* Search Bar (Mobile only) */}
                    <div className="flex w-full min-w-[200px] mb-2">
                        <div className="relative w-full flex shadow-sm border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                            <input
                                type="text"
                                placeholder="Search for a product, article"
                                className="w-full px-4 py-2 outline-none bg-transparent text-sm placeholder:text-gray-400"
                            />
                            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 transition-colors flex items-center justify-center shrink-0" aria-label="Search">
                                <Search size={18} />
                            </button>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-3 font-medium text-gray-800">
                        <Link href="#" className="hover:text-primary transition-colors text-[16px] border-b border-gray-50 pb-3">Vyne Shop</Link>
                        <Link href="#" className="hover:text-primary transition-colors text-[16px] border-b border-gray-50 pb-3">Vyne Prescriptions</Link>
                        <Link href="#" className="hover:text-primary transition-colors text-[16px] border-b border-gray-50 pb-3">Vyne Online</Link>

                        {/* Extra top bar links consolidated for mobile convenience */}
                        <div className="pt-2 flex flex-col gap-4 text-[14px] text-gray-500">
                            <Link href="#" className="hover:text-primary transition-colors">About Vyne</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Support & advice</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Help centre</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Get in touch</Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
