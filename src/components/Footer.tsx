export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] text-white/50 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex flex-col mb-4">
              <span className="font-sans font-bold text-2xl tracking-tighter text-white inline-block w-fit">
                BLUEPRINT <span className="font-light opacity-60">REAL ESTATE</span>
              </span>
              <span className="text-[0.6rem] tracking-[0.4em] text-white/50 uppercase mt-1">
                Brickell Financial District
              </span>
            </a>
            <p className="text-sm max-w-sm mt-4">
              Providing premium real estate sales, property management, and investment advisory services in Miami and Brickell.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/80 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-xs tracking-widest uppercase">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/80 font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>1111 Brickell Ave 10th Floor</li>
              <li>Miami, FL 33131</li>
              <li><a href="tel:+18884704535" className="hover:text-white transition-colors text-[#C5A059]">888-470-4535</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center opacity-60">
          <p>&copy; {new Date().getFullYear()} Blueprint Real Estate & Management. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
