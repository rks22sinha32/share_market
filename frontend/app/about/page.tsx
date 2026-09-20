export default function AboutPage() {
  return (
    <main className="flex-col items-center py-20 px-8 bg-gray-50 flex-grow">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Top Section: Who We Are */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#003b22] mb-4">
            ABOUT Bullfin Academy
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to <span className="font-bold text-[#003b22]">Bullfin Academy</span> — your trusted destination for stock market education. Whether you're just starting out or looking to sharpen your trading skills, we provide structured learning, expert mentorship, and real-world strategies to help you grow financially strong and independent.
          </p>
        </div>

        {/* CSS Grid Section: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-[#003b22] hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-extrabold text-[#003b22] mb-4">OUR MISSION</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To turn market beginners into confident investors and skilled traders by offering complete stock market learning, technical & fundamental analysis, and job-oriented certification.
            </p>
            <div className="bg-green-50 p-4 rounded-xl">
              <p className="text-[#003b22] font-semibold italic">
                "We focus on real-world application, not just theory — giving our students the tools and mindset to succeed in live markets."
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-[#ffc107] hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-extrabold text-[#003b22] mb-4">OUR VISION</h2>
            <p className="text-gray-600 leading-relaxed">
              To make stock market education accessible to every Indian — from students to professionals — and create a financially literate nation. We envision a future where every individual is empowered to grow, invest, and secure their future with knowledge, confidence, and discipline in financial decision-making.
            </p>
          </div>

        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-center text-[#003b22] mb-10">
            WHY CHOOSE US?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* List Items */}
            {[
              { title: "Most Trusted in Bihar", desc: "Over 2 years of legacy and 2,000+ success stories." },
              { title: "Expert Faculty & Industry Mentors", desc: "Learn from experienced market professionals who practice what they teach." },
              { title: "Practical Approach", desc: "Live trading, real-time analysis, and market exposure." },
              { title: "Flexible Learning", desc: "Online and offline modes to suit your schedule." },
              { title: "Personalized Guidance", desc: "Doubt-clearing sessions and one-on-one mentorship." },
              { title: "Career-Oriented Curriculum", desc: "From knowledge to certification and beyond." }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all cursor-default">
                {/* Green Check Icon */}
                <div className="flex-shrink-0 mt-1 bg-[#4ade80] text-[#003b22] rounded-full p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#003b22] text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Banner inspired by screenshot */}
        <div className="relative bg-gradient-to-r from-[#002b19] via-[#003b22] to-[#001f12] rounded-3xl p-10 md:p-12 overflow-hidden shadow-2xl border border-green-900/50">
          {/* Subtle background trading chart line design effect */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="bg-[#4ade80]/20 text-[#4ade80] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#4ade80]/30">
                Limited Seats Available
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Learn the Art of Smart Investing
              </h2>
              <p className="text-gray-300 text-sm md:text-base max-w-xl">
                Join our expert-led sessions and start building a strong foundation for lifelong financial success.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a 
                href="/contact" 
                className="inline-block bg-[#4ade80] hover:bg-[#22c55e] text-[#002b19] font-extrabold py-4 px-8 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 text-sm md:text-base uppercase tracking-wider text-center cursor-pointer"
              >
                Book Free Consultation ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}