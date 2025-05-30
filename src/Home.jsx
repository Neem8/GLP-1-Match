import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full">
          <div className="bg-gradient-to-r from-teal-200 to-cyan-200 h-3 rounded-t-lg -mt-8 mb-6"></div>
          <h1 className="text-2xl font-bold text-center mb-2">Find a GLP-1 Telehealth Provider</h1>
          <p className="text-center text-gray-500 mb-6">
            Compare providers based on price, service, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none">
              <option>Select State</option>
              <option value={'California'}>California</option>
              <option value={'Texas'}>Texas</option>
              <option value={'New York'}>New York</option>
            </select>
            <select className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none">
              <option>Select Medication</option>
              <option value={'Semaglutide'}>Semaglutide</option>
              <option value={'Trizepatide'}>Tirzepatide</option>
            </select>
          </div>

          <label className="flex items-center gap-2 mb-6">
            <input type="checkbox" defaultChecked />
            <span className="text-gray-700">Verified Providers Only</span>
            <span className="text-gray-400 cursor-pointer" title="Only show verified providers">ⓘ</span>
          </label>

          <div className="text-center">
            <NavLink to="/providers">
            <div className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold text-center inline-block">
                Find me a Provider
            </div>
            </NavLink>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-6 px-8 flex justify-between text-sm">
        <div>
          <div className="font-bold">GLP-1 Match</div>
          <p className="text-gray-400">© 2025 GLP-1 Match. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Find Providers</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">Disclosures</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
