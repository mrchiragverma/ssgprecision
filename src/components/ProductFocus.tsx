import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Hexagon, Component, FlaskConical } from 'lucide-react';

const ProductFocus: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="products" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Catalog</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Precision manufactured components validated through rigorous in-house testing.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Materials Lab (Bento Full Width) */}
          <motion.div variants={item} className="glass-card p-8 md:col-span-3 flex flex-col md:flex-row gap-8 items-center border-electric-blue/20 bg-electric-blue/5">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-700">
              <FlaskConical className="w-8 h-8 text-electric-blue" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Materials Lab & Analysis</h3>
              <p className="text-slate-400 leading-relaxed">
                Our in-house spectrometry lab guarantees alloy composition down to the molecular level. Every batch of SS 316L undergoes rigorous Positive Material Identification (PMI) and Spectrometer Analysis before machining begins, ensuring absolute compliance with European metallurgical standards and providing ultimate Procurement Confidence.
              </p>
            </div>
          </motion.div>

          {/* Lane 1: EV Fasteners */}
          <motion.div variants={item} className="glass-card p-8 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
              <Zap className="text-electric-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-white">EV Fasteners</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              High-tensile, strictly non-magnetic 316L compression fasteners engineered for next-generation solid-state and Li-ion battery architectures.
            </p>
          </motion.div>

          {/* Lane 2: Precision Castings */}
          <motion.div variants={item} className="glass-card p-8 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
              <Hexagon className="text-electric-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-white">Precision Castings</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Heritage-led sand and investment casting. We combine generational expertise with modern metallurgical validation for complex structural geometries.
            </p>
          </motion.div>

          {/* Lane 3: Custom Machined */}
          <motion.div variants={item} className="glass-card p-8 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
              <Component className="text-electric-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-white">Custom Machined Components</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              CNC-milled Aluminum (6061-T6) and Titanium (Grade 5) components crafted with 10-micron tolerance precision for specialized industrial applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFocus;
