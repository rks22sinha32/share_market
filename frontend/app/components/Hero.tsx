import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center bg-white">
      
      {/* 3-Column Layout: Left Text, Center Image, Right Text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto w-full">
        
        {/* Left Side */}
        <div className="text-left font-extrabold text-4xl md:text-5xl text-[#003b22] leading-tight">
          <h1>LEARN<br />STOCK<br />MARKET</h1>
          <p className="text-gray-400 text-lg mt-2 font-medium tracking-widest">WITH</p>
          <h2>Bullfin Academy</h2>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img 
            src="/bull-image.webp" 
            alt="Trading Bull" 
            className="rounded-2xl shadow-2xl w-full max-w-xs object-cover border-4 border-gray-100 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side */}
        <div className="text-right font-extrabold text-4xl md:text-5xl text-[#003b22] leading-tight">
          <h2><br />NISM<br />CERTIFIED<br />MENTORS</h2>
        </div>
      </div>

      {/* Subtitle aur Buttons */}
      <div className="mt-16">
        <p className="text-gray-500 mb-8 text-lg font-medium">
          Bihar's Premier Trading Education Platform — Bullfin Academy.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          
          {/* ✨ YAHAN UPDATE KIYA HAI: Seedha /enroll page par jayega */}
          <Link href="#enroll">
            <button className="bg-[#ffc107] hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold shadow-md transition-all transform hover:-translate-y-1 cursor-pointer">
              Enroll Now →
            </button>
          </Link>

          {/* Explore Courses Button */}
          <Link href="/#courses">
            <button className="bg-[#003b22] hover:bg-green-900 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all transform hover:-translate-y-1 cursor-pointer">
              Explore Courses ↗
            </button>
          </Link>

          {/* Watch Live Classes Button */}
          <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all cursor-pointer">
            ▶ Watch Live Classes
          </button>
          
        </div>
      </div>

    </div>
  );
}