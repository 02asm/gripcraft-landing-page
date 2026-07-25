import { motion } from 'framer-motion';

export default function Reviews() {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { transition: { staggerChildren: 0.2 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAP_-yYI9hocx6d_cenS4oy6JyDNHMfyzu-vOsDz-eyuGcaEhpy21RGgOB5rS46PEM3jlsoQvxVGmQOQueZhLWsDoT_TmaYT97zXDvJ9nkpsKNfRLYs0fLF19FrC_xksswsAoDzRl8p52tKoOsVSCiblbYInekTl1dMYmslg4uFYowZVHUkF0xx6CtGHM4C9ybquvCS0xNhllLKo4zpptHYYlrG2ZMIBmD7KM_lDKe8zzxm-e5ywoQyt1iEjYHBweSCqf_wo9rKEbY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNQFngOAelR3TJUouX8-YMVl2hf1ahJzwO90rnjzscKbf4CdiVgeIogWyA-X0FxcNtM3-cU-AEisNb1MtjJiNRwkv7EKh5b8WQVZNDCLppDjhx-JGE5jskHxXkzK2ELv6728BeZkXLoFSaO8x-yV6MWdV4zKkdJc6u6REvU96c309lUjNjpzeLYgfGPlglM_PbaPJ32Y0-bqEXYIUTOUwHuE7lh84BxCupa3RM_riqzusfM1kBWQtTIiWSd0qWhaUvtOrkShYD83Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfqG_sK4rltHzKXKcZnlZCDtLpcegicVke6esDDdE593IxgOWN32CsoomLagmB_GwUx565IebwB45v11sH3wa-Hx1m8gmsDKOg7Le2eeI8oioLL4Ec057b8MyN3SQ3z5ihcbo0VpZW5JA4fNZcosOEmuCo8DMJxStCXvdsYgKQ2zU-F566QqNONZb2fvVwYZ_4hnu7Zo1nPAX02kymnxw8SUcwiTw9sxi1fERWd7Ql5pciCmHHt2LoHmaVckovHJY8GQxWl3OZbBQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA04WlyV3OfIFqZ5eFpFbKPL8Ln2PTA8YnjXiMigV2sEKRKBBxOahUCeH4pDlJOAEVZ1_cflatklpBDn2xepEoEgHsUrxVJp5pN-y0zV1L1tHRxQpZ0OcqfH-fe6o-bSdEQiIZ9qHhmOMUfWTh4nBL4_rChKCry1n2PC_FUu-2PhzeuHAxAy7Ht3WUl5ltAHYDJlfTfr8yp2t1t59Cx43YkbrURaXBHPiDCubtrZ9umqZAff1pnR6c3nDQDlcg7wH5r87u6ZwOYC4c",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwVh2_-c2b7nykFzUDOOBrALAel1yXCG_rE_Aq3oVFpSRLohuO77JCp0lf3UVPzZxmht99HPbUmM6eWMiojLLVNw2MH2fRXrTqLNOJ-ycCING1AGy5N8n6LLuPA9BGWZoDqfkfg2sQoIe9EHrqtd3o2c1ErqLHK3GOJCzwRSk49mYHVnIMSwvKnO6PejRNd12IiQGiX-PfqeceAkEvlkx2HmmQHNR8c40ENEnUgA62Met8IsEmZ3O3pN1IMCq4t0JSkDZ96_xvaB0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCOb3wxuO-1YFD4jpaI4flyrN2OCENuQ4vWLehTB5cDZ1DknwMDL6nWSvP5mOQsC5wY6ozESS-YMhXEH7AMKSf4PZ3R2JTLV7GX22zar8j78mnAJproJXARLYpuUtt8UdqVAPVJ_eMg1SViO_KxaEa3sm7Igd_SLzYnhjAJ-1GuLiogofvjw0pNaX6FpiYhG3zvWccAa3FfbEa1ZcdhvZzvbdgVLevJbmOhLWAnmUopKNiznirPknEeYJzHchnQJh9L7dJiME0uEyw"
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase italic mb-4">Club Proven. Pro Endorsed.</h2>
          <div className="flex justify-center gap-1 text-secondary">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-gutter mb-16 lg:mb-20"
        >
          <motion.div variants={item} className="bg-surface-container p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/5 shadow-lg">
            <p className="font-body-lg text-on-surface mb-6 italic">"Switched from the big brands to GripCraft and never looked back. The Pro-Tack stays tacky even in high humidity club matches."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                <img className="w-full h-full object-cover" alt="Marcus Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUk9gC7cDvwDmtw20eBPfqrRjq_4-Ab5m_sR39G-z08DHKfTXukxRBpMFXonfPJpFXDJ4JDzEFIgfJWXkyMFU9ZgQeA9n8t4GYkrthkhYU8JeDQHPgCQt-nD9sdTD835DY3vTPVkGPIsujveeyDZbBZNUXi-MaJJxTl4pbpNJgKzobk5WyD5sG1gWMIrglcCKi37dzROhf1T8DLh29BRcdIpgReydJgBpM8Po2TdnqDt-tKU-TbDiPBJoMcn2aloZsHUN03biB1zk" />
              </div>
              <div>
                <h5 className="font-headline-md text-sm">Marcus Chen</h5>
                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">Regional Club Player</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-surface-container p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/5 shadow-lg">
            <p className="font-body-lg text-on-surface mb-6 italic">"The towel grips are a lifesaver. I play 5 days a week and these last twice as long as anything else I've tried. Absolute value."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                <img className="w-full h-full object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCHmvfPR5kxDykjA7G9mXaXeBo0SKQzrfmERstSd2gBngS117r9wyrXgCY39cV1WXHwlC0DEWK5cjN6ppDCzQYmTIX_CrMIJyVzbyc59kNXgnCVpvxWw5pAjZr3rYrLIC4DaX7S4HBGF6zJ4VYKO5NIXA7tC4S3TXEUlC2_PljWwPSlqcUuMuJZuELg8GaFdLN3UoYnBL_eKYfcqTGbyKIhVtlB4zGuPjhx4l0omjEMI73GChC2ujW2-sqhx8TIVzUC7ZfsJqjMI" />
              </div>
              <div>
                <h5 className="font-headline-md text-sm">Sarah Jenkins</h5>
                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">Division 1 Competitor</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-surface-container p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/5 shadow-lg">
            <p className="font-body-lg text-on-surface mb-6 italic">"Precision at 0.6mm is unmatched. I feel the racquet's handle bevels perfectly which is crucial for my deception shots."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                <img className="w-full h-full object-cover" alt="Alex Rivera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq52RJx6dLt7P84t9JsqOZHi6WYNMizHYq5kOZV5Kt2x9aj1PSbQQgdT0YWro8JTu5rXOOpDrZuZbnu5yPlAaUh5x8wtTA0IZnwWaBTV2FYn7ORDuMoqdVPNOfzDm2O7ASOTL9RjDW1AwlgGjHl5rMtfihjABriJ2DzMi6iFT6ImO46-lroOHggciScK5NQE639HxZhN95igjOJ9sRcvkbivb_MlMwlYGvQsYnH_vbx5ldfIte8RnY2jJqbdC7GOOhdO4RDAkQ9dg" />
              </div>
              <div>
                <h5 className="font-headline-md text-sm">Alex Rivera</h5>
                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">Badminton Coach</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Instagram Gallery */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex items-center justify-between">
            <h3 className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">#GRIPCRAFTGALLERY</h3>
            <a className="text-secondary font-label-caps text-[10px] uppercase border-b border-secondary hover:text-secondary-fixed transition-colors" href="#">Follow on IG</a>
          </div>
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 md:grid-cols-6 gap-2"
          >
            {images.map((src, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                className={`aspect-square bg-surface-container overflow-hidden rounded-lg group cursor-pointer relative ${idx > 2 ? 'hidden md:block' : ''}`}
              >
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">favorite</span>
                </div>
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Instagram gallery image" src={src} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
