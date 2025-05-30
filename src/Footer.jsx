import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-sm p-4 mt-8">
      <div className="flex justify-between items-center flex-wrap">
        <div className="mb-2">© 2025 GLP-1 Match. All rights reserved.</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">Disclosures</a>
        </div>
      </div>
    </footer>
  );
}