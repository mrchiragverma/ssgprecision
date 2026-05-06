import React from 'react';
import { Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
    >
      {/* 2026 FTA Banner */}
      <div className="bg-electric-blue text-white text-xs md:text-sm py-2 px-4 text-center font-medium shadow-md">
        <span className="font-bold tracking-wide uppercase">2026 India-EU FTA Authorized Partner.</span> 
        <span className="opacity-90 ml-2 hidden md:inline">Leverage zero-duty access for 99% of our engineering catalog. Direct DDP delivery to Hamburg, Stuttgart, and Seoul.</span>
      </div>
      
      <div className="glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Hexagon className="w-8 h-8 text-electric-blue" />
            <span className="font-bold text-xl tracking-tight text-white">SSG<span className="text-slate-400">GLOBAL</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Capabilities', 'Heritage', 'Products', 'Logistics'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a 
              href="#rfq"
              className="bg-electric-blue hover:bg-electric-blue-hover text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,112,243,0.3)] hover:shadow-[0_0_25px_rgba(0,112,243,0.5)]"
            >
              Access RFQ Portal
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-slate-300 hover:text-white p-2">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
