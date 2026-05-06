import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Factory } from 'lucide-react';

const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="py-24 relative z-10 border-y border-white/5 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-electric-blue" />
              <span className="text-electric-blue font-semibold tracking-wider uppercase text-sm">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Merging 40 Years of <span className="text-slate-400">Manufacturing Heritage</span> with 2026 Supply Chain Architecture.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Rooted in Kaithal's industrial heartland, Shiv Shakti Global combines decades of metallurgical expertise with modern digital integration. We don't just manufacture; we act as your strict technical quality gate in India.
            </p>
            
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <Factory className="text-slate-500 w-8 h-8" />
                <span className="text-2xl font-bold text-white">1986</span>
                <span className="text-sm text-slate-500">Established</span>
              </div>
              <div className="w-px bg-slate-800" />
              <div className="flex flex-col gap-2">
                <Globe2 className="text-electric-blue w-8 h-8" />
                <span className="text-2xl font-bold text-white">Tier-2</span>
                <span className="text-sm text-slate-500">Global Supplier</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden glass-card group"
          >
            {/* Placeholder for macro-photography or factory image */}
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
              <div className="text-center p-8">
                <Factory className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                <p className="text-slate-500 font-mono text-sm">[ Placeholder: High-res macro photography of CNC machined parts or facility ]</p>
              </div>
            </div>
            {/* Overlay gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 to-transparent group-hover:from-slate-950/60 transition-all duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
