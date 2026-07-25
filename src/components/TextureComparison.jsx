import { motion } from 'framer-motion';

export default function TextureComparison() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section id="texture" className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low/50"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-surface-container-high rounded-2xl lg:rounded-3xl p-6 lg:p-16 border border-white/5 shadow-2xl"
          >
            {/* Copy Side */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase italic mb-4 lg:mb-6">
                Find Your Match
              </h2>
              <p className="text-on-surface-variant mb-6 lg:mb-8">Not all hands are the same. Choose the texture that matches your playstyle and sweat levels.</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-caps text-label-caps uppercase tracking-wider transition-transform"
              >
                Download Selection Guide
              </motion.button>
            </div>

            {/* Texture Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full">
              {/* Tacky */}
              <motion.div variants={itemVariants} className="bg-surface p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10 hover:border-secondary transition-colors group">
                <h4 className="font-label-caps text-secondary mb-2">TACKY</h4>
                <p className="text-xs text-on-surface-variant mb-3 lg:mb-4">Dry hands, precision play.</p>
                <img className="w-full h-24 lg:h-32 object-cover rounded-lg mb-3 lg:mb-4 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Super tacky grip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFMhLzlec1RnnWbyMZ2dxBp0Ve5ZUdMZPliaUlVr3_DunsaHKlJ7k7-8GCQFheE34k-Qx4UoQpqvKPxRSpGYAz0sMO0YDTtzLPSgy4x_otyfNG5CdLs5Jg-O7-CQixEnSPxH-bSlzNpD2b-LOiGdZncyPiDKMKIR-RkWrDQcd8WdA2OB3nb5WcX-a7LhWVp_uGX75-w1UgwA48caraD0zWANiYERnYYp1q0hMd4fp-r-pdVlNNDJX032gx92vkbyxFnqOWfMZtwC4" />
                <ul className="text-xs space-y-2 text-on-surface">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span> 0.6mm Thickness</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span> High Friction</li>
                </ul>
              </motion.div>

              {/* Towel */}
              <motion.div variants={itemVariants} className="bg-surface p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10 hover:border-secondary transition-colors group">
                <h4 className="font-label-caps text-secondary mb-2">TOWEL</h4>
                <p className="text-xs text-on-surface-variant mb-3 lg:mb-4">Heavy sweat, power play.</p>
                <img className="w-full h-24 lg:h-32 object-cover rounded-lg mb-3 lg:mb-4 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Cotton towel grip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxcNukoy39I6L0mvPhu5-xaMBlYSG7wGpn1aLMPlnCRPAhZHAqo3cIAwm6NstMPQh8JjKVunJrJX6O1j_uEWvoM7XCV2rNVC5TMoYXDFIZSWlFCkRZYx3PzMoyyMlYfWU0-B6v3JVJ0H6Sr7pfvfP4rdMx8aGW8u79WGEsjboD40oRyBPYqlondJFcZksl2yn7Lw4InMFEiZ_Lqb09InYLdbAy5LRPC6ZAeSpJgalbiQqQ7EFfi8CAcjvEAs1b_kLe3VbSQxlndw" />
                <ul className="text-xs space-y-2 text-on-surface">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span> 1.2mm Thickness</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span> Max Absorption</li>
                </ul>
              </motion.div>

              {/* Perforated */}
              <motion.div variants={itemVariants} className="bg-surface p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10 hover:border-secondary transition-colors group">
                <h4 className="font-label-caps text-secondary mb-2">PERFORATED</h4>
                <p className="text-xs text-on-surface-variant mb-3 lg:mb-4">Humid conditions, hybrid.</p>
                <img className="w-full h-24 lg:h-32 object-cover rounded-lg mb-3 lg:mb-4 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Perforated grip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWO8ZlApJYs-_HubEgn2nXbjUTpSYf5O1XPz52PeGYDPdjEjhv3MqPRLJFa6XNg3oLEUDQIG3GvuPxvF3QsCd9AsNglrfpuUXPaMDMhUQxKkOGtR1yWmkuTF9RrH-Md3DPhZJHO-rU9ANGoWITYSGVOKDemVlop4bvSrm-rS8SwRTzrFa_VXmPH3YcvSx5Lhg_dsx2NBxu32jtggpdGkikjrD4v1vD7Nf9wSfmQRhE5tZVIWyt32WaBkXXfwH1t1ZOEqhIWf7rjH0" />
                <ul className="text-xs space-y-2 text-on-surface">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span> 0.7mm Thickness</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary"></span> Breathable Finish</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Grip Quiz CTA */}
      <section id="quiz" className="px-margin-mobile md:px-margin-desktop py-12 lg:py-0 lg:hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-lg relative overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/20 blur-3xl rounded-full"></div>
          <span className="font-label-caps text-label-caps text-secondary mb-2">NOT SURE WHICH TO CHOOSE?</span>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile uppercase italic tracking-tighter mb-4 leading-tight">
            Find Your <span className="text-secondary">Perfect Match</span>
          </h2>
          <p className="font-body-md text-on-surface-variant mb-8">Answer 3 questions about your playstyle and hand size to get a personalized recommendation.</p>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-white text-background font-headline-md text-headline-md uppercase tracking-widest rounded-full hover:bg-secondary transition-all"
          >
            Start the Quiz
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}
