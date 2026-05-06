import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Shield } from 'lucide-react';

const Logistics: React.FC = () => {
  return (
    <section id="logistics" className="py-24 relative z-10 border-y border-white/5 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Logistics Architecture</h2>
          <p className="text-slate-400 text-lg">
            Seamless integration into your localized supply chain. We handle the complexity of international freight so you don't have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <MapPin className="w-10 h-10 text-electric-blue mb-6" />
            <h3 className="text-xl font-semibold mb-2 text-white">Manufacturing Base</h3>
            <p className="text-slate-300 font-medium mb-1">Kaithal, Haryana (India)</p>
            <p className="text-slate-500 text-sm">40-year legacy facility optimized for agile batching and stringent quality control.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 border-electric-blue/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-blue"></span>
              </span>
            </div>
            <MapPin className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-semibold mb-2 text-white">Global Tech Hub</h3>
            <p className="text-slate-300 font-medium mb-1">Gurugram, NCR (India)</p>
            <p className="text-slate-500 text-sm">Sales, engineering support, and supply chain management center.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 md:col-span-2 lg:col-span-1 bg-electric-blue/5 border-electric-blue/20"
          >
            <Truck className="w-10 h-10 text-electric-blue mb-6" />
            <h3 className="text-xl font-semibold mb-2 text-white">DDP Delivery</h3>
            <p className="text-slate-300 font-medium mb-3">Germany & South Korea</p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Shield className="w-4 h-4 text-electric-blue" />
              <span>Delivered Duty Paid</span>
            </div>
            <p className="text-slate-500 text-sm mt-3 border-t border-slate-700 pt-3">
              Zero customs friction. We deliver directly to your assembly line with all duties and clearance handled.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
