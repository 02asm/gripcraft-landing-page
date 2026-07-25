export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full rounded-t-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-gutter px-margin-mobile md:px-margin-desktop py-12 lg:py-16 max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="font-headline-md text-headline-md italic text-on-surface">GRIP TECH</div>
          <p className="font-body-md text-on-tertiary-container max-w-xs">Precision hardware for high-performance athletes. Engineered in the lab, proven on the court.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary transition-all group" href="#">
              <span className="material-symbols-outlined text-on-surface group-hover:text-on-secondary">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary transition-all group" href="#">
              <span className="material-symbols-outlined text-on-surface group-hover:text-on-secondary">alternate_email</span>
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h5 className="font-label-caps text-label-caps text-secondary mb-4 lg:mb-6 uppercase">Shop</h5>
          <ul className="space-y-2 lg:space-y-3 font-body-md text-on-tertiary-container">
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Best Sellers</a></li>
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Overgrips</a></li>
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Replacement Grips</a></li>
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Multipacks</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h5 className="font-label-caps text-label-caps text-secondary mb-4 lg:mb-6 uppercase">Support</h5>
          <ul className="space-y-2 lg:space-y-3 font-body-md text-on-tertiary-container">
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Shipping</a></li>
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Returns</a></li>
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Contact</a></li>
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h5 className="font-label-caps text-label-caps text-secondary mb-4 lg:mb-6 uppercase">Legal</h5>
          <ul className="space-y-2 lg:space-y-3 font-body-md text-on-tertiary-container">
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-on-surface hover:translate-x-1 transition-transform inline-block" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-6 lg:py-8 text-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="font-label-caps text-label-caps text-on-tertiary-container">© 2024 GRIP TECH PERFORMANCE. ENGINEERED FOR SPEED.</p>
      </div>
    </footer>
  );
}
