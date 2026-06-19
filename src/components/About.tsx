import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Local Market Mastery in Miami & Brickell",
  "Transparent, Data-Driven Guidance",
  "Dedicated Property Managers",
  "Top-Tier Marketing & Exposure",
  "Responsive 5-Star Service",
  "Extensive Network of Investors & Buyers"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-[4/5] object-cover shadow-2xl overflow-hidden relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560518884-ce5882228f44?q=80&w=2574&auto=format&fit=crop" 
                alt="Blueprint Real Estate Professional" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-white/10 bg-[#141417] z-0 hidden md:block"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 bg-[#141417] border border-white/10 p-8 shadow-2xl z-20 hidden md:block">
              <div className="mt-1 text-5xl font-serif italic text-white tracking-tighter">Miami's</div>
              <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em] mt-3">Trusted Partner</div>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] font-bold text-[#C5A059] tracking-[0.4em] uppercase mb-4">Why Choose Blueprint</h2>
            <h3 className="text-4xl md:text-5xl font-serif tracking-tighter text-white mb-6">Expertise Driven by Results</h3>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Based in the prestigious Alberto Sabadell Financial Center, Blueprint Real Estate and Management stands as a beacon of professionalism in the Miami market. We believe in building lasting relationships through transparency, rigorous market analysis, and an unwavering commitment to your success.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                Meet The Team
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
