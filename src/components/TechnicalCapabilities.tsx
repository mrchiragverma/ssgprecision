import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Crosshair, ShieldCheck, Settings } from 'lucide-react';

const TechnicalCapabilities: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="capabilities" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Capabilities</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Engineered to rigorous global standards. Our facility is optimized for the demanding requirements of the EV and heavy industrial sectors.
          </p>
        </div>

        <motion.div 
          className="bento-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Materials Card (Spans 2 columns on desktop) */}
          <motion.div variants={item} className="glass-card p-8 md:col-span-2 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
              <Layers className="text-electric-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Aerospace & EV Grade Materials</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                <span className="text-slate-300 font-medium">SS 316L (UNS S31603)</span> - Superior corrosion resistance
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                <span className="text-slate-300 font-medium">Titanium Grade 5</span> - High strength-to-weight ratio
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                <span className="text-slate-300 font-medium">Aluminum 6061-T6</span> - Structural integrity
              </li>
            </ul>
          </motion.div>

          {/* Precision Card */}
          <motion.div variants={item} className="glass-card p-8 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
              <Crosshair className="text-electric-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Micro-Precision</h3>
            <div className="text-5xl font-bold text-gradient mb-2">±0.01<span className="text-2xl text-slate-500">mm</span></div>
            <p className="text-slate-400">Consistent 10-micron tolerances across full production runs.</p>
          </motion.div>

          {/* Compliance Card */}
          <motion.div variants={item} className="glass-card p-8 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
              <ShieldCheck className="text-electric-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Global Compliance</h3>
            <div className="flex flex-wrap gap-2">
              {['EN 10204 3.1', 'REACH', 'RoHS', 'ISO 9001:2015'].map((cert) => (
                <span key={cert} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Production Card */}
          <motion.div variants={item} className="glass-card p-8 md:col-span-2 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
                <Settings className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Agile Batching</h3>
              <p className="text-slate-400 mb-6 max-w-lg">
                Scalable manufacturing architecture supporting prototyping through to mass production without sacrificing precision.
              </p>
            </div>
            <div className="flex items-end gap-4">
              <div className="flex-1 bg-slate-800/50 h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-electric-blue to-blue-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
              <div className="text-sm font-medium text-slate-300 whitespace-nowrap">
                500 - 50,000 units
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
