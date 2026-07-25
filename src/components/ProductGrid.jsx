import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'GripCraft Pro-Tack 0.6mm Overgrip - 3 Pack',
    desc: 'Ultimate tack for precision control.',
    price: '$12.99',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfQwmxYt7RTQ2ZFmQJjMecAxtP1Vz3lObNtP_mydsqSHEgwBBFghJvGNjg-2fmU3fRs_Z0ReOabLOqeS44nS0A2wG3fh7hufn5AME1qSPn5xe4ydPgoOrNsX3e3Kk7bK3Om0yMyhahUrZ20GuCK1SxCSjVP3YKDcWzmRBeXt_apGIMwRhIdcGOXt8LKjw9ew9ezgcLnOdnrlGXtzRTNC62ubm0BCqcsCgH-FrGRge8ozL3Q5vOrvCKxRszJF8RXxVFn6zpaJs3Hc4',
    badge: 'Best Seller',
    tag: 'Sweat-Proof',
    rating: '4.9',
    category: 'tacky',
    colors: ['bg-secondary', 'bg-white', 'bg-surface-variant']
  },
  {
    id: 2,
    title: 'Elite Cushion Replacement Grip',
    desc: '1.5mm thickness for shock absorption.',
    price: '$8.50',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD2XvujsCMt6j16JCmV36sohodgoJfmuq4ZGxaBaqxjmfO0WDwp7x3AFEqAVT0eyRT_eI4_ybOaJTL9thzkBax4v7OvTBYM17_Z2IkcZGBdQmk-mkxpAvPkCgIgy4u1sXnMs6i0JjnHQoLf09Nm2AktZLS1OwnLquNZCcsranpOdO_miDy4xhJrPDZL1XiUX9GK1fCLu5Y_0rHfUmLa8OamrLh9BYz81z9_7IlWhzRnl35J50UmreqIhx26AbaDVLaG1zhsNkl41I',
    badge: 'Limited Edition',
    category: 'replacement',
    colors: ['bg-surface-variant', 'bg-red-600']
  },
  {
    id: 3,
    title: 'Cotton-Pro Towel Grip',
    desc: 'Maximum absorption for heavy hitters.',
    price: '$15.99',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1ZQYyOknQlaO2abvB83QlqgArKuBE-EbsLp79vRlhzvrDsU2ibT627EqX7B6HMW8m7XYq2eztOyZKdG632vTq0rEIcpPjp2wTr9A2e9qnQh3ZUUbwoHr4ucFQ8Gu4c1_0cFGWVDynJKxAaZt6z7sVomvGeVrPYkjGC468UkJeSmNYjLIZuJDr7DZACXYlu-rc-3Nl3C__eYUJ7hnLW1HYaXWfFDHuStx9JKKPAIm-gfg45pCZcd2uZZPLEVG7bQc1VDR-2za4310',
    category: 'towel',
    colors: ['bg-white', 'bg-blue-400']
  },
  {
    id: 4,
    title: 'GripMaster Multi-Pack (12pk)',
    desc: 'Stock up for the entire season.',
    price: '$39.99',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8NzhWEiO6qt4uHTJy3I3SxMrpN_inkNuxNGbS-ZqbnQHdJmEvJVkURBinLaWDuoPbkOyOC2emBosc_beyTJenFALtL2dDn8cSOSTS2Bf3PVA0fcmbnLrf0g73egXYa8Dik23oBTrQrvBxQw80pBeiF8lP18lqkeYoIIRZw2yVeKhweiRw4mGXxbhvUYm_iQU2NVpwGwjq9AVFHxnU3xoMyxJ-W5FDT6y5oeStM77dJAcRQNJ2mCe8A8FqVQweVTBGg_ClADVaTfI',
    badge: 'Low Stock',
    badgeColor: 'bg-error-container text-on-error-container',
    category: 'multi',
    assorted: true
  }
];

const filters = [
  { id: 'all', label: 'All Grips' },
  { id: 'tacky', label: 'Super Tacky' },
  { id: 'dry', label: 'Dry / Sweat Absorbent' },
  { id: 'towel', label: 'Cotton Towel' },
  { id: 'replacement', label: 'Replacement Grips' },
  { id: 'multi', label: 'Multipacks' }
];

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = products.filter(p => activeFilter === 'all' || p.category === activeFilter);

  return (
    <section id="products" className="py-8 lg:py-12 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Filters */}
        <div className="flex items-center justify-between mb-6 lg:mb-8 overflow-x-auto custom-scrollbar no-scrollbar pb-4 snap-x">
          <div className="flex gap-3 shrink-0">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-label-caps text-label-caps uppercase whitespace-nowrap transition-colors ${
                  activeFilter === filter.id 
                    ? 'bg-secondary text-on-secondary' 
                    : 'border border-white/10 hover:border-secondary hover:text-secondary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <button className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-on-surface ml-6 shrink-0">
            <span className="material-symbols-outlined">tune</span>
            <span className="font-label-caps text-label-caps uppercase">Filter & Sort</span>
          </button>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-gutter">
          <AnimatePresence>
            {filteredProducts.map((product, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                key={product.id}
                whileHover={{ y: -4 }}
                className="group relative bg-surface-container p-3 lg:p-4 rounded-lg border border-white/5 shadow-sm"
              >
                <div className="relative aspect-square mb-3 lg:mb-4 bg-surface-container-highest rounded-lg overflow-hidden">
                  <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                    {product.badge && (
                      <span className={`${product.badgeColor || 'bg-secondary text-on-secondary'} text-[10px] font-label-caps px-2 py-0.5 rounded-full uppercase`}>
                        {product.badge}
                      </span>
                    )}
                    {product.tag && (
                      <span className="hidden sm:inline-block bg-surface-bright text-on-surface text-[10px] font-label-caps px-2 py-0.5 rounded-full uppercase">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  {product.rating && (
                    <div className="absolute top-2 right-2 z-10 bg-surface-container/80 backdrop-blur px-1.5 py-0.5 rounded border border-white/10 flex items-center gap-1">
                      <span className="font-label-caps text-[10px] text-secondary">{product.rating}</span>
                      <span className="material-symbols-outlined text-secondary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                  )}
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover" 
                    alt={product.title} 
                    src={product.img} 
                  />
                </div>
                
                <h3 className="font-headline-md text-on-surface text-sm lg:text-lg mb-1 leading-tight">{product.title}</h3>
                <p className="text-on-surface-variant text-xs lg:text-sm mb-3 lg:mb-4 hidden sm:block">{product.desc}</p>
                
                <div className="flex items-center justify-between mb-2 lg:mb-0">
                  {product.colors && (
                    <div className="flex gap-1.5">
                      {product.colors.map((c, idx) => (
                        <div key={idx} className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full ${c} border border-white/20`}></div>
                      ))}
                    </div>
                  )}
                  {product.assorted && (
                    <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] lg:text-label-caps">Assorted Colors</span>
                  )}
                  <span className="font-headline-md text-on-surface text-sm lg:text-base">{product.price}</span>
                </div>
                
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 lg:mt-4 w-full bg-surface-bright text-on-surface py-2 rounded-full font-label-caps text-label-caps uppercase hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center gap-2 text-[10px] lg:text-label-caps"
                >
                  <span className="material-symbols-outlined text-sm">add</span> Quick Add
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
