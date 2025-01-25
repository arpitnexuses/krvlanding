export default function CompanyIntroSection() {
  return (
    <section className="w-full pt-12 mb-0 md:pt-16 mb-0 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex gap-16">
          {/* Left Content */}
          <div className="w-[40%] space-y-6 pt-4">
            <div className="space-y-0">
              <p className="text-[20px] text-[#44546F] mb-1">
                One Of The Leading Auditing & Accounting Firms In Dubai, UAE
              </p>
              
              <h2 className="text-[32px] font-semibold text-[#01445E] leading-tight">
                We are an FTA Approved Tax Agency and Auditors licensed by Ministry of Economy in UAE.
              </h2>
            </div>
            
            <p className="text-base text-[#44546F] leading-relaxed">
              KRV Auditing, with the aid of its multi-faceted experts, provides a gamut of services meant to serve business organizations and individuals alike. Headquartered in Dubai and ISO 9001-2015 certified, we ensure that the services rendered are satisfactory to the clients.
            </p>

            <div className="flex gap-12 pt-4">
              <div>
                <h3 className="text-4xl font-bold text-[#172B4D] mb-1">20+</h3>
                <p className="text-base text-[#44546F]">
                  Years of<br />experience
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#172B4D] mb-1">150+</h3>
                <p className="text-base text-[#44546F]">
                  Clients<br />served
                </p>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="w-[60%] relative h-[500px]">
            {/* Top image */}
            <div className="absolute right-[-15%] top-0 w-[90%] h-[400px]">
              <img
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/india_office_open_pr-1-1.webp"
                alt="Office meeting"
                className="w-full h-full object-cover object-[90%_center]"
              />
            </div>
            {/* Bottom image */}
            <div className="absolute left-[10%] bottom-[35%] w-[35%] h-[250px]">
              <img
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/download%20(1).webp"
                alt="Team discussion"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 