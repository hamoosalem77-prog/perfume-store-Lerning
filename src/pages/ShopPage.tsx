import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Search filter
    if (searchParam) {
      const search = searchParam.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(search) ||
        p.nameAr.includes(search) ||
        p.description.toLowerCase().includes(search)
      );
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }

    return result;
  }, [activeCategory, sortBy, priceRange, searchParam]);

  return (
    <div className="min-h-screen bg-[#0F1210] pt-0">
      {/* Page Header */}
      <div className="relative py-24 bg-[#0A0E0B] border-b border-[#C8A96B]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0A0E0B]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">Elysian Noir</p>
          <h1 className="font-playfair text-5xl sm:text-6xl text-[#FAF7F2]">
            {searchParam ? `Search: "${searchParam}"` : 'The Fragrance'}
            <span className="block italic text-[#C8A96B] mt-1">Collection</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-sm font-poppins text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#C8A96B] text-[#0F1210] font-semibold'
                    : 'border border-[#C8A96B]/20 text-[#FAF7F2]/50 hover:border-[#C8A96B]/50 hover:text-[#C8A96B]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <span className="font-poppins text-[#FAF7F2]/30 text-xs">{filteredProducts.length} items</span>

            {/* Filter button */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 border border-[#C8A96B]/20 hover:border-[#C8A96B] text-[#FAF7F2]/60 hover:text-[#C8A96B] px-4 py-2 rounded-sm font-poppins text-xs tracking-wider uppercase transition-all duration-300"
            >
              <FiFilter size={13} />
              Filter
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#161D18] border border-[#C8A96B]/20 text-[#FAF7F2]/60 px-4 py-2 pr-8 rounded-sm font-poppins text-xs tracking-wider focus:outline-none focus:border-[#C8A96B] cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <FiChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#C8A96B]/60 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {filterOpen && (
            <motion.div
              className="mb-8 p-6 bg-[#161D18] border border-[#C8A96B]/10 rounded-xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-poppins text-sm text-[#FAF7F2] tracking-wider">FILTERS</h3>
                <button onClick={() => setFilterOpen(false)} className="text-[#FAF7F2]/40 hover:text-[#C8A96B]">
                  <FiX size={18} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-poppins text-xs text-[#C8A96B] tracking-widest uppercase mb-3 block">
                    Price Range: ${priceRange[0]} – ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-[#C8A96B]"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-4xl mb-4">◈</div>
            <p className="font-playfair text-2xl text-[#FAF7F2]/50 mb-2">No Fragrances Found</p>
            <p className="font-poppins text-[#FAF7F2]/30 text-sm">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
