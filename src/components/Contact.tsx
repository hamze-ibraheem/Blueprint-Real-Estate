import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0B] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#141417] border border-white/10 rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Contact Info Side */}
          <div className="lg:w-5/12 p-12 lg:p-16 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <h2 className="text-4xl font-serif italic tracking-tighter mb-4">Get In Touch</h2>
              <p className="text-white/60 leading-relaxed mb-12">We're here to answer any questions and help you achieve your real estate goals.</p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#C5A059] mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#C5A059] mb-2">Our Office</h4>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Blueprint Real Estate & Management<br />
                      Alberto Sabadell Financial Center<br />
                      1111 Brickell Ave, 10th Floor<br />
                      Miami, FL 33131
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#C5A059] mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#C5A059] mb-2">Direct Line</h4>
                    <a href="tel:+18884704535" className="text-white/80 text-sm hover:text-white transition-colors block">
                      +1 888-470-4535
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#C5A059] mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#C5A059] mb-2">Email Us</h4>
                    <a href="mailto:info@blueprintremiami.com" className="text-white/80 text-sm hover:text-white transition-colors block">
                      info@blueprintremiami.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#C5A059] mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#C5A059] mb-2">Business Hours</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Monday - Friday: 9:00 AM - 4:00 PM<br />
                      Saturday & Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="lg:w-7/12 bg-[#0A0A0B]/50 p-12 lg:p-16">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif tracking-tighter text-white mb-8">Schedule a Consultation</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" placeholder="First Name" required className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder-white/30" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" required className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder-white/30" />
                  </div>
                </div>
                
                <div>
                  <input type="email" placeholder="Email Address" required className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder-white/30" />
                </div>
                
                <div>
                  <input type="tel" placeholder="Phone Number" required className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder-white/30" />
                </div>
                
                <div>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-black/20 border-b border-white/10 p-3 text-xs text-white outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder-white/30 resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-white text-black py-4 mt-6 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10">
                  <span className="text-[#C5A059] text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-serif tracking-tighter text-white">Message Received</h3>
                <p className="text-white/60 max-w-sm">Thank you for reaching out. A member of our team will contact you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold hover:text-white mt-4 transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
