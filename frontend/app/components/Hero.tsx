import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center py-24 px-6 text-center bg-[url('/share-bg.avif')] bg-cover bg-center bg-no-repeat text-white">
      
      {/* Dark Overlay for Text Readability (Updated for Cyan Theme) */}
      <div className="absolute inset-0 bg-[#070b19]/85 backdrop-blur-[2px] pointer-events-none" />
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* 3-Column Layout: Left Text, Center Image, Right Text */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto w-full z-10">
        
        {/* Left Side */}
        <div className="text-left font-extrabold text-4xl md:text-5xl leading-tight">
          <h1 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
            LEARN<br />STOCK<br />MARKET
          </h1>
          <p className="text-cyan-400 text-sm mt-3 font-bold tracking-widest uppercase">WITH</p>
          <h2 className="text-2xl md:text-3xl text-white mt-1 font-bold">Bullfin Academy</h2>
        </div>

        {/* Center Image with Glowing Frame */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src="/bull-image.webp" 
              alt="Trading Bull" 
              className="relative rounded-2xl shadow-2xl w-full max-w-xs object-cover border-2 border-white/10 transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="text-right font-extrabold text-4xl md:text-5xl leading-tight">
          <h2 className="bg-gradient-to-l from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
            NISM<br />CERTIFIED<br />MENTORS
          </h2>
        </div>
      </div>

      {/* Subtitle aur Buttons */}
      <div className="mt-16 relative z-10">
        <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 shadow-lg px-6 py-2 rounded-full mb-8">
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wide">
            Bihar's Premier Trading Education Platform — <span className="text-cyan-400 font-bold">Bullfin Academy</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          
          {/* Enroll Now Button */}
          <Link href="#enroll">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
              Enroll Now →
            </button>
          </Link>

          {/* Explore Courses Button */}
          <Link href="/#courses">
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
              Explore Courses ↗
            </button>
          </Link>

          {/* Watch Live Classes Button */}
          <button className="bg-transparent border-2 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 px-8 py-3.5 rounded-full font-bold transition-all cursor-pointer">
            ▶ Watch Live Classes
          </button>
          
        </div>
      </div>

    </div>
  );
}