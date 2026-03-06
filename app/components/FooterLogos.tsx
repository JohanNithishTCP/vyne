import { Lock } from "lucide-react";

export default function FooterLogos() {
    const Sparkle = ({ className = "w-6 h-6 text-primary" }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 12 14 4 12C12 10 12 2 12 2Z" fill="currentColor" />
        </svg>
    );

    return (
        <div className="bg-white pt-6 pb-12 w-full overflow-hidden">
            <div className="container-custom flex flex-wrap justify-center md:justify-between items-center gap-8 relative px-4 md:px-30!">

                {/* Trustpilot Placeholder */}
                <div className="flex flex-col items-center gap-1 z-10 bg-white">
                    <img src="/home/s-1.svg" alt="Trustpilot" className="w-40" />
                </div>

                <Sparkle className="hidden md:block w-8 h-8 text-primary absolute left-[25%] -translate-y-4" />

                {/* Carbon Neutral Placeholder */}
                <div className="flex flex-col items-center gap-1 z-10 bg-white">
                    <img src="/home/s-2.png" alt="Trustpilot" className="w-40" />
                </div>

                <Sparkle className="hidden md:block w-10 h-10 text-primary absolute left-[50%] translate-y-2 opacity-80" />

                {/* CQC Placeholder */}
                <div className="flex flex-col items-center gap-1 z-10 bg-white">
                    <img src="/home/s-3.svg" alt="Trustpilot" className="w-40" />
                </div>

                <Sparkle className="hidden md:block w-8 h-8 text-primary absolute left-[75%] -translate-y-4" />

                {/* Secure Placeholder */}
                <div className="flex flex-col items-center gap-1 z-10 bg-white">
                    <img src="/home/s-4.png" alt="Trustpilot" className="w-40" />
                </div>

            </div>
        </div>
    );
}
