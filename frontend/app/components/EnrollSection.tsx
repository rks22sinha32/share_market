// app/components/EnrollSection.tsx
"use client";
import { useState } from "react";

export default function EnrollSection() {
  const [enrollData, setEnrollData] = useState({ name: "", email: "", phone: "", course: "" });
  const [enrollStatus, setEnrollStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEnrollChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEnrollData({ ...enrollData, [e.target.name]: e.target.value });
  };

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEnrollStatus("Submitting your request...");

    try {
      const res = await fetch("https://share-market-aizb.onrender.com/api/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enrollData),
      });
      if (res.ok) {
        setEnrollStatus("🎉 Enrollment successful! We will contact you shortly.");
        setEnrollData({ name: "", email: "", phone: "", course: "" });
      } else {
        setEnrollStatus("❌ Failed to submit request. Please try again.");
      }
    } catch (err) {
      setEnrollStatus("❌ Error connecting to server.");
    }
    setIsSubmitting(false);
  };

  return (
    <div id="enroll" className="py-16 px-4 bg-gray-50 flex justify-center w-full">
      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 w-full max-w-3xl">
        
        {/* Header Section Matches Screenshot */}
        <div className="text-center mb-10">
          <span className="bg-[#e8f5e9] text-[#003b22] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            TAKE ACTION
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003b22] mt-5">Enroll Now</h2>
          <p className="text-gray-400 text-sm mt-2">Start your professional trading journey at Bullfin Academy.</p>
        </div>

        <form onSubmit={handleEnrollSubmit} className="space-y-6">
          
          {/* Row 1: Name and Course (Like Screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">Your Name</label>
              <input required type="text" name="name" value={enrollData.name} onChange={handleEnrollChange} placeholder="e.g., Rahul Kumar" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-[#003b22] transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">Course Enrolled</label>
              <select required name="course" value={enrollData.course} onChange={handleEnrollChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-[#003b22] transition-colors">
                <option value="" disabled>-- Choose a Course --</option>
                <option value="Price Action Mastery">Price Action Mastery</option>
                <option value="Options Strategies">Options Strategies</option>
                <option value="Algorithmic Trading">Algorithmic Trading</option>
                <option value="Investment & Wealth">Investment & Wealth</option>
              </select>
            </div>
          </div>

          {/* Row 2: Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
              <input required type="email" name="email" value={enrollData.email} onChange={handleEnrollChange} placeholder="e.g., rahul@example.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-[#003b22] transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
              <input required type="tel" name="phone" value={enrollData.phone} onChange={handleEnrollChange} placeholder="e.g., +91 98765 43210" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-[#003b22] transition-colors" />
            </div>
          </div>

          {/* Status Message */}
          {enrollStatus && (
            <div className={`text-sm font-bold text-center mt-2 ${enrollStatus.includes("❌") ? "text-red-500" : "text-[#003b22]"}`}>
              {enrollStatus}
            </div>
          )}

          {/* Submit Button Matches Screenshot */}
          <div className="pt-2">
            <button type="submit" disabled={isSubmitting} className="w-full bg-[#002B19] hover:bg-[#003b22] text-white font-bold py-4 rounded-xl uppercase tracking-widest text-[13px] shadow-md transition-all cursor-pointer">
              {isSubmitting ? "SUBMITTING..." : "SUBMIT ENROLLMENT LIVE"}
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}