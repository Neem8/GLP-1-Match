import React from 'react';

const PricingCard = () => {
  const dosages = ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg'];

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-4">
      <div className="bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg p-3 mb-4 relative">
        <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
          94 Match
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-blue-600">
            ✅
          </div>
          <h2 className="font-bold text-lg text-gray-900">Orderly Meds</h2>
        </div>
        <div className="flex space-x-2 mt-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Fast Sign-Up</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">New Customer Discount</span>
        </div>
        <div className="flex items-center space-x-1 mt-2">
          <span className="text-yellow-500 text-lg">⭐</span>
          <span className="text-sm font-semibold">4.9</span>
          <span className="text-xs text-gray-600">(338)</span>
        </div>
      </div>

      <div>
        <h3 className="bg-blue-900 text-white text-sm font-bold px-4 py-2 rounded-t">Tirzepatide</h3>
        <div className="border border-gray-300 rounded-b divide-y">
          {dosages.map((dose) => (
            <div key={dose} className="flex justify-between px-4 py-2 text-sm">
              <span>{dose}</span>
              <span className="font-semibold text-gray-700">$166</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="text-2xl font-bold text-gray-800">$166</div>
        <p className="text-sm text-gray-500">Starting price per month</p>
        <div className="mt-3 flex justify-center gap-2">
          <button className="bg-blue-700 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-blue-800">
            Visit Provider
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100">
            More Info
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">New pricing is based on the Simple Start 3-month option.</p>
      </div>
    </div>
  );
};

export default PricingCard;
