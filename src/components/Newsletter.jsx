import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-16 lg:py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-secondary overflow-hidden rounded-2xl lg:rounded-[2rem] px-6 lg:px-8 py-12 lg:py-16 text-center"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 70px)' }}></div>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-on-secondary uppercase italic mb-4">Join the Elite.</h2>
          <p className="font-body-lg text-on-secondary/80 mb-8 lg:mb-10">Sign up for the 'Grip Guide' newsletter and get 15% off your first order. Plus, early access to limited edition drops.</p>
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input 
                  required
                  className="flex-grow bg-white/20 border-2 border-white/30 rounded-full px-6 py-4 placeholder:text-on-secondary/50 text-on-secondary focus:border-on-secondary focus:outline-none" 
                  placeholder="Enter your email" 
                  type="email" 
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-on-secondary text-secondary px-10 py-4 rounded-full font-headline-md text-headline-md whitespace-nowrap" 
                  type="submit"
                >
                  GET DISCOUNT
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 border-2 border-white/30 rounded-full py-4 text-on-secondary font-headline-md text-headline-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">check_circle</span> Welcome to the club! Check your inbox.
              </motion.div>
            )}
          </AnimatePresence>
          
          <p className="mt-6 text-[10px] font-label-caps text-on-secondary/60 uppercase">Join 12,000+ Players worldwide. No spam, just speed.</p>
        </div>
      </motion.div>
    </section>
  );
}
