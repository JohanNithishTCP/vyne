import { ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="bg-secondary text-white py-2 text-sm w-full">
            <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Left Links */}
                <div className="hidden lg:flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6">
                    <Link href="#" className="hover:text-primary transition-colors">About Vyne</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Support & advice</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Help centre</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Get in touch</Link>
                </div>

                {/* Right Info & Icons */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-[14px] border-b border-white hover:border-primary transition-colors cursor-pointer">Excellent</span>
                        {/* Trustpilot stars placeholder */}
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-[#00B67A] flex items-center justify-center rounded-[2px]">
                                    <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <img src="/home/trustpilot.svg" alt="Trustpilot" width="76" />
                    </div>

                    <div className="flex items-center gap-4 border-l border-white/20 pl-4">
                        <button className="hover:text-primary transition-colors" aria-label="Cart">
                            <ShoppingBag size={20} />
                        </button>
                        <button className="hover:text-primary transition-colors" aria-label="User Profile">
                            <User size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
