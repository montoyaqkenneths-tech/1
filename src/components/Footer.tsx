export default function Footer() {
  return (
    <footer className="bg-almond-shell border-t border-cacao-deep/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 md:px-16 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="font-headline text-2xl font-bold text-cacao-deep">Velvet & Cacao</div>
          <p className="font-body text-on-surface-variant text-sm">The intersection of culinary art and visual elegance. Crafted for the discerning palate.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-mono text-cacao-deep mb-2">Shop</h4>
          <a className="font-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Products</a>
          <a className="font-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Shipping & Returns</a>
          <a className="font-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Gift Cards</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-mono text-cacao-deep mb-2">Our Story</h4>
          <a className="font-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Us</a>
          <a className="font-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Our Newsletter</a>
          <a className="font-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Sustainability</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-mono text-cacao-deep mb-2">Legal</h4>
          <a className="font-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
          <a className="font-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
      <div className="px-8 md:px-16 py-8 border-t border-cacao-deep/5 max-w-7xl mx-auto text-center">
        <p className="font-label-mono text-on-surface-variant opacity-90 text-[10px]">© 2024 Velvet & Cacao. Crafted with Artisanal Excellence.</p>
      </div>
    </footer>
  );
}
