import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { products, testimonials } from '../data/products';
import ProductCard from '../components/ProductCard';

// Hero Section
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src="/images/hero-bg.jpg"
          alt="Luxury Fragrance"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1210]/60 via-[#0F1210]/40 to-[#0F1210]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1210]/50 via-transparent to-[#0F1210]/50" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C8A96B]/5"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <motion.div className="relative z-10 text-center px-4" style={{ opacity }}>
        <motion.p
          className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          ✦ Haute Parfumerie ✦
        </motion.p>
        <motion.h1
          className="font-playfair text-5xl sm:text-7xl lg:text-8xl font-semibold text-[#FAF7F2] leading-none mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 1 }}
        >
          Luxury
          <span className="block italic text-[#C8A96B] mt-2">Fragrance</span>
          <span className="block mt-1">Collection</span>
        </motion.h1>
        <motion.p
          className="font-poppins text-[#FAF7F2]/60 text-base sm:text-lg max-w-xl mx-auto mt-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7, duration: 0.8 }}
        >
          Each fragrance is a masterpiece — an olfactory journey crafted for those who seek the extraordinary.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.9, duration: 0.8 }}
        >
          <Link
            to="/shop"
            className="group flex items-center gap-3 bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] px-10 py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-sm gold-glow-hover"
          >
            Explore Collection
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-3 border border-[#C8A96B]/30 hover:border-[#C8A96B] text-[#FAF7F2]/70 hover:text-[#C8A96B] px-10 py-4 font-poppins text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-sm"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
      >
        <span className="text-[#C8A96B]/40 text-[9px] tracking-[0.4em] uppercase font-poppins">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#C8A96B]/50 to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const stats = [
    { value: '15+', label: 'Years of Craftsmanship', labelAr: 'سنوات من الحرفية' },
    { value: '120+', label: 'Unique Fragrances', labelAr: 'عطر فريد' },
    { value: '50K+', label: 'Happy Clients', labelAr: 'عميل سعيد' },
    { value: '30+', label: 'Countries', labelAr: 'دولة' },
  ];

  return (
    <section ref={ref} className="py-16 bg-[#161D18] border-y border-[#C8A96B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="font-playfair text-4xl font-semibold text-[#C8A96B] mb-2">{stat.value}</div>
              <div className="font-poppins text-xs text-[#FAF7F2]/40 tracking-wider uppercase">{stat.label}</div>
              <div className="font-cairo text-xs text-[#C8A96B]/30 mt-0.5">{stat.labelAr}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Collections Section
const CollectionsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const collections = [
    { id: 'men', name: "Men's Collection", nameAr: 'العطور الرجالية', image: '/images/collection-men.jpg', count: '24 Fragrances' },
    { id: 'women', name: "Women's Collection", nameAr: 'العطور النسائية', image: '/images/collection-women.jpg', count: '32 Fragrances' },
    { id: 'oriental', name: 'Oriental Collection', nameAr: 'العطور الشرقية', image: '/images/collection-oriental.jpg', count: '18 Fragrances' },
    { id: 'limited', name: 'Limited Edition', nameAr: 'الإصدار المحدود', image: '/images/collection-limited.jpg', count: '8 Fragrances' },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0F1210]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">Our Collections</p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2]">
            Explore the World of <span className="italic text-[#C8A96B]">Elysian</span>
          </h2>
          <div className="luxury-divider w-32 mx-auto mt-6" />
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              className="group relative overflow-hidden rounded-xl aspect-[2/3] cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              <Link to={`/shop?category=${col.id}`}>
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Default Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1210]/90 via-[#0F1210]/20 to-transparent" />
                {/* Hover Gold Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C8A96B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Border Glow */}
                <div className="absolute inset-0 border border-[#C8A96B]/0 group-hover:border-[#C8A96B]/30 rounded-xl transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-poppins text-[#C8A96B]/60 text-[10px] tracking-widest uppercase mb-1">{col.count}</p>
                  <h3 className="font-playfair text-xl text-[#FAF7F2] group-hover:text-[#C8A96B] transition-colors duration-300 mb-3">
                    {col.name}
                  </h3>
                  <p className="font-cairo text-sm text-[#FAF7F2]/40 mb-4">{col.nameAr}</p>
                  <div className="flex items-center gap-2 text-[#C8A96B] text-sm font-poppins opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    Discover Now <FiArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Best Sellers Section
const BestSellersSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const bestSellers = products.slice(0, 8);

  return (
    <section ref={ref} className="py-24 bg-[#0A0E0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">Best Sellers</p>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2]">
              Most Coveted <span className="italic text-[#C8A96B]">Fragrances</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 text-[#C8A96B] font-poppins text-sm tracking-wider hover:gap-4 transition-all duration-300"
          >
            View All <FiArrowRight />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Brand Story Section
const BrandStorySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-0 bg-[#0F1210] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Image */}
        <motion.div
          className="relative overflow-hidden h-80 lg:h-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <img
            src="/images/brand-story.jpg"
            alt="Brand Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F1210]" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex items-center bg-[#0F1210] p-12 lg:p-20"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div>
            <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-6">Our Heritage</p>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2] leading-tight mb-8">
              A Legacy of
              <span className="block italic text-[#C8A96B]">Artistry</span>
            </h2>
            <div className="luxury-divider w-20 mb-8" />
            <p className="font-poppins text-[#FAF7F2]/50 text-base leading-loose mb-6">
              Born in the ateliers of Paris, Elysian Noir was founded on a singular belief: that the finest fragrances are more than mere scent — they are memories, emotions, and identity bottled in glass.
            </p>
            <p className="font-poppins text-[#FAF7F2]/40 text-sm leading-loose mb-10">
              For over fifteen years, our master perfumers have sourced the world's rarest ingredients — Bulgarian rose absolute, Cambodian oud, Madagascan vanilla — weaving them into olfactory poetry.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border border-[#C8A96B]/40 hover:border-[#C8A96B] text-[#C8A96B] px-8 py-3.5 font-poppins text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C8A96B]/5 rounded-sm"
            >
              Discover Our Story <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);

  const next = () => setActive(p => (p + 1) % testimonials.length);
  const prev = () => setActive(p => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-24 bg-[#161D18] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#C8A96B] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">Testimonials</p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2]">
            Words from Our <span className="italic text-[#C8A96B]">Connoisseurs</span>
          </h2>
          <div className="luxury-divider w-32 mx-auto mt-6" />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote */}
              <div className="text-6xl text-[#C8A96B]/20 font-playfair mb-6">"</div>
              <p className="font-poppins text-[#FAF7F2]/70 text-lg leading-loose mb-8 italic max-w-2xl mx-auto">
                {testimonials[active].comment}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} size={14} className="star-filled" fill="currentColor" />
                ))}
              </div>

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-full bg-[#3B4A3F] flex items-center justify-center text-2xl mb-2 border border-[#C8A96B]/20">
                  {testimonials[active].avatar}
                </div>
                <p className="font-playfair text-[#FAF7F2] text-lg">{testimonials[active].name}</p>
                <p className="font-poppins text-[#C8A96B]/60 text-xs tracking-wider">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#C8A96B]/30 flex items-center justify-center text-[#C8A96B]/60 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300"
            >
              <FiChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    i === active ? 'w-6 h-1.5 bg-[#C8A96B] rounded-full' : 'w-1.5 h-1.5 bg-[#C8A96B]/30 rounded-full hover:bg-[#C8A96B]/60'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#C8A96B]/30 flex items-center justify-center text-[#C8A96B]/60 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-[#0F1210]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1210] via-[#0F1210]/80 to-[#0F1210]" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-6">Newsletter</p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2] mb-4">
            Join the Inner <span className="italic text-[#C8A96B]">Circle</span>
          </h2>
          <p className="font-poppins text-[#FAF7F2]/40 text-sm mb-10 leading-relaxed">
            Be the first to discover new collections, exclusive offers, and olfactory stories from our master perfumers.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-[#161D18] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none px-6 py-4 text-[#FAF7F2] font-poppins text-sm placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] px-10 py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm transition-colors gold-glow-hover whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#3B4A3F] flex items-center justify-center text-[#C8A96B] text-xl">✦</div>
              <p className="font-playfair text-[#C8A96B] text-xl">Welcome to the Inner Circle</p>
              <p className="font-poppins text-[#FAF7F2]/40 text-sm">You'll receive our most exclusive updates.</p>
            </motion.div>
          )}

          <p className="font-poppins text-[#FAF7F2]/20 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Main HomePage
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <CollectionsSection />
      <BestSellersSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
