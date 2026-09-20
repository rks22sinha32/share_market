// app/page.tsx
import Hero from "./components/Hero";
import Courses from "./components/courses"; 
import Mentors from "./components/mentor";
import Testimonials from "./components/Testimonials"; 
import ReviewForm from "./components/ReviewForm";
import EnrollSection from "./components/EnrollSection"; 

export default function Home() {
  return (
    <main className="flex-grow pb-24 bg-gray-50"> 
      <Hero />
      <Courses /> 
      <Mentors />
      <Testimonials /> 
      
      {/* ✨ PREMIUM SIDE-BY-SIDE LAYOUT WITH DESIGN EFFECT ✨ */}
      <div className="max-w-[95rem] mx-auto w-full px-4 py-8 overflow-hidden">
        
        {/* lg:grid-cols-[1fr_auto_1fr] ka matlab: Left Form, Beech me thodi jagah (auto), Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch justify-center gap-8 lg:gap-0 relative">
          
          {/* ================= LEFT SIDE: REVIEW FORM ================= */}
          <div className="w-full">
            <ReviewForm />
          </div>
          
          {/* ================= CENTER: DESIGN EFFECT DIVIDER ================= */}
          {/* 1. Desktop ke liye Vertical Line + Badge */}
          <div className="hidden lg:flex flex-col items-center justify-center px-4 relative z-10">
            {/* Fading Gradient Line */}
            <div className="w-[2px] h-3/4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            
            {/* Center Floating Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-100 shadow-xl rounded-full p-2 flex items-center justify-center animate-pulse">
               <div className="bg-gradient-to-br from-[#003b22] to-green-900 text-yellow-400 w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-inner text-xl">
                  ✦
               </div>
            </div>
          </div>
          
          {/* 2. Mobile ke liye Horizontal Line (Jo desktop par hide rahegi) */}
          <div className="lg:hidden flex items-center justify-center py-4 w-full">
             <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* ================= RIGHT SIDE: ENROLL FORM ================= */}
          <div className="w-full">
            <EnrollSection />
          </div>

        </div>
      </div>
     
    </main>
  );
}