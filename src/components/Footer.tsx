import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="bg-[#0A0E0B] border-t border-[#C8A96B]/10" ref={ref}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="font-playfair text-3xl font-semibold tracking-[0.2em] text-[#C8A96B]">ELYSIAN</div>
              <div className="text-[9px] tracking-[0.6em] text-[#FAF7F2]/30 font-poppins uppercase">NOIR</div>
            </div>
            <p className="text-[#FAF7F2]/40 text-sm font-poppins leading-relaxed mb-6">
              Crafting exceptional fragrances for those who appreciate the extraordinary. Each bottle tells a story of luxury, artistry, and passion.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FiInstagram, href: 'https://instagram.com' },
                { icon: FiTwitter, href: 'https://twitter.com' },
                { icon: FiFacebook, href: 'https://facebook.com' },
                { icon: FiYoutube, href: 'https://youtube.com' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-9 h-9 border border-[#C8A96B]/20 rounded-full flex items-center justify-center text-[#FAF7F2]/40 hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-poppins text-xs tracking-[0.3em] text-[#C8A96B] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Shop All', href: '/shop' },
                { label: "Men's Fragrances", href: '/shop?category=men' },
                { label: "Women's Fragrances", href: '/shop?category=women' },
                { label: 'Oriental Collection', href: '/shop?category=oriental' },
                { label: 'Limited Edition', href: '/shop?category=limited' },
                { label: 'About Us', href: '/about' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[#FAF7F2]/40 text-sm font-poppins hover:text-[#C8A96B] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#C8A96B]/0 group-hover:bg-[#C8A96B] transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-poppins text-xs tracking-[0.3em] text-[#C8A96B] uppercase mb-6">Customer Care</h4>
            <ul className="space-y-3">
              {[
                { label: 'My Account', href: '/account' },
                { label: 'My Orders', href: '/account' },
                { label: 'Wishlist', href: '/wishlist' },
                { label: 'Shipping Policy', href: '/contact' },
                { label: 'Returns & Exchanges', href: '/contact' },
                { label: 'FAQ', href: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[#FAF7F2]/40 text-sm font-poppins hover:text-[#C8A96B] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#C8A96B]/0 group-hover:bg-[#C8A96B] transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-poppins text-xs tracking-[0.3em] text-[#C8A96B] uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin size={16} className="text-[#C8A96B] mt-0.5 flex-shrink-0" />
                <span className="text-[#FAF7F2]/40 text-sm font-poppins">
                  Boulevard Haussmann, Paris 75008, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={16} className="text-[#C8A96B] flex-shrink-0" />
                <a href="tel:+33123456789" className="text-[#FAF7F2]/40 text-sm font-poppins hover:text-[#C8A96B] transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={16} className="text-[#C8A96B] flex-shrink-0" />
                <a href="mailto:hello@elysiannoir.com" className="text-[#FAF7F2]/40 text-sm font-poppins hover:text-[#C8A96B] transition-colors">
                  hello@elysiannoir.com
                </a>
              </li>
            </ul>

            {/* Payment Icons */}
            <div className="mt-8">
              <p className="text-[#FAF7F2]/20 text-xs font-poppins mb-3 tracking-wider">SECURE PAYMENT</p>
              <div className="flex flex-wrap gap-2">
                {['VISA', 'MC', 'AMEX', 'APPLE', 'PAYPAL'].map(payment => (
                  <div
                    key={payment}
                    className="px-2.5 py-1 border border-[#C8A96B]/20 rounded text-[#FAF7F2]/30 text-[9px] font-poppins tracking-wider"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="luxury-divider mx-8" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#FAF7F2]/20 text-xs font-poppins tracking-wider">
          © 2024 Elysian Noir. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
            <Link
              key={item}
              to="/contact"
              className="text-[#FAF7F2]/20 text-xs font-poppins hover:text-[#C8A96B]/60 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
