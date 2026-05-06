import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import Heritage from './components/Heritage';
import ProductFocus from './components/ProductFocus';
import Logistics from './components/Logistics';
import RFQPortal from './components/RFQPortal';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-electric-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechnicalCapabilities />
        <Heritage />
        <ProductFocus />
        <Logistics />
        <RFQPortal />
      </main>
      
      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>&copy; 2026 Shiv Shakti Global (SSG). All rights reserved. ISO 9001:2015 Certified.</p>
      </footer>
    </div>
  );
}

export default App;
