import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingBag, FiEye, FiStar } from 'react-icons/fi';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-[#C8A96B] text-[#0F1210]',
  'New': 'bg-[#3B4A3F] text-[#C8A96B] border border-[#C8A96B]/30',
  'Royal': 'bg-gradient-to-r from-[#C8A96B] to-[#E0C890] text-[#0F1210]',
  'Limited': 'bg-[#FAF7F2]/10 text-[#FAF7F2] border border-[#FAF7F2]/20',
  'Sale': 'bg-red-900/80 text-red-200',
  'Exclusive': 'bg-[#2A3530] text-[#C8A96B] border border-[#C8A96B]/40',
};

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.sizes[0]);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <motion.div
      className="product-card group relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl bg-[#161D18] aspect-[3/4]">
          {/* Badge */}
          {product.badge && (
            <div className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-poppins font-semibold tracking-wider rounded-sm ${badgeColors[product.badge] || 'bg-[#C8A96B] text-[#0F1210]'}`}>
              {product.badge}
            </div>
          )}

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="product-image w-full h-full object-cover transition-transform duration-700"
          />

          {/* Hover Overlay */}
          <div className="product-overlay absolute inset-0 bg-gradient-to-t from-[#0F1210]/90 via-[#0F1210]/20 to-transparent opacity-0 transition-opacity duration-400 flex flex-col justify-end p-4">
            <div className="space-y-2">
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] py-2.5 px-4 rounded-lg text-sm font-poppins font-semibold tracking-wider transition-colors duration-200"
              >
                <FiShoppingBag size={15} />
                Add to Cart
              </button>
              <Link
                to={`/product/${product.id}`}
                className="w-full flex items-center justify-center gap-2 border border-[#FAF7F2]/20 hover:border-[#C8A96B]/50 text-[#FAF7F2]/80 hover:text-[#C8A96B] py-2.5 px-4 rounded-lg text-sm font-poppins tracking-wider transition-colors duration-200"
              >
                <FiEye size={15} />
                Quick View
              </Link>
            </div>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              inWishlist
                ? 'bg-[#C8A96B] text-[#0F1210]'
                : 'bg-[#0F1210]/60 text-[#FAF7F2]/60 hover:bg-[#0F1210]/80 hover:text-[#C8A96B] opacity-0 group-hover:opacity-100'
            }`}
          >
            <FiHeart size={15} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Product Info */}
        <div className="pt-4 space-y-1.5">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              />
            ))}
            <span className="text-[#FAF7F2]/30 text-xs font-poppins ml-1">({product.reviews})</span>
          </div>
          <h3 className="font-playfair text-base text-[#FAF7F2] group-hover:text-[#C8A96B] transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[#C8A96B] font-poppins font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-[#FAF7F2]/30 text-sm font-poppins line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
