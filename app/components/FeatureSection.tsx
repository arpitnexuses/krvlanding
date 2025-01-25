'use client';
import { useState } from 'react';
import Image from 'next/image';

type ServiceContent = {
  title: string;
  description: string;
  points: string[];
  image: string;
};

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState('Corporate Tax');

  const services: Record<string, ServiceContent> = {
    'Corporate Tax': {
      title: "Optimize Your Tax Strategy",
      description: "Tailored Corporate Tax Planning",
      points: [
        "Minimize your tax liabilities with expert corporate tax strategies designed to align with your business goals while ensuring compliance with UAE tax regulations.",
        "Stay on top of your corporate tax obligations with precise filing and adherence to the latest laws and regulations, giving you peace of mind.",
        "Navigate the complexities of UAE tax laws with KRV Auditing's expert advisors who provide actionable insights and strategies to optimize your financial outcomes."
      ],
      image: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/image1_64ec6de1-1885-4c3b-bde1-f4e6c3036b14.jpg"
    },
    'VAT Service': {
      title: "Simplify VAT Processes with Expert Support",
      description: "Seamless VAT Registration",
      points: [
        "Get your business VAT-compliant with streamlined registration services tailored to UAE regulatory requirements.",
        "Ensure timely and error-free VAT submissions with KRV Auditing's professional filing services, helping you meet all deadlines with confidence.",
        "Receive expert guidance on VAT implications, ensuring your business operations align with regulatory standards while optimizing tax outcomes."
      ],
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/image%205.jpg"
    },
    'Accounting & Bookkeeping': {
      title: "Achieve Financial Clarity with Tailored Accounting Services",
      description: "Professional Bookkeeping Services",
      points: [
        "Keep your financial records organized and up-to-date with accurate and reliable bookkeeping tailored to your business needs.",
        "Gain actionable insights with clear, detailed reports that support better decision-making and strategic planning.",
        "From startups to established enterprises, our services are designed to adapt to your unique business requirements.",
        "Ensure your financial records meet regulatory standards, minimizing risks and building stakeholder confidence."
      ],
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/d50295fceff12a0a22f4ad4e871a35ba.jpg"
    },
    'Transfer Pricing': {
      title: "Strategic Transfer Pricing Solutions",
      description: "Expert Transfer Pricing Services",
      points: [
        "Navigate complex transfer pricing regulations with confidence through our comprehensive documentation and planning services.",
        "Ensure compliance with local and international transfer pricing requirements while optimizing your inter-company transactions.",
        "Protect your business interests with robust transfer pricing policies backed by thorough economic analysis and documentation."
      ],
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/image%204.jpg"
    }
  };

  const tabs = [
    "Corporate Tax",
    "VAT Service",
    "Accounting & Bookkeeping",
    "Transfer Pricing"
  ];

  const currentService = services[activeTab];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-[42px] font-medium text-[#172B4D] leading-[1.2] md:leading-[1.1]">
            Comprehensive Tax and Financial Services
            <br className="hidden md:block" />
            for Your Business
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#01445E] text-white"
                  : "bg-[#F1F2F4] text-[#44546F] hover:bg-[#01445E] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="w-full md:w-[40%] space-y-6 md:space-y-8">
            <h3 className="text-[28px] md:text-[38px] font-semibold text-[#172B4D] leading-tight">
              {currentService.title}
            </h3>
            <h4 className="text-xl md:text-2xl font-medium text-[#01445E]">
              {currentService.description}
            </h4>
            <div className="space-y-4 md:space-y-6">
              {currentService.points.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <svg className="w-5 h-5 text-[#01445E] mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[#172B4D] text-base md:text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[60%] bg-[#F1F2F4] rounded-lg overflow-hidden h-[300px] md:h-[500px] relative">
            <Image
              src={currentService.image}
              alt={activeTab}
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 60vw, 800px"
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 