"use client";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ravi Shankar",
      course: "Price Action Mastery",
      rating: 5,
      comment: "I blew two accounts before Bullfin. The risk management module alone changed everything — I finally trade with a plan, not with hope."
    }
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data);
        }
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <div id="reviews" className="py-20 px-4 md:px-8 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            STUDENT EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003b22] mt-4 mb-3">
            Real students. Real journals.
          </h2>
        </div>

        {/* CSS Marquee Container */}
        <div className="relative w-full overflow-hidden">
          
          {/* Custom CSS for Infinite Marquee */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 35s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />

          <div className="animate-marquee gap-6 py-4">
            {/* ✨ Har item ke liye unique key generate karne ke liye unique identifier ya suffix use kiya hai */}
            {[...reviews, ...reviews].map((item, index) => (
              <div 
                key={`${item.id || item.name}-${index}`} 
                className="w-80 md:w-[350px] flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-grow">
                  <span className="text-yellow-500 text-4xl font-serif font-bold leading-none">“</span>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed whitespace-pre-wrap break-words">
                    {item.comment}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50">
                  <div className="text-yellow-400 text-sm mb-3 tracking-widest">
                    {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#003b22] text-white flex items-center justify-center font-bold text-xs shadow-inner shrink-0">
                      {item.name ? item.name.substring(0, 2).toUpperCase() : "ST"}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wide">{item.course}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}