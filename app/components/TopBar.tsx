import Image from 'next/image';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center">
        <div className="flex items-center h-full py-2">
          {/* KRV Logo */}
          <div className="h-full w-auto relative">
            <Image
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/KRV/krv-logo-color%20(2).png"
              alt="KRV Auditing Logo"
              width={100}
              height={28}
              priority
              className="object-contain h-full w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 