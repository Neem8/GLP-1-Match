import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-semibold text-blue-800">GLP-1 Match</div>
      <div className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">Find Providers</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a>
      </div>
    </nav>
  );
}