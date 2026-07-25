import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } }
  };

  return (
    <section id="hero" className="relative min-h-[600px] lg:min-h-[820px] flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2 animate-pulse hidden lg:block" style={{ animationDuration: '3s' }}></div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Hero Copy */}
        <motion.div 
          className="space-y-6 lg:space-y-8 text-center lg:text-left pt-8 lg:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Elite Performance Hardware</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-display-lg text-[40px] md:text-[56px] lg:text-display-lg text-on-surface leading-none uppercase italic">
            Maximum Control.<br /><span className="text-secondary italic">Zero Slip.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0">
            Engineered for the intensity of professional badminton. Our high-tack, moisture-wicking grips ensure your racquet feels like an extension of your arm—even in the third set.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-headline-md text-headline-md flex items-center justify-center gap-2 shadow-xl shadow-secondary/20"
            >
              Shop Best Sellers <span className="material-symbols-outlined">arrow_forward</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: '#acf847', color: '#acf847' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/20 text-on-surface px-8 py-4 rounded-full font-headline-md text-headline-md transition-colors"
            >
              Take Grip Quiz
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
          className="relative mx-auto lg:mx-0 max-w-[360px] lg:max-w-none"
        >
          <div className="absolute -inset-4 bg-secondary/20 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img 
              className="w-full h-auto drop-shadow-2xl" 
              alt="Professional studio product shot of badminton grips" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTS1gdZ-dwsXybe6nLj8m5uO698Dnfy9SGMDjIgzSSAaEhFydFBbOd0dMlxQaLRrwTt7fbh401GRjmR8gmfIfhfWGQ_JKO0AHIzGJ0LG71dqYDX0XhZCxEbjJvEZWEwUneyi2ij7C90bZHXZai3Vt3cyzxNvJ74Ani_5939QksGCmlhFqRoDyyDexPxlhowoaqW_0mssxUUJR81ZrdqrEL5LfpWD-XnAihOZ48AedoVOvC469fIGD4fmpFw_trf6BzbQAAqxsn-BU" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
