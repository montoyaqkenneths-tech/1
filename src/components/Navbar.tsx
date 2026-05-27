import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-almond-shell">
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="font-headline text-2xl md:text-3xl text-cacao-deep tracking-tight font-medium">
            Velvet & Cacao
          </Link>
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-primary font-bold border-b-2 border-primary font-mono text-[12px] uppercase tracking-widest hover:text-secondary transition-colors duration-300">
              Products
            </Link>
            <a href="#" className="text-on-surface-variant font-mono text-[12px] uppercase tracking-widest hover:text-secondary transition-colors duration-300">
              Our Story
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-primary hover:text-secondary transition-colors duration-300 active:scale-95 transition-transform">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
