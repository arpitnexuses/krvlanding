'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ConsultationSection() {
  return (
    <section className="w-full pt-8 pb-0 md:pt-8 md:pb-0 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16 pt-8">
          <h2 className="text-[32px] font-semibold text-[#1D2939] max-w-[600px] mx-auto leading-tight">
            Don&apos;t let accounting and auditing be a headache. Trust us to handle it for you.
          </h2>
          <div className="h-6"></div>
        </div>

        <div className="grid grid-cols-2 gap-0">
          {/* Left Card - Free Consultation */}
          <div className="relative overflow-hidden h-[300px] bg-[#F5F5F5]">
            <div className="grid grid-cols-2 h-full">
              {/* Left side - Image */}
              <div className="relative h-full opacity-90">
                <div className="absolute inset-0 bg-[#F5F5F5] mix-blend-multiply z-10"></div>
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/image-33-890x664-1.webp"
                  alt="Free Consultation"
                  fill
                  className="object-cover object-left"
                  priority
                  style={{ filter: 'brightness(1.1) contrast(0.95)' }}
                />
              </div>
              
              {/* Right side - Content */}
              <div className="p-8 flex flex-col justify-center relative z-20">
                <h3 className="text-2xl font-semibold text-[#1D2939] mb-2">
                  Free Consultation
                </h3>
                <p className="text-sm text-[#475467] mb-4">
                  With over 20 years of experience, we&apos;ll ensure you always get the best service.
                </p>
                <Link 
                  href="https://bit.ly/4apm28j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#01445E] text-white px-5 py-2 rounded-lg inline-flex items-center gap-2 hover:bg-[#013348] transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit text-sm group"
                >
                  <span>Book Now</span>
                  <span className="transform group-hover:translate-x-2 group-hover:ml-1 transition-all duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Card - Company Profile */}
          <div className="relative overflow-hidden h-[300px]">
            <Image
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/Business-Owner.webp"
              alt="Company Profile"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/50 p-8 flex flex-col justify-center items-center">
              <div className="max-w-[300px] text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Learn More? – View Our Company Profile
                </h3>
                <Link 
                  href="https://drive.google.com/file/d/1xRBUlJKzmFihUb8upEQJcqZPnG2MV2Lu/view?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1D2939] px-5 py-2 rounded-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit text-sm group mx-auto"
                >
                  <span>Download Now</span>
                  <span className="transform group-hover:translate-x-2 group-hover:ml-1 transition-all duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 