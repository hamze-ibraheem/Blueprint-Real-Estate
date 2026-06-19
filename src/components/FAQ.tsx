import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Do you only service the Brickell area?",
    answer: "While our office is located in the heart of Brickell at the Alberto Sabadell Financial Center, our expertise spans across the greater Miami area, including Downtown, Coral Gables, Miami Beach, and beyond."
  },
  {
    question: "What is included in your property management service?",
    answer: "Our property management services are comprehensive. They include aggressive marketing, thorough tenant screening, lease execution, rent collection, 24/7 maintenance coordination, and detailed financial reporting."
  },
  {
    question: "How do you determine the selling price for my property?",
    answer: "We conduct a thorough Comparative Market Analysis (CMA), evaluating recent sales, current market trends, property condition, and unique features to ensure your property is priced competitively to attract buyers while maximizing your return."
  },
  {
    question: "Are you experienced with commercial real estate?",
    answer: "Yes, our team is highly experienced in commercial real estate sales, leasing, and management. We assist investors with identifying lucrative opportunities and optimizing the performance of their commercial portfolios."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold text-[#C5A059] tracking-[0.4em] uppercase mb-4">Briefings</h2>
          <h3 className="text-4xl md:text-5xl font-serif tracking-tighter text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#141417] border text-left border-white/5 rounded-sm overflow-hidden hover:border-[#C5A059]/30 transition-colors"
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-sans text-lg tracking-tight text-white text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#C5A059] flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-[#C5A059] transition-colors flex-shrink-0 ml-4" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-white/60 leading-relaxed border-t border-white/5 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
