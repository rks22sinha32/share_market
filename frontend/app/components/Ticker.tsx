"use client"; 
import { useState, useEffect } from "react";

type Stock = {
  name: string;
  price: string;
  change: string;
  up: boolean;
};

export default function Ticker() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchLiveStocks() {
      try {
        // ✨ Yahan IP address theek kar diya hai
        const response = await fetch("http://localhost:8000/api/live-stocks");
        
        if (!response.ok) {
          throw new Error("Server ne data nahi diya");
        }

        const liveData = await response.json();
        setStocks(liveData);
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setError(true);
        setLoading(false);
      }
    }

    fetchLiveStocks();
  }, []);

  if (loading) {
    return (
      // ✨ Yahan fixed aur z-[100] add kar diya hai
      <div className="ticker-wrap fixed top-0 left-0 w-full z-[100] bg-[#003b22] text-white text-center text-sm font-bold py-2">
        Connecting to Live Market...
      </div>
    );
  }

  if (error) {
    return (
      // ✨ Yahan fixed aur z-[100] add kar diya hai
      <div className="ticker-wrap fixed top-0 left-0 w-full z-[100] bg-[#003b22] text-red-400 text-center text-sm font-bold py-2">
        Failed to connect. Please check if backend is running!
      </div>
    );
  }

  return (
    // ✨ Yahan fixed aur z-[100] add kar diya hai
    <div className="ticker-wrap fixed top-0 left-0 w-full z-[100] bg-[#003b22]">
      <div className="ticker">
        {stocks.map((stock, index) => (
          <div key={index} className="ticker__item">
            <span style={{ fontWeight: "bold", color: "white" }}>{stock.name}</span>{" "}
            <span style={{ color: "#d1d5db" }}>{stock.price}</span>{" "}
            <span style={{ color: stock.up ? "#4ade80" : "#f87171" }}>
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}