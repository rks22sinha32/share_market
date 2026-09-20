"use client"; // API call karne ke liye yeh zaroori hai
import { useState, useEffect } from "react";

// Ek type define kar rahe hain taaki TypeScript ko pata ho data kaisa dikhega
type Course = {
  level: string;
  duration: string;
  title: string;
  desc: string;
  topics: string[];
};

export default function Courses() {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect se API Call
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch("http://localhost:8000/api/courses");
        const data = await response.json();
        setCourseList(data);
        setLoading(false);
      } catch (error) {
        console.error("Courses ka data nahi aaya:", error);
      }
    }
    fetchCourses();
  }, []);

  return (
    // ✨ Yahan id="courses" add kar diya gaya hai!
    <div id="courses" className="py-20 px-8 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003b22] mt-6 mb-4 leading-tight">
            Nine programs. One <br/> outcome: independence.
          </h2>
          <p className="text-gray-500 text-lg">
            From your first candlestick to your first deployed algo — every course is a floating module in one connected journey.
          </p>
        </div>

        {/* Loading State dikhayein jab tak data na aaye */}
        {loading ? (
          <div className="text-center text-xl text-gray-500 font-bold py-10">
            Loading Courses from Backend...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* API se aaye data ko .map() kar rahe hain */}
            {courseList.map((course, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-[#003b22] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-yellow-600 font-semibold text-sm flex items-center gap-1">
                    ⏱ {course.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-500 mb-6 text-sm">{course.desc}</p>
                
                <div className="flex-grow space-y-3 mb-8">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <span className="text-green-500">📈</span> {topic}
                    </div>
                  ))}
                </div>
                
                <button className="text-[#003b22] font-bold text-left group-hover:text-green-600 transition-colors flex items-center gap-2 mt-auto">
                  View Program <span>→</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}