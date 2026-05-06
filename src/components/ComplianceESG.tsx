import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, FileCheck, Search } from 'lucide-react';

const ComplianceESG: React.FC = () => {
  return (
    <section id="compliance" className="py-24 relative z-10 border-t border-white/5 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
                <Leaf className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Compliance & ESG</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Supply Chain Excellence</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We adhere to LkSG principles and EU REACH standards. All shipments include a full Material Test Certificate (MTC) and Certificate of Origin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-5 border-slate-700/50">
                  <ShieldCheck className="w-8 h-8 text-electric-blue mb-4" />
                  <h4 className="text-white font-semibold mb-2">LkSG & REACH</h4>
                  <p className="text-slate-500 text-sm">Committed to ethical sourcing and environmental responsibility.</p>
                </div>
                <div className="glass-card p-5 border-slate-700/50">
                  <FileCheck className="w-8 h-8 text-electric-blue mb-4" />
                  <h4 className="text-white font-semibold mb-2">100% Traceability</h4>
                  <p className="text-slate-500 text-sm">Full MTC and Certificate of Origin with every global shipment.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Placeholder 1: Caliper */}
              <div className="aspect-[4/5] glass-card rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center p-6 text-center border border-slate-700">
                  <Search className="w-10 h-10 text-slate-500 mb-4" />
                  <p className="text-slate-400 font-medium text-sm">
                    [ Placeholder: Quality Gate ]<br/>
                    A hand holding a caliper over a shiny bolt
                  </p>
                </div>
              </div>

              {/* Placeholder 2: 3D CAD */}
              <div className="aspect-[4/5] glass-card rounded-2xl overflow-hidden relative group sm:translate-y-8">
                <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center p-6 text-center border border-electric-blue/20">
                  <div className="w-16 h-16 border-2 border-electric-blue/30 rounded-lg mb-4 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <div className="w-8 h-8 border-2 border-electric-blue/50 rounded-full" />
                  </div>
                  <p className="text-slate-400 font-medium text-sm">
                    [ Placeholder: Quality Gate ]<br/>
                    A screenshot of a 3D CAD analysis
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComplianceESG;
