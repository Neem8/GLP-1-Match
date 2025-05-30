import PricingCard from "./PricingCard";
import { NavLink } from "react-router-dom";


const ProviderResults = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 p-6 bg-white shadow">
        <h2 className="font-semibold text-lg mb-4">Provider</h2>
        <div className="space-y-2 mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            <span>Verified</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Accepting New Patients</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Ships to All 50 States</span>
          </label>
        </div>

        <h2 className="font-semibold text-lg mb-4">Meds</h2>
        <div className="space-y-2 mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Semaglutide</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            <span>Tirzepatide</span>
          </label>
        </div>

        <h2 className="font-semibold text-lg mb-4">Pharmacies</h2>
        <div className="space-y-2 mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>503B Pharmacies Only</span>
          </label>
        </div>

        <h2 className="font-semibold text-lg mb-2">Filter by Price</h2>
        <input type="range" min="0" max="1000" className="w-full" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <NavLink  className="text-blue-500 hover:underline mb-2" to={'/'}>← Back to search</NavLink>
          <h1 className="text-2xl font-bold">Provider results</h1>
          <p className="text-gray-500">6 results for "Tirzepatide"</p>
        </div>

        {/* Search bar */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </main>
    </div>
  );
};

export default ProviderResults;
