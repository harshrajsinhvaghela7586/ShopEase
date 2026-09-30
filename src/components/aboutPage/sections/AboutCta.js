import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function AboutCta() {
  return (
    <section className="pb-20 px-6 max-w-7xl mx-auto">
      <div className="bg-[#FAF7F2] rounded-3xl p-10 md:p-16 text-center space-y-6 border border-[#8C6D58]/15 shadow-xs relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 max-w-xl mx-auto leading-tight">
          Ready To Upgrade Your Closet?
        </h2>
        <p className="text-gray-600 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
          Browse our latest girls' fashion collection and order your favorite outfit today.
        </p>
        <div className="pt-2">
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#8C6D58] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
          >
            Shop Products <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}