'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#003D5C] text-white">
      {/* Main CTA Section */}
      <div className="pt-10 sm:pt-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-semibold mb-4 sm:mb-6 max-w-[800px]">
            Let Our Experts Handle Your VAT, Tax, and Accounting Needs in Dubai
          </h2>
          <p className="text-lg sm:text-2xl text-gray-200 mb-8 sm:mb-12">
            We will take care of your VAT Accounting and take the load off you.
          </p>
          <Link
            href="https://bit.ly/4apm28j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#10B981] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl hover:bg-[#059669] transition-all duration-300 hover:scale-105 hover:shadow-lg group w-full sm:w-auto justify-center sm:justify-start"
          >
            Schedule a Call
            <span className="text-xl sm:text-2xl transform group-hover:translate-x-2 group-hover:ml-1 transition-all duration-300">→</span>
          </Link>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-[#ffffff33]">
        <div className="max-w-[1400px] mx-auto px-4 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Contact Us</h3>
              <Link 
                href="mailto:linzy@krvauditing.co"
                className="text-gray-200 hover:text-white underline decoration-1 underline-offset-4 text-sm sm:text-base"
              >
                linzy@krvauditing.co
              </Link>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Connect</h3>
              <div className="flex gap-4 sm:gap-8">
                <Link 
                  href="https://www.linkedin.com/company/krvauditing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white underline decoration-1 underline-offset-4 text-sm sm:text-base"
                >
                  LinkedIn
                </Link>
                <Link 
                  href="https://facebook.com/krvauditing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white underline decoration-1 underline-offset-4 text-sm sm:text-base"
                >
                  FaceBook
                </Link>
                <Link 
                  href="https://twitter.com/krvauditing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white underline decoration-1 underline-offset-4 text-sm sm:text-base"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 