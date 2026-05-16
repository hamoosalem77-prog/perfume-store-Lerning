import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSearch, FiUser, FiHeart, FiShoppingBag, FiX, FiMenu,
  FiInstagram, FiTwitter, FiFacebook
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Home', labelAr: 'الرئيسية', href: '/' },
  { label: 'Shop', labelAr: 'المتجر', href: '/shop' },
  { label: "Men's", labelAr: 'العطور الرجالية', href: '/shop?category=men' },
  { label: "Women's", labelAr: 'العطور النسائية', href: '/shop?category=women' },
  { label: 'Oriental', labelAr: 'العطور الشرقية', href: '/shop?category=oriental' },
  { label: 'Offers', labelAr: 'العروض', href: '/shop?category=limited' },
  { label: 'About', labelAr: 'من نحن', href: '/about' },
  { label: 'Contact', labelAr: 'تواصل معنا', href: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, wishlistCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#2A3530] text-[#C8A96B]/80 text-xs py-2 px-4 flex items-center justify-between font-poppins">
        <div className="hidden md:flex items-center gap-4">
          <a href="https://instagram.com" className="hover:text-[#C8A96B] transition-colors"><FiInstagram size={13} /></a>
          <a href="https://twitter.com" className="hover:text-[#C8A96B] transition-colors"><FiTwitter size={13} /></a>
          <a href="https://facebook.com" className="hover:text-[#C8A96B] transition-colors"><FiFacebook size={13} /></a>
        </div>
        <div className="flex-1 text-center tracking-widest text-[#C8A96B]/60 uppercase text-[10px]">
          ✦ Free Shipping on Orders Over $200 &nbsp;|&nbsp; Exclusive New Arrivals ✦
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] tracking-widest">
          <span className="text-[#C8A96B]/50">العربية</span>
          <span className="text-[#C8A96B]/20">|</span>
          <span className="text-[#C8A96B]/80">EN</span>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#0F1210]/95 backdrop-blur-xl shadow-2xl border-b border-[#C8A96B]/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-[#FAF7F2]/70 hover:text-[#C8A96B] transition-colors"
                aria-label="Open menu"
              >
                <FiMenu size={22} />
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex p-2 text-[#FAF7F2]/70 hover:text-[#C8A96B] transition-colors"
                aria-label="Search"
              >
                <FiSearch size={20} />
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-center">
              <div className="font-playfair">
                <div className="text-2xl font-semibold tracking-[0.25em] text-[#C8A96B]">ELYSIAN</div>
                <div className="text-[8px] tracking-[0.6em] text-[#FAF7F2]/40 font-poppins uppercase -mt-1">NOIR</div>
              </div>
            </Link>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="md:hidden p-2 text-[#FAF7F2]/70 hover:text-[#C8A96B] transition-colors"
                aria-label="Search"
              >
                <FiSearch size={20} />
              </button>
              <Link to="/account" className="hidden md:flex p-2 text-[#FAF7F2]/70 hover:text-[#C8A96B] transition-colors">
                <FiUser size={20} />
              </Link>
              <Link to="/wishlist" className="relative p-2 text-[#FAF7F2]/70 hover:text-[#C8A96B] transition-colors">
                <FiHeart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C8A96B] text-[#0F1210] text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="relative p-2 text-[#FAF7F2]/70 hover:text-[#C8A96B] transition-colors">
                <FiShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C8A96B] text-[#0F1210] text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-start justify-center pt-24"
            style={{ background: 'rgba(15,18,16,0.95)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-6 right-6 text-[#FAF7F2]/60 hover:text-[#C8A96B] transition-colors"
            >
              <FiX size={28} />
            </button>
            <motion.div
              className="w-full max-w-2xl px-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-center text-[#C8A96B]/60 text-xs tracking-widest uppercase mb-8 font-poppins">
                Search Fragrances
              </p>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for your perfect scent..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent border-b-2 border-[#C8A96B]/30 focus:border-[#C8A96B] outline-none py-4 px-2 text-[#FAF7F2] text-xl font-poppins placeholder:text-[#FAF7F2]/20 transition-colors"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-[#C8A96B]">
                  <FiSearch size={24} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[70]"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              className="fixed left-0 top-0 h-full w-80 z-[80] flex flex-col"
              style={{
                background: 'rgba(15,18,16,0.98)',
                backdropFilter: 'blur(30px)',
                borderRight: '1px solid rgba(200,169,107,0.15)',
              }}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#C8A96B]/10">
                <div>
                  <div className="font-playfair text-xl font-semibold tracking-[0.2em] text-[#C8A96B]">ELYSIAN</div>
                  <div className="text-[8px] tracking-[0.5em] text-[#FAF7F2]/30 font-poppins uppercase">NOIR</div>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-[#FAF7F2]/50 hover:text-[#C8A96B] transition-colors"
                >
                  <FiX size={22} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 py-8 px-6 overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className="group flex items-center justify-between py-3 px-2 border-b border-[#3B4A3F]/30 hover:border-[#C8A96B]/30 transition-all duration-300"
                      >
                        <div>
                          <span className="block text-[#FAF7F2]/80 group-hover:text-[#C8A96B] transition-colors font-poppins text-sm tracking-wider">
                            {link.label}
                          </span>
                          <span className="block text-[#FAF7F2]/30 group-hover:text-[#C8A96B]/60 transition-colors font-cairo text-xs mt-0.5">
                            {link.labelAr}
                          </span>
                        </div>
                        <span className="text-[#C8A96B]/0 group-hover:text-[#C8A96B] transition-all duration-300 transform group-hover:translate-x-1">
                          ›
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-[#C8A96B]/10">
                <div className="flex items-center gap-4 mb-4">
                  <a href="https://instagram.com" className="p-2 text-[#FAF7F2]/40 hover:text-[#C8A96B] transition-colors">
                    <FiInstagram size={18} />
                  </a>
                  <a href="https://twitter.com" className="p-2 text-[#FAF7F2]/40 hover:text-[#C8A96B] transition-colors">
                    <FiTwitter size={18} />
                  </a>
                  <a href="https://facebook.com" className="p-2 text-[#FAF7F2]/40 hover:text-[#C8A96B] transition-colors">
                    <FiFacebook size={18} />
                  </a>
                </div>
                <p className="text-[#FAF7F2]/20 text-xs font-poppins">© 2024 Elysian Noir</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
