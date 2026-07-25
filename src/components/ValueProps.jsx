import { motion } from 'framer-motion';

export default function ValueProps() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="features" className="py-16 lg:py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop border-t border-white/5">
      <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase italic mb-10 lg:mb-0 tracking-tight text-center lg:hidden">
        Engineered for <span className="text-secondary italic">Peak Agility</span>
      </h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        <motion.div variants={itemVariants} className="flex gap-4 md:flex-col md:items-center md:text-center md:space-y-4">
          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary md:mb-2 border border-secondary/30 md:border-0 md:angled-accent">
            <span className="material-symbols-outlined text-3xl md:text-4xl md:unskew">air</span>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md uppercase italic md:mb-2">Micro-Perforated Air Flow</h3>
            <p className="text-on-surface-variant leading-relaxed">Advanced ventilation channels wick moisture away from your palm instantly, maintaining a bone-dry contact point during high-intensity rallies.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 md:flex-col md:items-center md:text-center md:space-y-4">
          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary md:mb-2 border border-secondary/30 md:border-0 md:angled-accent">
            <span className="material-symbols-outlined text-3xl md:text-4xl md:unskew">texture</span>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md uppercase italic md:mb-2">Ultra-Tack Polyurethane</h3>
            <p className="text-on-surface-variant leading-relaxed">Our proprietary PU compound delivers a "stuck-to-your-hand" feel that actually increases in grip as your hand warms up. Total control, zero slip.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 md:flex-col md:items-center md:text-center md:space-y-4">
          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary md:mb-2 border border-secondary/30 md:border-0 md:angled-accent">
            <span className="material-symbols-outlined text-3xl md:text-4xl md:unskew">layers</span>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md uppercase italic md:mb-2">Optimal Cushion</h3>
            <p className="text-on-surface-variant leading-relaxed">Calibrated between 0.6mm and 0.75mm to provide enough shock absorption for comfort without sacrificing the "feel" of the handle and shot feedback.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
