import Navbar from './Navbar';
import Footer from './Footer';
import ProviderSearch from './ProviderSearch';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-10 px-4">
        <ProviderSearch />
      </main>
      <Footer />
    </div>
  );
}