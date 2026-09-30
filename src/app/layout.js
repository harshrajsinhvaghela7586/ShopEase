import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import CartDrawer from "@/components/ui/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";

export const metadata = {
  title: "ShopEase - Ecommerce Platform",
  description: "Built with Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col justify-between">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <CartDrawer />
            <WishlistDrawer />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}