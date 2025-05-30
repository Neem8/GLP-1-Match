import Navbar from './Navbar';
import Footer from './Footer';
import ProviderResults from './ProviderResults';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
// import ProviderResults from './ProviderResults';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<ProviderResults />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}