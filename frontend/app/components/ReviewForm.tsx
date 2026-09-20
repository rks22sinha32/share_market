"use client";
import { useState } from "react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          course,
          rating: parseInt(rating),
          comment,
        }),
      });

      if (response.ok) {
        alert("Thank you! Your review has been published live.");
        setName("");
        setCourse("");
        setComment("");
        window.location.reload(); // Page refresh to instantly show the new review
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-white flex justify-center items-center">
      <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-xl border border-gray-200 max-w-2xl w-full">
        <div className="text-center mb-8">
          <span className="text-[#003b22] bg-green-50 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-green-200">
            SHARE YOUR JOURNEY
          </span>
          <h3 className="text-3xl font-extrabold text-[#003b22] mt-3">Leave Your Review</h3>
          <p className="text-gray-500 text-sm mt-1">Help future traders by sharing your experience at Bullfin Academy.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003b22] text-sm text-gray-900 placeholder-gray-500"
                placeholder="e.g., Rahul Kumar"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Course Enrolled</label>
              <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003b22] text-sm text-gray-900 placeholder-gray-500"
                placeholder="e.g., Price Action Mastery"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003b22] text-sm font-medium text-gray-900"
            >
              <option value="5">★★★★★ - Excellent (5/5)</option>
              <option value="4">★★★★☆ - Very Good (4/5)</option>
              <option value="3">★★★☆☆ - Good (3/5)</option>
              <option value="2">★★☆☆☆ - Fair (2/5)</option>
              <option value="1">★☆☆☆☆ - Poor (1/5)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Your Experience & Feedback</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003b22] text-sm text-gray-900 placeholder-gray-500"
              placeholder="Write how the modules helped your trading journey..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#003b22] text-white font-bold py-4 px-6 rounded-xl hover:bg-green-900 transition-all shadow-md text-sm tracking-wide uppercase"
          >
            {loading ? "Publishing Review..." : "Submit Review Live"}
          </button>
        </form>
      </div>
    </section>
  );
}