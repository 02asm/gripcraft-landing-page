import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-surface/90 backdrop-blur-xl border-b border-white/10 shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Left: Logo + Desktop Nav Links */}
          <div className="flex items-center gap-8">
            <a className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface" href="#">
              GRIPCRAFT
            </a>
            <div className="hidden md:flex gap-6 items-center">
              <a className="font-body-md text-secondary font-bold relative after:content-['/'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:text-secondary" href="#products">Shop All</a>
              <a className="font-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#texture">Texture</a>
              <a className="font-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#products">Bundles</a>
              <a className="font-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#quiz">Grip Guide</a>
            </div>
          </div>

          {/* Right: Search + Cart + Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-surface-container-high px-4 py-1.5 rounded-full border border-white/5">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-32 placeholder:text-on-surface-variant focus:outline-none"
                placeholder="Find your grip..."
                type="text"
              />
            </div>
            <button className="md:hidden material-symbols-outlined text-on-surface p-1">search</button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="material-symbols-outlined text-on-surface hover:text-secondary transition-colors relative"
            >
              shopping_cart
              <span className="absolute -top-1.5 -right-1.5 bg-secondary text-on-secondary text-[10px] font-bold px-1.5 rounded-full leading-tight">
                2
              </span>
            </motion.button>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden material-symbols-outlined text-on-surface p-1"
            >
              menu
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer with Framer Motion */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-[60] md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 h-full w-[80%] max-w-[320px] bg-surface-container border-r border-white/5 p-margin-mobile flex flex-col"
            >
              <div className="flex justify-between items-center mb-8 pt-4">
                <span className="font-headline-md text-headline-md font-bold italic">MENU</span>
                <button onClick={() => setIsDrawerOpen(false)} className="p-2">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                <a onClick={() => setIsDrawerOpen(false)} className="font-headline-md text-headline-md text-secondary border-b border-secondary/20 pb-2" href="#products">Shop All</a>
                <a onClick={() => setIsDrawerOpen(false)} className="font-headline-md text-headline-md text-on-surface-variant hover:text-on-surface transition-colors" href="#texture">Texture</a>
                <a onClick={() => setIsDrawerOpen(false)} className="font-headline-md text-headline-md text-on-surface-variant hover:text-on-surface transition-colors" href="#products">Bundles</a>
                <a onClick={() => setIsDrawerOpen(false)} className="font-headline-md text-headline-md text-on-surface-variant hover:text-on-surface transition-colors" href="#quiz">Grip Guide</a>
                <a onClick={() => setIsDrawerOpen(false)} className="font-headline-md text-headline-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">My Account</a>
              </nav>
              <div className="mt-auto pt-12 flex gap-4">
                <a className="w-10 h-10 flex items-center justify-center bg-surface-container-high border border-white/5 rounded-full text-secondary" href="#">
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-surface-container-high border border-white/5 rounded-full text-secondary" href="#">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
