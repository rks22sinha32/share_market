export default function Mentors() {
  // Mentors ka data array
  const mentorsList = [
    {
      badge: "FOUNDER",
      initials: "KK",
      name: "Kshitiz kumar",
      role: "Director",
      experience: "7+ YEARS EXPERIENCE IN TRADING & MENTORSHIP",
      desc: "Market structure, price action & risk management"
    },
    {
      badge: "CO-FOUNDER",
      initials: "GK",
      name: "Guddu Kumar",
      role: "CO-FOUNDER",
      experience: "2+ YEARS EXPERIENCE IN MENTORSHIP"
    },
    {
      badge: "MANAGER",
      initials: "AP",
      name: "Anish Pandey",
      role: "MANAGER",
      experience: "1+ YEARS EXPERIENCE"
    },
    {
      badge: "EQUITY MARKET",
      initials: "RK",
      name: "Rakesh Kumar",
      role: "EQUITY MARKET",
      experience: "3+ YEARS EXPERIENCE"
    }
  ];

  return (
    // ✨ FIX: Yahan 'id="mentors"' add kar diya hai!
    <div id="mentors" className="py-20 px-8 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            THE DESK
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003b22] mt-4 mb-4">
            Our Mentors <br/> trade every single day
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
             NISM-certified mentors and a quant research team — the same people on our posters are the ones beside your terminal.
          </p>
        </div>

        {/* Mentors Grid with .map() */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentorsList.map((mentor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              {/* Badge */}
              <div className="w-full flex justify-end mb-4">
                <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {mentor.badge}
                </span>
              </div>

              {/* Avatar Initials Circle */}
              <div className="w-24 h-24 rounded-full bg-[#003b22] text-white flex items-center justify-center text-3xl font-bold mb-6 shadow-md group-hover:scale-105 transition-transform">
                {mentor.initials}
              </div>

              {/* Mentor Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
              <p className="text-gray-600 font-medium text-sm mb-4">{mentor.role}</p>
              
              <div className="bg-yellow-50/60 rounded-xl p-3 w-full mb-4">
                <p className="text-[11px] font-bold text-yellow-800 tracking-wider">
                  {mentor.experience}
                </p>
              </div>

              <p className="text-gray-500 text-xs mt-auto">
                {mentor.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}