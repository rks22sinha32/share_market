// app/admin/page.tsx
"use client";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [enrollments, setEnrollments] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Password verify karne ka function (Environment Variable se check karega)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      setErrorMsg("❌ Galat password! Kripya dobara koshish karein.");
    }
  };

  // Data fetch karne ka function
  const fetchAdminData = async () => {
    setLoading(true);
    try {
      const enrollRes = await fetch("http://localhost:8000/api/enrollments");
      const enrollData = await enrollRes.json();
      setEnrollments(enrollData);

      const reviewRes = await fetch("http://localhost:8000/api/reviews");
      const reviewData = await reviewRes.json();
      setReviews(reviewData);
    } catch (err) {
      console.error("Error fetching admin data:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    fetchAdminData();
  }, [isAuthenticated]);

  // Delete Enrollment Handler
  const handleDeleteEnrollment = async (id: number) => {
    if (!confirm("Kya aap sach mein is student enrollment को delete karna chahte hain?")) return;
    try {
      const res = await fetch(`http://localhost:8000/api/enrollments/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEnrollments(enrollments.filter((item: any) => item.id !== id));
      }
    } catch (err) {
      console.error("Error deleting enrollment:", err);
    }
  };

  // Delete Review Handler
  const handleDeleteReview = async (id: number) => {
    if (!confirm("Kya aap sach mein is review ko delete karna chahte hain?")) return;
    try {
      const res = await fetch(`http://localhost:8000/api/reviews/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setReviews(reviews.filter((rev: any) => rev.id !== id));
      }
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  // 1. Agar Admin login nahi hai, toh Password Screen dikhao
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 max-w-md w-full text-center">
          <div className="text-3xl mb-3">🔐</div>
          <h1 className="text-2xl font-extrabold text-[#002B19] mb-2">Admin Portal Login</h1>
          <p className="text-gray-500 text-xs mb-6">Enter your secret password to access student records securely.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter Admin Password"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002B19]"
              required
            />
            {errorMsg && <p className="text-red-500 text-xs font-semibold">{errorMsg}</p>}
            
            <button
              type="submit"
              className="w-full bg-[#002B19] hover:bg-green-900 text-white font-bold py-3 rounded-xl uppercase tracking-wider text-xs transition-all cursor-pointer"
            >
              Login to Dashboard
            </button>
          </form>
          <p className="text-[10px] text-gray-400 mt-4">Protected by Environment Variables (.env.local)</p>
        </div>
      </div>
    );
  }

  // 2. Agar Loading ho rahi hai
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg font-bold text-[#002B19] animate-pulse">Loading Secure Records...</div>
      </div>
    );
  }

  // 3. Agar Login successful hai, toh Dashboard dikhao
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Logout & Refresh options */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <span className="bg-[#e8f5e9] text-[#003b22] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              SECURE CONTROL PANEL
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#002B19] mt-2">Bullfin Academy Admin</h1>
            <p className="text-gray-500 text-sm mt-1">Live data securely fetched from your SQLite database.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchAdminData}
              className="bg-[#002B19] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-green-900 transition-all cursor-pointer"
            >
              🔄 Refresh
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-50 text-red-600 border border-red-200 font-bold px-4 py-2 rounded-xl text-xs hover:bg-red-100 transition-all cursor-pointer"
            >
              🔒 Logout
            </button>
          </div>
        </div>

        {/* Enrollments Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#002B19]">Student Enrollments</h2>
            <span className="bg-[#002B19] text-white text-xs font-bold px-3 py-1 rounded-full">
              {enrollments.length} Total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Student Name</th>
                  <th className="py-3 px-4">Email Address</th>
                  <th className="py-3 px-4">Phone Number</th>
                  <th className="py-3 px-4">Enrolled Course</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {enrollments.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-400 italic">No enrollments recorded yet.</td>
                  </tr>
                ) : (
                  enrollments.map((item: any, index: number) => (
                    <tr key={item.id || index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-gray-500">#{item.id}</td>
                      <td className="py-3.5 px-4 font-semibold text-gray-800">{item.name}</td>
                      <td className="py-3.5 px-4 text-gray-600">{item.email}</td>
                      <td className="py-3.5 px-4 text-gray-600">{item.phone}</td>
                      <td className="py-3.5 px-4">
                        <span className="bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-lg text-xs font-semibold">
                          {item.course}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => handleDeleteEnrollment(item.id)}
                          className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reviews Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#002B19]">Student Reviews & Feedback</h2>
            <span className="bg-[#002B19] text-white text-xs font-bold px-3 py-1 rounded-full">
              {reviews.length} Total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Course</th>
                  <th className="py-3 px-4">Rating</th>
                  <th className="py-3 px-4">Feedback Comment</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-400 italic">No reviews submitted yet.</td>
                  </tr>
                ) : (
                  reviews.map((rev: any, index: number) => (
                    <tr key={rev.id || index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-gray-500">#{rev.id}</td>
                      <td className="py-3.5 px-4 font-semibold text-gray-800">{rev.name}</td>
                      <td className="py-3.5 px-4 text-gray-600">{rev.course}</td>
                      <td className="py-3.5 px-4 text-amber-500 font-bold">
                        {"★".repeat(rev.rating)} <span className="text-gray-400 font-normal text-xs">({rev.rating}/5)</span>
                      </td>
                      <td className="py-3.5 px-4 text-gray-600 italic">"{rev.comment}"</td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => handleDeleteReview(rev.id)}
                          className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}