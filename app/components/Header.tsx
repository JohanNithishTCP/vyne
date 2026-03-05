import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-100 py-4 w-full sticky top-0 z-50 shadow-sm">
            <div className="container-custom flex flex-wrap lg:flex-nowrap justify-between items-center gap-6">
                {/* Logo Placeholder */}
                <Link href="/" className="flex items-center gap-2" aria-label="Home">
                    {/* A space for future user image upload */}
                    <div className="flex items-center relative w-[120px] h-[40px]">
                        <img src="/logo.png" alt="Logo" width={`120px`} />
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-8 font-medium text-gray-800">
                    <Link href="#" className="hover:text-primary transition-colors text-sm">Vyne Shop</Link>
                    <Link href="#" className="hover:text-primary transition-colors text-sm">Vyne Prescriptions</Link>
                    <Link href="#" className="hover:text-primary transition-colors text-sm">Vyne Online</Link>
                </nav>

                {/* Search Bar */}
                <div className="flex flex-1 max-w-[400px]">
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
        </header>
    );
}
