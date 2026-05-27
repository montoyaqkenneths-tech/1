import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Truck, Info, Minus, Plus, AlertTriangle } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  const relatedProducts = useMemo(() => 
    PRODUCTS.filter(p => p.id !== id).slice(0, 3),
  [id]);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-headline">Product not found</h1>
        <Link to="/" className="text-secondary underline mt-4 inline-block">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Gallery */}
        <div className="lg:col-span-7 bg-almond-shell rounded-lg overflow-hidden relative group">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={product.image} 
            alt={product.name}
            className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
          />
          {product.isLimitedEdition && (
            <div className="absolute top-6 right-6">
              <span className="bg-surface/90 backdrop-blur-sm px-4 py-1 font-label-mono text-cacao-deep border border-cacao-deep/10 uppercase tracking-widest">
                Limited Edition
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-10 sticky top-32">
          <div className="flex flex-col gap-4">
            <span className="font-label-mono text-secondary uppercase tracking-widest">
              {product.collection || 'Signature Collection'}
            </span>
            <h1 className="font-headline text-4xl font-bold text-primary tracking-tight">
              {product.name}
            </h1>
            <p className="font-headline text-3xl text-cacao-deep">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="h-px bg-almond-shell w-full" />

          <div className="flex flex-col gap-8">
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              {product.longDescription || product.description}
            </p>

            {product.ingredients && (
              <div className="flex flex-col gap-2">
                <h3 className="font-label-mono text-cacao-deep uppercase tracking-widest">Ingredients</h3>
                <p className="font-body text-on-surface-variant text-sm">
                  {product.ingredients}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-2 p-6 bg-almond-shell/30 border border-cacao-deep/5 rounded">
              <h3 className="font-label-mono text-red-600 uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle size={14} />
                Allergy Information
              </h3>
              <p className="font-body text-sm text-on-surface-variant">
                Contains dairy, eggs. Prepared in a facility that also handles nuts and gluten.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-cacao-deep h-12">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 text-cacao-deep hover:bg-almond-shell transition-colors h-full flex items-center justify-center border-r border-cacao-deep/10"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-label-mono text-sm">
                  {quantity.toString().padStart(2, '0')}
                </span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 text-cacao-deep hover:bg-almond-shell transition-colors h-full flex items-center justify-center border-l border-cacao-deep/10"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-cacao-deep text-white h-12 font-mono text-[14px] uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-[0.98] duration-200"
              >
                Add to Cart
              </button>
            </div>
            <button className="w-full border border-cacao-deep h-12 font-mono text-[14px] text-cacao-deep uppercase tracking-widest hover:bg-cacao-deep hover:text-white transition-all active:scale-[0.98] duration-200 shadow-sm">
              Order for Boutique Pickup
            </button>
          </div>

          <div className="flex items-center gap-4 text-on-surface-variant pt-2">
            <Truck size={18} />
            <span className="font-label-mono text-[11px]">
              Complimentary Temperature-Controlled Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Recommended */}
      <section className="mt-40 flex flex-col gap-10">
        <div className="flex justify-between items-end">
          <h2 className="font-headline text-3xl text-primary tracking-tight font-medium">You Might Also Like</h2>
          <Link to="/" className="font-label-mono text-secondary uppercase tracking-widest border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-colors">
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
