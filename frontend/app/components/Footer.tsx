// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#002B19] text-gray-300 py-10 px-4 md:px-8 border-t-[4px] border-[#ffc107]">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        
       {/* Pillar 1: Brand & Mission */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3 flex items-center gap-2">
            {/* ✨ Yahan emoji ki jagah img tag laga diya gaya hai */}
            <img src="/new-bull-1.png" alt="Bull Icon" className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md" />
            Bullfin <span className="text-[#ffc107]">Academy</span>
          </h2>
          <p className="text-xs text-gray-400 leading-snug pr-4">
            Bihar's Premier Trading Education Platform. We build independent, professional traders through NISM-certified mentorship and strict risk management.
          </p>
        </div>

        {/* Pillar 2: Quick Links */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-[#ffc107] transition-colors">▸ Home</Link></li>
            <li><Link href="/#courses" className="hover:text-[#ffc107] transition-colors">▸ Our Courses</Link></li>
            <li><Link href="/about" className="hover:text-[#ffc107] transition-colors">▸ About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#ffc107] transition-colors">▸ Contact & FAQ</Link></li>
          </ul>
        </div>

        {/* Pillar 3: Contact Details */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Contact Us</h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-[#ffc107]">📍</span>
              <span className="text-gray-400 leading-snug">Gandhi Path, near Goriyamath Mandir, above Bank of Baroda, Jakkanpur, Patna 800001</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#ffc107]">📞</span>
              <span className="text-gray-400">+91 7903190305</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#ffc107]">✉️</span>
              <span className="text-gray-400">bullfinacademy@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Pillar 4: Action */}
        <div>
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">NISM Certified</h3>
          <p className="text-xs text-gray-400 mb-4 leading-snug">
            Learn from mentors certified by the National Institute of Securities Markets.
          </p>
          <div className="mt-6 pt-5 border-t border-gray-700/50">
            <p className="text-[10px] text-gray-500 leading-relaxed pr-2">
              <span className="font-bold text-[#ffc107]">⚠️ Risk Disclaimer:</span> Trading involves substantial risk of loss and is not suitable for every investor. Bullfin Academy provides educational content only.
            </p>
          </div>
        </div>
      </div>

      {/* Divider & Disclaimer */}
      <div className="max-w-[90rem] mx-auto border-t border-gray-700/50 mt-8 pt-5">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Bullfin Trading Academy. All rights reserved.</p>
          
          <div className="flex justify-center md:justify-end gap-4 text-xs text-slate-500">
              <Link href="#" className="hover:text-white transition">Designed by Rahul</Link>
              <Link href="#" className="hover:text-white transition">© Contact 7909027305</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

