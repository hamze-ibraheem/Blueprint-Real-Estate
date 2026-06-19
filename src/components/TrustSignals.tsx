import { Star } from 'lucide-react';

export default function TrustSignals() {
  return (
    <section className="bg-[#0A0A0B] py-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center justify-center w-16 h-16 bg-[#141417] rounded-full border border-[#C5A059]/30">
              <span className="text-2xl font-serif text-white">5.0</span>
            </div>
            <div>
              <div className="flex text-[#C5A059] mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/50">16 Verified Google Reviews</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-white/10"></div>

          <div className="text-center md:text-left">
            <p className="text-xl font-serif italic text-white/90 max-w-lg leading-relaxed">
              "Professional, responsive, and incredibly knowledgeable about the Miami market. Blueprint exceeded our expectations."
            </p>
            <p className="text-[10px] uppercase tracking-widest text-[#C5A059] mt-3">— Recent Client, Brickell</p>
          </div>

        </div>
      </div>
    </section>
  );
}
