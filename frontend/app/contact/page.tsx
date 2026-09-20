// app/contact/page.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "Who can join these courses?",
      answer: "Anyone who wants to build a serious career in the share market, from college students to working professionals, can join our academy."
    },
    {
      question: "Do I need prior experience?",
      answer: "No. We have courses for complete beginners as well as advanced traders."
    },
    {
      question: "Are these classes available online?",
      answer: "Yes, we offer both interactive online live sessions and offline classroom training at our Patna desk."
    },
    {
      question: "Will I get practical training?",
      answer: "Absolutely! Every student gets live market terminal training and real-time chart analysis."
    },
    {
      question: "Do you help with NISM certification?",
      answer: "Yes, our curriculum is structured to help you easily clear NISM certifications and become a certified professional."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0b1329] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Back to Home Link */}
        <Link href="/" className="text-yellow-400 hover:underline text-sm font-semibold mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Get in Touch</h1>
        <p className="text-gray-400 mb-12">Have questions or ready to enroll? Reach out to us or drop a message below!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Info & Map */}
          <div className="space-y-8">
            <div className="bg-[#131f38] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Visit Us</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Bullfin Trading Academy | Share Market Education, Patna, Bihar
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mt-2">
                Gandhi Path, near Goriyamath Mandir, above Bank of Baroda, Jakkanpur, Gardanibagh, Patna, Bihar 800001
              </p>
            </div>

            <div className="bg-[#131f38] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Contact Info</h3>
              <p className="text-gray-300 text-sm">📞 +91 7903190305</p>
              <p className="text-gray-300 text-sm">📞 +91 6200743013</p>
              <p className="text-gray-300 text-sm mt-1">✉️ bullfinacademy@gmail.com</p>
            </div>

              {/* Interactive Google Map Card */}

            <div className="bg-[#131f38] p-4 rounded-2xl border border-gray-800 overflow-hidden shadow-lg">

              <div className="flex justify-between items-center mb-3">

                <span className="text-sm font-bold text-gray-300">Location Map</span>

                <a

                  href="https://maps.app.goo.gl/3nkpDiaoKRw5DfQF7"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="text-yellow-400 text-xs font-bold hover:underline flex items-center gap-1"

                >

                  Open in Maps ↗

                </a>

              </div>

              <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-700">

                <iframe

                  title="Bullfin Trading Academy Location Map"

                  src="https://maps.google.com/maps?q=Bullfin+Trading+Academy+Patna&t=&z=16&ie=UTF8&iwloc=&output=embed"

                  width="100%"

                  height="100%"

                  style={{ border: 0 }}

                  allowFullScreen={false}

                  loading="lazy"

                ></iframe>

              </div>

            </div>

          </div>

          {/* Right Side: Interactive FAQ Accordion */}
          <div className="bg-[#131f38] p-8 rounded-3xl border border-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="overflow-hidden rounded-xl border border-gray-800 transition-all">
                    {/* FAQ Header Button */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full flex items-center justify-between p-4 text-left font-bold text-sm transition-colors cursor-pointer ${
                        isOpen ? 'bg-[#003b22] text-white' : 'bg-[#101b33] text-gray-200 hover:bg-[#152342]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${isOpen ? 'bg-white text-[#003b22]' : 'bg-[#003b22] text-white'}`}>
                          {isOpen ? '−' : '+'}
                        </span>
                        <span>{faq.question}</span>
                      </div>
                    </button>

                    {/* FAQ Answer Body */}
                    {isOpen && (
                      <div className="p-4 bg-[#0b1329] text-gray-300 text-sm border-t border-gray-800 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}