import { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

const CATEGORIES = ['All Collections', 'Cakes', 'Cookies', 'Gift Boxes', 'Seasonal'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All Collections');

  const filteredProducts = PRODUCTS.filter(p => 
    activeCategory === 'All Collections' || p.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="pt-24 pb-12 px-8 max-w-7xl mx-auto overflow-hidden text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-label-mono text-on-surface-variant mb-4 block"
        >
          The Curated Collection
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl text-cacao-deep mb-8 leading-none font-bold"
        >
          Artisanal Pâtisserie
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto font-body text-lg text-on-surface-variant"
        >
          Handcrafted desserts where tradition meets modern elegance. Each creation is a symphony of flavor and visual artistry.
        </motion.p>
      </header>

      {/* Filters */}
      <section className="mb-12 px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 border-b border-almond-shell pb-6">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-label-mono px-4 py-2 rounded-full transition-colors ${
                activeCategory === cat 
                  ? 'bg-cacao-deep text-white' 
                  : 'text-on-surface-variant hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <main className="mb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
