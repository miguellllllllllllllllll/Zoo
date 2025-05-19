import React, { useState } from "react";

export default function Ticket() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [total, setTotal] = useState(null);

  const ADULT_PRICE = 20;
  const CHILD_PRICE = 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = adults * ADULT_PRICE + children * CHILD_PRICE;
    setTotal(price);
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Zoo Ticket Booking
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Adult Tickets (€20 each)
            </label>
            <input
              type="number"
              min="0"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Child Tickets (€10 each)
            </label>
            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
          >
            Calculate Total
          </button>
        </form>
        {total !== null && (
          <div className="mt-6 text-center text-lg font-semibold">
            Total: €{total}
          </div>
        )}
      </div>
    </div>
  );
}
