import { FiCheckCircle, FiHeart } from 'react-icons/fi';

export default function OurJourney() {
  const features = [
    "Handpicked Quality",
    "Trendy Collections",
    "Affordable Pricing",
    "Fast Express Shipping"
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C6D58] uppercase">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Crafting Elegance & Confidence Since Day One
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            At ShopEase, we believe fashion is more than just clothing—it's an expression of joy, confidence, and personality. We started with a mission to bring high-end boutique fashion at affordable prices for girls everywhere.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether you are dressing up for a festive event, grabbing stylish heels for a night out, or choosing subtle everyday accessories, our collections are carefully curated just for you.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span className="p-1 rounded-full bg-[#FAF7F2] text-[#8C6D58]">
                  <FiCheckCircle className="text-sm" />
                </span>
                <span className="text-xs font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121266311-04c92a01f5e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ShopEase Fashion Experience"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#8C6D58] flex items-center justify-center font-bold text-lg">
              <FiHeart className="fill-[#8C6D58]" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">100% Curated</p>
              <p className="text-[10px] text-gray-500">Made With Love For Girls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}