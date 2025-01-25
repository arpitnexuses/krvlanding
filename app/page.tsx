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
        <div className="pt-20 pb-12 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center">
            {/* Left Side - Form */}
            <div className="w-full lg:w-[500px] bg-white p-6 md:p-8 lg:p-12 rounded-[32px] shadow-lg">
              <h1 className="text-[28px] md:text-[32px] lg:text-[38px] leading-tight text-[#1D2939] mb-3">
                Transform Your Business with{" "}
                <span className="font-bold text-[#01445E]">Expert Consultation</span>{" "}
              </h1>
              <p className="text-[#667085] text-sm md:text-base mb-6 lg:mb-10">
                Experience tailored financial services, insights and strategies to drive your business forward. Start your journey today.
              </p>
              <SignupForm />
            </div>

            {/* Right Side - Carousel */}
            <div className="w-full lg:flex-1 flex justify-center">
              <AutoCarousel />
            </div>
          </div>
        </div>
        <FeatureSection />
        <CompanyIntroSection />
        <div className="mb-12 lg:mb-20">
          <ConsultationSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
