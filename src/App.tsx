import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSignals from './components/TrustSignals';
import Metrics from './components/Metrics';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] font-sans text-white flex flex-col border-[12px] border-[#1C1C1E]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustSignals />
        <Services />
        <About />
        <Metrics />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
