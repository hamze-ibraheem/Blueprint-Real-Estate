export default function Metrics() {
  const stats = [
    { value: "$150M+", label: "Real Estate Sold" },
    { value: "300+", label: "Properties Managed" },
    { value: "5.0", label: "Average Rating" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section className="py-24 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:pl-12">
          {stats.map((stat, index) => (
            <div key={index} className="border-l-2 border-[#C5A059] pl-6 md:pl-8 py-2">
              <div className="text-4xl md:text-5xl font-serif tracking-tighter text-white mb-3">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
