import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-[12px] left-[12px] right-[12px] z-50 bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-[0.6rem] tracking-[0.4em] uppercase text-white/50 mb-1">
                Brickell Financial District
              </span>
              <span className="font-sans font-bold text-2xl tracking-tighter text-white">
                BLUEPRINT <span className="font-light opacity-60">REAL ESTATE</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-[10px] tracking-widest uppercase text-white/70 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-[10px] tracking-widest uppercase text-white/70 hover:text-white transition-colors">About Us</a>
            <a href="#contact" className="text-[10px] tracking-widest uppercase text-white/70 hover:text-white transition-colors">Contact</a>
            
            <a 
              href="tel:+18884704535" 
              className="flex items-center space-x-2 bg-white text-black px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              <Phone className="h-3 w-3" />
              <span>888-470-4535</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#141417] border-b border-white/10 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a 
              href="#services" 
              className="block px-3 py-3 text-[10px] tracking-widest uppercase text-white/70 hover:text-white hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block px-3 py-3 text-[10px] tracking-widest uppercase text-white/70 hover:text-white hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-3 text-[10px] tracking-widest uppercase text-white/70 hover:text-white hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 px-3">
              <a 
                href="tel:+18884704535" 
                className="flex items-center justify-center space-x-2 bg-white text-black px-5 py-4 text-[10px] font-bold uppercase tracking-widest w-full hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                <span>Call 888-470-4535</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
