"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  // Yeh hook check karta hai ki user abhi kis page par hai
  const pathname = usePathname();

  // Smooth scroll function
  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault(); // Default jump ko roko
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smoothly upar slide karo
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 shadow-sm">

      {/* 1. Premium Logo Section - onClick add kiya hai */}
      <Link href="/" onClick={handleHomeClick} className="text-decoration-none outline-none">
        {/* Logo Section */}
        <div className="flex items-center gap-3 md:gap-4">
         {/* Professional Circular Badge Design (White background aur border hata diya gaya hai) */}
          <img
            src="/bull-image.png"
            alt="Bullfin Academy Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />

          {/* Yahan humne flex-col laga diya hai taaki text ek ke neeche ek aaye */}
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-extrabold text-[#002B19] tracking-tight leading-none mb-1">
              Bullfin Academy
            </span>
            <span className="text-[10px] md:text-[11px] font-bold text-amber-500 tracking-[0.25em] leading-none">
              LEARN TRADE GROW
            </span>
          </div>
        </div>
      </Link>

      {/* 2. Navigation Links with Hover Animations */}
      <div className="hidden md:flex gap-8 text-sm font-bold text-gray-500 uppercase tracking-wider">
        {/* Home link par bhi onClick add kiya hai */}
        <Link href="/" onClick={handleHomeClick} className="hover:text-[#003b22] transition-colors duration-200 cursor-pointer">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#003b22] transition-colors duration-200 cursor-pointer">
          About
        </Link>
        {/* ✨ FIX: Courses ko span se Link mein badal kar id link de dijiye */}
        <Link href="/#courses" className="hover:text-[#003b22] transition-colors duration-200 cursor-pointer">
          Courses
        </Link>
        {/* ✨ FIX: Mentors ko span se Link mein badal diya aur href="/#mentors" laga diya */}
        <Link href="/#mentors" className="hover:text-[#003b22] transition-colors duration-200 cursor-pointer">
          Mentors
        </Link>
        {/* Navbar mein "Review" link ko aise update kiya gaya hai: */}
        <Link href="/#reviews" className="hover:text-[#003b22] transition-colors duration-200 cursor-pointer">
          Review
        </Link>
      </div>

      {/* 3. Premium Contact Button & WhatsApp Logo */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* ✨ Yahan aapka WhatsApp Icon add kiya gaya hai */}
        <a
          href="https://wa.me/917903190305?text=Hello%20BULLFIN%20ACADEMY,%20I%20want%20to%20know%20more%20about%20your%20courses!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white border border-green-500/20 hover:border-green-500 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:scale-110 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>

        {/* Aapka Contact Us Button */}
        <Link href="/contact">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 font-extrabold px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>

    </nav>
  );
}