import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ValueProps from './components/ValueProps';
import TextureComparison from './components/TextureComparison';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <ValueProps />
        <TextureComparison />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />

      {/* Mobile FAB */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-2xl shadow-secondary/40 z-40 md:hidden hover:scale-110 active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span>
      </button>
    </div>
  );
}

export default App;
