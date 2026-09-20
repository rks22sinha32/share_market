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
  const [error, setError] = useState(false); // Naya: Error check karne ke liye

  useEffect(() => {
    async function fetchLiveStocks() {
      try {
        const response = await fetch("http://localhost:8000/api/live-stocks");
        
        // Agar response theek nahi aaya
        if (!response.ok) {
          throw new Error("Server ne data nahi diya");
        }

        const liveData = await response.json();
        setStocks(liveData);
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setError(true); // Error aane par error state true kar denge
        setLoading(false); // Aur loading band kar denge
      }
    }

    fetchLiveStocks();
  }, []);

  if (loading) {
    return (
      <div className="ticker-wrap text-white text-center text-sm font-bold">
        Connecting to Live Market...
      </div>
    );
  }

  // Agar gadbad hui toh yeh dikhega
  if (error) {
    return (
      <div className="ticker-wrap text-red-400 text-center text-sm font-bold">
        Failed to connect. Please check if backend is running!
      </div>
    );
  }

  return (
    <div className="ticker-wrap">
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