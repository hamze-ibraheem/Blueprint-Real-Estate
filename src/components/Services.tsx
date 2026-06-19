import { Building2, Home, BarChart3, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Real Estate Sales',
    description: 'Expert representation for buying and selling premium residential and commercial properties in the Miami area.',
    icon: Home,
    features: ['Market Analysis', 'Strategic Marketing', 'Skilled Negotiation']
  },
  {
    title: 'Property Management',
    description: 'Comprehensive management solutions designed to protect your asset and maximize your return on investment.',
    icon: Building2,
    features: ['Tenant Screening', 'Maintenance Coordination', 'Financial Reporting']
  },
  {
    title: 'Investment Advisory',
    description: 'Data-driven insights and strategic planning for expanding or optimizing your real estate portfolio.',
    icon: BarChart3,
    features: ['ROI Analysis', 'Portfolio Strategy', 'Market Identification']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold text-[#C5A059] tracking-[0.4em] uppercase mb-4">Service Specialization</h2>
          <h3 className="text-4xl md:text-5xl font-serif tracking-tighter text-white mb-6">Comprehensive Real Estate Solutions</h3>
          <p className="text-lg text-white/60 leading-relaxed">
            From first-time buyers to seasoned investors, we provide tailored strategies and impeccable execution for every real estate need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#141417] p-8 rounded-sm border border-white/5 hover:border-[#C5A059]/30 transition-all group flex flex-col h-full"
              >
                <div className="mb-6 text-white/80 group-hover:text-[#C5A059] transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h4 className="text-2xl font-serif italic text-white mb-3">{service.title}</h4>
                <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center text-[10px] tracking-widest uppercase text-white/50">
                      <div className="w-1 h-1 rounded-full bg-[#C5A059] mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="inline-flex items-center text-[10px] font-bold text-[#C5A059] uppercase tracking-widest hover:text-white group/link mt-auto transition-colors">
                  Learn more 
                  <ChevronRight className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
