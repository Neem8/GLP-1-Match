import React from 'react';

export default function ProviderSearch() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
      <h1 className="text-2xl font-semibold text-center mb-2">Find a GLP-1 Telehealth Provider</h1>
      <p className="text-center text-gray-500 mb-6">Compare providers based on price, service, and more.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="state" className="block text-gray-700 mb-1">State</label>
          <select id="state" className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Missouri</option>
          </select>
        </div>
        <div>
          <label htmlFor="medication" className="block text-gray-700 mb-1">Medication</label>
          <select id="medication" className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Semaglutide</option>
          </select>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="verified" className="mr-2" defaultChecked />
        <label htmlFor="verified" className="text-sm text-gray-700 flex items-center">
          Verified Providers Only
          <span className="ml-1 text-blue-500 cursor-pointer" title="Only show verified providers">ⓘ</span>
        </label>
      </div>
      <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">Find me a Provider</button>
    </div>
  );
}
