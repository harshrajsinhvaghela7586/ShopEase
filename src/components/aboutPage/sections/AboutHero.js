export default function AboutHero() {
  return (
    <section className="bg-[#FAF7F2] py-20 px-6 text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#8C6D58]/20 text-[#8C6D58] text-[11px] font-bold uppercase tracking-widest shadow-xs">
          About ShopEase
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
          Redefining Fashion For <br />
          <span className="italic font-normal text-[#8C6D58]">Every Modern Girl</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Welcome to ShopEase, your ultimate boutique destination for handpicked girls' dresses, high heels, chic handbags, and sparkling accessories.
        </p>
      </div>
    </section>
  );
}