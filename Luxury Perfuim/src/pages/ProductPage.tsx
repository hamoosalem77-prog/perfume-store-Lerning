import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiShoppingBag, FiStar, FiMinus, FiPlus, FiCheck } from 'react-icons/fi';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0F1210] flex items-center justify-center">
        <div className="text-center">
          <p className="font-playfair text-3xl text-[#FAF7F2]/50 mb-4">Product Not Found</p>
          <Link to="/shop" className="text-[#C8A96B] font-poppins text-sm">← Return to Shop</Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'notes', label: 'Fragrance Notes' },
    { id: 'details', label: 'Details & Care' },
    { id: 'reviews', label: `Reviews (${product.reviews})` },
  ];

  return (
    <div className="min-h-screen bg-[#0F1210]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 font-poppins text-xs text-[#FAF7F2]/30">
          <Link to="/" className="hover:text-[#C8A96B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C8A96B] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#C8A96B]">{product.name}</span>
        </div>
      </div>

      {/* Product Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl bg-[#161D18] aspect-square mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
              {product.badge && (
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#C8A96B] text-[#0F1210] text-xs font-poppins font-semibold tracking-wider rounded-sm">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === i ? 'border-[#C8A96B]' : 'border-[#C8A96B]/0 hover:border-[#C8A96B]/40'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.4em] uppercase mb-3">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Fragrance
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2] mb-2">{product.name}</h1>
            <p className="font-cairo text-[#FAF7F2]/30 text-lg mb-4">{product.nameAr}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="font-poppins text-[#FAF7F2]/50 text-sm">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="luxury-divider mb-6" />

            {/* Price */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-playfair text-4xl text-[#C8A96B]">${product.price}</span>
              {product.originalPrice && (
                <span className="font-poppins text-xl text-[#FAF7F2]/30 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-900/60 text-red-300 text-xs px-2.5 py-1 rounded-sm font-poppins">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="font-poppins text-xs text-[#FAF7F2]/50 tracking-wider uppercase mb-3">
                Size: <span className="text-[#C8A96B]">{selectedSize}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-sm font-poppins text-sm tracking-wider transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-[#C8A96B] text-[#0F1210] font-semibold'
                        : 'border border-[#C8A96B]/20 text-[#FAF7F2]/60 hover:border-[#C8A96B]/50 hover:text-[#C8A96B]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-poppins text-xs text-[#FAF7F2]/50 tracking-wider uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-[#C8A96B]/20 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-[#FAF7F2]/60 hover:text-[#C8A96B] transition-colors"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-6 py-3 border-x border-[#C8A96B]/20 font-poppins text-[#FAF7F2] min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-[#FAF7F2]/60 hover:text-[#C8A96B] transition-colors"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <motion.button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 ${
                  added
                    ? 'bg-[#3B4A3F] text-[#C8A96B] border border-[#C8A96B]/30'
                    : 'bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] gold-glow-hover'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {added ? <FiCheck size={16} /> : <FiShoppingBag size={16} />}
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </motion.button>
              <Link
                to="/checkout"
                className="flex-1 flex items-center justify-center gap-3 border border-[#C8A96B]/30 hover:border-[#C8A96B] text-[#C8A96B] py-4 px-8 font-poppins text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:bg-[#C8A96B]/5"
              >
                Buy Now
              </Link>
              <button
                onClick={() => toggleWishlist(product)}
                className={`w-14 flex items-center justify-center border rounded-sm transition-all duration-300 ${
                  inWishlist
                    ? 'bg-[#C8A96B]/10 border-[#C8A96B] text-[#C8A96B]'
                    : 'border-[#C8A96B]/20 hover:border-[#C8A96B] text-[#FAF7F2]/50 hover:text-[#C8A96B]'
                }`}
              >
                <FiHeart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🛡️', label: 'Authentic', sub: 'Guaranteed' },
                { icon: '✈️', label: 'Free Shipping', sub: 'Over $200' },
                { icon: '↩️', label: 'Easy Returns', sub: '30 days' },
              ].map(item => (
                <div key={item.label} className="text-center p-3 bg-[#161D18] rounded-lg border border-[#C8A96B]/5">
                  <div className="text-xl mb-1">{item.icon}</div>
                  <p className="font-poppins text-[#FAF7F2]/60 text-xs">{item.label}</p>
                  <p className="font-poppins text-[#C8A96B]/60 text-[10px]">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-20" ref={ref}>
          <div className="flex flex-wrap gap-0 border-b border-[#C8A96B]/10 mb-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-poppins text-xs tracking-wider uppercase border-b-2 -mb-px transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-[#C8A96B] text-[#C8A96B]'
                    : 'border-transparent text-[#FAF7F2]/40 hover:text-[#FAF7F2]/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'description' && (
                <div className="max-w-3xl">
                  <p className="font-poppins text-[#FAF7F2]/60 leading-loose mb-4">{product.description}</p>
                  <p className="font-cairo text-[#FAF7F2]/40 leading-loose text-right">{product.descriptionAr}</p>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
                  {(['top', 'middle', 'base'] as const).map(type => (
                    <div key={type} className="bg-[#161D18] rounded-xl p-6 border border-[#C8A96B]/10">
                      <h4 className="font-poppins text-xs tracking-[0.3em] text-[#C8A96B] uppercase mb-4">
                        {type === 'top' ? '⬆ Top Notes' : type === 'middle' ? '◈ Heart Notes' : '⬇ Base Notes'}
                      </h4>
                      <ul className="space-y-2">
                        {product.notes[type].map(note => (
                          <li key={note} className="font-poppins text-[#FAF7F2]/60 text-sm flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#C8A96B] rounded-full"></span>
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'details' && (
                <div className="max-w-2xl space-y-4">
                  {[
                    { label: 'Concentration', value: 'Eau de Parfum (EDP)' },
                    { label: 'Longevity', value: '12-16 hours' },
                    { label: 'Sillage', value: 'Strong' },
                    { label: 'Season', value: 'All Seasons / Evening' },
                    { label: 'Origin', value: 'Paris, France' },
                    { label: 'Bottle', value: 'Hand-blown crystal glass' },
                  ].map(detail => (
                    <div key={detail.label} className="flex justify-between py-3 border-b border-[#C8A96B]/10">
                      <span className="font-poppins text-xs text-[#C8A96B]/60 tracking-wider uppercase">{detail.label}</span>
                      <span className="font-poppins text-[#FAF7F2]/60 text-sm">{detail.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6 max-w-3xl">
                  {[
                    { name: 'Alexandra M.', rating: 5, comment: 'Absolutely divine. The longevity is incredible — I still get compliments 12 hours later.', date: '2 weeks ago' },
                    { name: 'Omar R.', rating: 5, comment: 'Best fragrance I have ever purchased. Worth every penny. The bottle is also a work of art.', date: '1 month ago' },
                    { name: 'Sophia K.', rating: 4, comment: 'Exquisite scent, very unique. The top notes are incredible. Slightly strong at first but settles beautifully.', date: '2 months ago' },
                  ].map((review, i) => (
                    <div key={i} className="p-6 bg-[#161D18] rounded-xl border border-[#C8A96B]/10">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-poppins text-[#FAF7F2] text-sm font-medium">{review.name}</p>
                          <div className="flex gap-1 mt-1">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <FiStar key={i} size={11} className="star-filled" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <span className="font-poppins text-[#FAF7F2]/20 text-xs">{review.date}</span>
                      </div>
                      <p className="font-poppins text-[#FAF7F2]/50 text-sm leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">You May Also Like</p>
              <h3 className="font-playfair text-3xl text-[#FAF7F2]">Related <span className="italic text-[#C8A96B]">Fragrances</span></h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
