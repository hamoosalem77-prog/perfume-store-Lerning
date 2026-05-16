import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShoppingBag, FiTrash2, FiArrowRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const WishlistPage = () => {
  const { wishlistItems, toggleWishlist, addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#0F1210]">
      <div className="py-20 bg-[#0A0E0B] border-b border-[#C8A96B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">Saved Items</p>
          <h1 className="font-playfair text-5xl text-[#FAF7F2]">
            My <span className="italic text-[#C8A96B]">Wishlist</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-24">
            <FiHeart size={64} className="text-[#C8A96B]/20 mx-auto mb-6" />
            <p className="font-playfair text-3xl text-[#FAF7F2]/40 mb-4">Your wishlist is empty</p>
            <p className="font-poppins text-[#FAF7F2]/20 text-sm mb-8">Save your favorite fragrances for later</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-[#C8A96B] text-[#0F1210] px-10 py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm"
            >
              Browse Collection <FiArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence>
              {wishlistItems.map(({ product }, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-[#161D18] rounded-xl overflow-hidden border border-[#C8A96B]/10"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-playfair text-[#FAF7F2] group-hover:text-[#C8A96B] transition-colors">{product.name}</h3>
                      <p className="font-poppins text-[#C8A96B] text-sm mt-1">${product.price}</p>
                    </div>
                  </Link>

                  <div className="p-4 pt-0 flex gap-2">
                    <button
                      onClick={() => addToCart(product, product.sizes[0])}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] py-2.5 rounded-sm font-poppins text-xs font-semibold tracking-wider transition-colors"
                    >
                      <FiShoppingBag size={13} />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="w-10 flex items-center justify-center border border-[#C8A96B]/20 hover:border-red-500/50 text-[#FAF7F2]/40 hover:text-red-400 rounded-sm transition-colors"
                    >
                      <FiTrash2 size={13} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
