import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MagnetIcon, Beaker } from 'lucide-react';

const ProductFocus: React.FC = () => {
  return (
    <section id="products" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Battery Module <br/><span className="text-gradient">Compression Fasteners</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Specifically engineered for the 2026 generation of solid-state and advanced Li-ion battery architectures. Our fasteners ensure structural integrity under extreme thermal expansion cycles.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Zap className="text-electric-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">High-Tensile Strength</h4>
                    <p className="text-slate-500 text-sm">Rated for MPa 515+ ensuring zero module shifting during high-G impact events.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <MagnetIcon className="text-electric-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">EMI Safety Certified</h4>
                    <p className="text-slate-500 text-sm">Strictly non-magnetic 316L prevents electromagnetic interference with sensitive BMS sensors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <Beaker className="text-electric-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Acid-Resistant Coating</h4>
                    <p className="text-slate-500 text-sm">Proprietary passivation layer withstands corrosive electrolyte exposure.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-square glass-card rounded-2xl overflow-hidden relative group"
            >
              {/* Abstract Fastener visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-[0.5px] border-electric-blue/30 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-48 h-48 border-[0.5px] border-slate-600 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-32 h-32 border-[0.5px] border-slate-500 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute font-mono text-xs text-slate-500 text-center">
                  [ 316L FASTENER <br/> MACRO RENDER ]
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFocus;
