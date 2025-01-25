import Image from 'next/image'

export default function LeadingFirmSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              One Of The Leading Auditing & Accounting Firms In Dubai, UAE
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8">
              With years of experience and a dedicated team of professionals, we provide comprehensive auditing and accounting services to businesses across Dubai and the UAE.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700">Expert Financial Consultation</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700">Professional Auditing Services</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700">Comprehensive Accounting Solutions</p>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="order-1 md:order-2 relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full mb-6 md:mb-0">
            <Image
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/india_office_open_pr-1-1.webp"
              alt="Leading Auditing Firm in Dubai"
              fill
              className="object-cover rounded-lg shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 