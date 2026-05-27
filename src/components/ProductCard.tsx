import { Link } from 'react-router-dom';
import { Product } from '../types';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100 rounded-sm">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.isLimitedEdition && (
          <div className="absolute top-4 right-4">
            <span className="bg-surface/90 backdrop-blur-sm px-3 py-1 font-mono text-[10px] text-cacao-deep border border-cacao-deep/10 uppercase tracking-widest">
              Limited Edition
            </span>
          </div>
        )}
      </Link>
      <div className="flex flex-col p-6 bg-almond-shell border border-cacao-deep/5 h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline text-xl text-cacao-deep leading-tight">{product.name}</h3>
          <span className="font-mono text-secondary text-[12px] mt-1">${product.price.toFixed(2)}</span>
        </div>
        <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-2">
          {product.description}
        </p>
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-auto w-full bg-cacao-deep text-white font-mono text-[12px] py-4 uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
