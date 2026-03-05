import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import FooterLogos from "./components/FooterLogos";
import IntroducingVyneOnline from "./components/IntroducingVyneOnline";
import VynePrescriptions from "./components/VynePrescriptions";
import VyneShop from "./components/VyneShop";
import SupportAndAdvice from "./components/SupportAndAdvice";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <TopBar />
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <MissionVision />
        <FooterLogos />
        <IntroducingVyneOnline />
        <VynePrescriptions />
        <VyneShop />
        <SupportAndAdvice />
      </main>
      <Footer />
    </div>
  );
}
