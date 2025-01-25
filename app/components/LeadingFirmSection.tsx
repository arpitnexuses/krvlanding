import Image from 'next/image'

export default function LeadingFirmSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              One Of The Leading Auditing & Accounting Firms In Dubai, UAE
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              With years of experience and a dedicated team of professionals, we provide comprehensive auditing and accounting services to businesses across Dubai and the UAE.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <p className="text-gray-700">Expert Financial Consultation</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <p className="text-gray-700">Professional Auditing Services</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <p className="text-gray-700">Comprehensive Accounting Solutions</p>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/india_office_open_pr-1-1.webp"
              alt="Leading Auditing Firm in Dubai"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 