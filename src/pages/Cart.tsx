import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, Lock, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  
  const artisanalPackaging = 12.00;
  const shippingEstimate = 15.00;
  const total = subtotal + artisanalPackaging + shippingEstimate;

  if (cart.length === 0) {
    return (
      <div className="py-40 text-center flex flex-col items-center gap-6">
        <h1 className="text-3xl font-headline">Your Selection is Empty</h1>
        <p className="text-on-surface-variant font-body">Refined tastes deserve careful curation. Start exploring our collections.</p>
        <Link to="/" className="bg-cacao-deep text-white px-8 py-4 font-mono text-sm uppercase tracking-widest hover:opacity-90">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="mb-12">
        <h1 className="font-headline text-5xl text-cacao-deep mb-4 font-bold">Your Selection</h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl">
          Refined tastes deserve careful curation. Review your artisanal choices before we prepare them for their journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* List */}
        <div className="lg:col-span-8 space-y-12">
          {cart.map((item) => (
            <motion.div 
              layout
              key={item.id} 
              className="flex flex-col md:flex-row gap-8 border-b border-almond-shell pb-12 group"
            >
              <div className="w-full md:w-48 aspect-square overflow-hidden rounded bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-all duration-500 rounded-sm"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label-mono text-secondary mb-2 block">
                      {item.collection || 'Signature'}
                    </span>
                    <h3 className="font-headline text-2xl text-cacao-deep mb-2">{item.name}</h3>
                    <p className="text-on-surface-variant font-body text-sm italic">{item.description}</p>
                  </div>
                  <span className="font-headline text-xl text-cacao-deep">${(item.price * item.quantity).toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center border border-cacao-deep/10 rounded overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-2 hover:bg-almond-shell transition-colors border-r border-cacao-deep/10"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-5 font-mono text-sm">{item.quantity.toString().padStart(2, '0')}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-2 hover:bg-almond-shell transition-colors border-l border-cacao-deep/10"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-on-surface-variant hover:text-red-600 transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest"
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32">
          <div className="bg-almond-shell p-10 rounded-lg border border-cacao-deep/5 shadow-sm">
            <h2 className="font-headline text-2xl text-cacao-deep mb-8 border-b border-cacao-deep/10 pb-4 font-semibold">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="font-body text-on-surface-variant">Subtotal</span>
                <span className="font-mono font-semibold text-cacao-deep">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-on-surface-variant">Artisanal Packaging</span>
                <span className="font-mono font-semibold text-cacao-deep">${artisanalPackaging.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-on-surface-variant">Shipping Estimate</span>
                <span className="font-mono font-semibold text-cacao-deep">${shippingEstimate.toFixed(2)}</span>
              </div>
              <div className="pt-6 border-t border-cacao-deep/10 flex justify-between">
                <span className="font-headline text-xl text-cacao-deep font-bold">Total</span>
                <span className="font-headline text-xl text-cacao-deep font-bold">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-label-mono mb-2 text-on-surface-variant">Promo Code</label>
              <div className="flex gap-4">
                <input 
                  className="flex-1 bg-transparent border-0 border-b border-cacao-deep/30 focus:border-cacao-deep focus:ring-0 font-mono px-0 placeholder:text-cacao-deep/30 outline-none" 
                  placeholder="ENTRANCE" 
                  type="text"
                />
                <button className="font-label-mono text-secondary hover:text-cacao-deep transition-colors">Apply</button>
              </div>
            </div>

            <button className="w-full bg-cacao-deep text-white py-5 rounded-sm font-mono text-[14px] uppercase tracking-widest hover:bg-black transition-all active:scale-[0.98] shadow-md">
              Proceed to Checkout
            </button>
            <div className="mt-6 flex items-center justify-center gap-2 text-on-surface-variant opacity-60">
              <Lock size={14} />
              <span className="font-label-mono text-[10px] uppercase tracking-widest">Secure Boutique Checkout</span>
            </div>
          </div>

          <div className="mt-8 p-6 bg-cream-pastel/30 rounded border border-berry-glaze/10 flex gap-4">
            <div className="mt-1"><Info size={16} className="text-secondary" /></div>
            <p className="font-label-mono text-[10px] text-secondary leading-relaxed normal-case">
              Our chocolates are temperature-sensitive. We use insulated, eco-friendly cooling for all domestic shipping.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
