import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileType, CheckCircle2 } from 'lucide-react';

const RFQPortal: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0].name);
    }
  };

  return (
    <section id="rfq" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 border-electric-blue/20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">AI-Integrated RFQ Portal</h2>
            <p className="text-slate-400">Our AI engine processes drawings instantly, but our Senior Architects in Gurugram verify every tolerance manually. No bots, just high-speed engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Side */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Company Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="e.g. Acme Motors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Work Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="procurement@acme.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Material</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                    <option>SS 316L</option>
                    <option>Titanium Gr. 5</option>
                    <option>Al 6061-T6</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Est. Volume</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                    <option>500 - 5k</option>
                    <option>5k - 20k</option>
                    <option>20k - 50k</option>
                    <option>50k+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Drag & Drop Side */}
            <div 
              className={`border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-6 transition-all ${
                dragActive ? 'border-electric-blue bg-electric-blue/5' : 'border-slate-700 bg-slate-900/50 hover:border-slate-500'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {file ? (
                <div className="text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="text-white font-medium text-sm truncate max-w-[200px]">{file}</p>
                  <p className="text-slate-500 text-xs mt-1">Ready for analysis</p>
                  <button onClick={() => setFile(null)} className="text-electric-blue text-xs mt-4 hover:underline">Remove file</button>
                </div>
              ) : (
                <div className="text-center pointer-events-none">
                  <UploadCloud className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                  <p className="text-white font-medium mb-1">Drag & Drop CAD Files</p>
                  <p className="text-slate-500 text-xs mb-4">Supported: .STEP, .DWG, .PDF</p>
                  <div className="flex gap-2 justify-center">
                    <span className="flex items-center gap-1 text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">
                      <FileType className="w-3 h-3" /> STEP
                    </span>
                    <span className="flex items-center gap-1 text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">
                      <FileType className="w-3 h-3" /> DWG
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
            <p className="text-xs text-slate-500 max-w-sm">All uploaded designs are protected by a standard mutual NDA under EU/Indian jurisdiction.</p>
            <button className="bg-electric-blue hover:bg-electric-blue-hover text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-[0_0_15px_rgba(0,112,243,0.3)]">
              Submit RFQ
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RFQPortal;
