import Button from "@/components/ui/Button";
import Link from "next/link";
import { FiArrowRight, FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#FAF7F2] py-16 lg:py-14 overflow-hidden border-b border-[#E8E1D7]">
      
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#EFE8DC] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-90 bg-[#E6DFD3] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="flex flex-col items-start gap-6">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#8C6D58] text-xs font-bold tracking-widest uppercase shadow-sm border border-[#E3D9CC]">
            <FiShoppingBag className="text-[#8C6D58]" /> New Season 2026 • 20% OFF
          </span>

          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight tracking-tight">
            Glam Up Your Look With <br />
            <span className="text-[#8C6D58] italic font-normal">
              ShopEase Fashion
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg font-light">
            Explore our handcrafted collection of trendy dresses, chic high heels, elegant handbags, and dazzling accessories curated just for girls.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/products">
              <Button icon={FiArrowRight} className="bg-[#111111] hover:bg-[#8C6D58] text-white shadow-md py-3.5 px-7 text-base rounded-xl transition duration-300">
                Shop Collection
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="py-3.5 px-6 border-[#D5C9B8] text-gray-800 hover:bg-white rounded-xl transition duration-300">
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-[#E8E1D7] w-full">
            <div>
              <p className="text-2xl font-serif font-black text-gray-900">10k+</p>
              <p className="text-xs text-gray-500 font-medium">Happy Customers</p>
            </div>
            <div className="h-8 w-[1px] bg-[#D5C9B8]"></div>
            <div>
              <p className="text-2xl font-serif font-black text-gray-900 flex items-center gap-1">
                4.9 <FiStar className="text-amber-500 fill-amber-500 text-sm" />
              </p>
              <p className="text-xs text-gray-500 font-medium">Top Rated Store</p>
            </div>
          </div>

        </div>

        <div className="relative flex justify-center items-center">
          
          {/* Main Photo Card */}
          <div className="w-full h-[420px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
            <img
              src="https://images.unsplash.com/photo-1649139414876-ef584aa60f2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ShopEase Girls Fashion"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* Floating Card 1: Top Right Heart Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3 px-4 rounded-2xl shadow-md border border-[#E8E1D7] flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F3EEE7] text-[#8C6D58] flex items-center justify-center font-bold">
              <FiHeart className="fill-[#8C6D58] text-[#8C6D58]" />
            </div>
            <span className="text-xs font-bold text-gray-800">Best Selling</span>
          </div>

          {/* Floating Card 2: Bottom Left Offer Tag (Inside Frame Boundary) */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3.5 px-5 rounded-2xl shadow-lg border border-[#E8E1D7] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8C6D58] text-white flex items-center justify-center font-black text-base shadow-sm">
              ✨
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Girls Trendy Wear</p>
              <p className="text-[11px] text-gray-500 font-medium">Dresses, Shoes & Jewelry</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}