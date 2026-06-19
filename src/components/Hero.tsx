import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A0A0B]">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2670&auto=format&fit=crop" 
          alt="Brickell Miami Skyline" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/90 to-[#0A0A0B]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 pb-1.5 rounded-full mb-6">
              <div className="flex text-[#C5A059]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/80 mt-0.5">5.0 Google Rating (Brickell)</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif tracking-tighter mb-6 leading-[0.9]">
              Elevate Your <br className="hidden md:block" /><span className="text-[#C5A059] italic opacity-90">Miami Real Estate</span> Experience
            </h1>
            
            <p className="text-lg opacity-70 mb-10 max-w-xl leading-relaxed">
              Premium residential sales, commercial transactions, and property management centered in the Alberto Sabadell Financial Center.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Request a Consultation
              </a>
              <a 
                href="tel:+18884704535" 
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
              >
                Call 888-470-4535
              </a>
            </div>
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-full max-w-md ml-auto"
          >
            <div className="bg-[#141417] border border-white/5 p-8 rounded-sm">
              <h3 className="text-2xl font-serif italic tracking-tighter text-white mb-2">Speak With an Expert</h3>
              <p className="text-white/50 mb-8 text-xs tracking-widest uppercase">Fill out the form below</p>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" id="name" className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder-white/30" placeholder="Full Name" />
                </div>
                <div>
                  <input type="email" id="email" className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder-white/30" placeholder="Email Address" />
                </div>
                <div>
                  <input type="tel" id="phone" className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder-white/30" placeholder="Phone Number" />
                </div>
                <div>
                  <select id="interest" className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white/70 outline-none focus:border-[#C5A059] transition-colors rounded-none appearance-none">
                    <option className="bg-[#141417] text-white">Buying Property</option>
                    <option className="bg-[#141417] text-white">Selling Property</option>
                    <option className="bg-[#141417] text-white">Property Management</option>
                    <option className="bg-[#141417] text-white">Investment Advisory</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-white text-black py-4 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity mt-4">
                  Get Started
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
