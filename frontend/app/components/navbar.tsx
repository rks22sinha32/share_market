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
          {/* Professional Circular Badge Design */}
          <img
            src="/bullfin-new-logo.png"
            alt="Bullfin Academy Logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white object-contain p-1 shadow-md border border-gray-200"
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

      {/* 3. Premium Contact Button */}
      <Link href="/contact">
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 font-extrabold px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer">
          Contact Us
        </button>
      </Link>

    </nav>
  );
}