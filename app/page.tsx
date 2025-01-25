import SignupForm from "./components/SignupForm";
import AutoCarousel from "./components/AutoCarousel";
import TopBar from "./components/TopBar";
import FeatureSection from "./components/FeatureSection";
import CompanyIntroSection from "./components/CompanyIntroSection";
import ConsultationSection from "./components/ConsultationSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-[#f5f9ff]">
        <div className="pt-20 pb-12">
          <div className="max-w-[1400px] mx-auto px-4 flex gap-12 items-start justify-center">
            {/* Left Side - Form */}
            <div className="w-[500px] bg-white p-12 rounded-[32px] shadow-lg">
              <h1 className="text-[38px] leading-tight text-[#1D2939] mb-3">
                Transform Your Business with{" "}
                <span className="font-bold text-[#01445E]">Expert Consultation</span>{" "}
              </h1>
              <p className="text-[#667085] text-base mb-10">
                Experience tailored financial services, insights and strategies to drive your business forward. Start your journey today.
              </p>
              <SignupForm />
            </div>

            {/* Right Side - Carousel */}
            <div className="flex-1 flex justify-center">
              <AutoCarousel />
            </div>
          </div>
        </div>
        <FeatureSection />
        <CompanyIntroSection />
        <div className="mb-20">
          <ConsultationSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
