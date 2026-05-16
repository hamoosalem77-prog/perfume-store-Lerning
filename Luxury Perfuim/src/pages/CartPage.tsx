import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const shipping = cartTotal >= 200 ? 0 : 25;
  const total = cartTotal + shipping;

  return (
    <div className="min-h-screen bg-[#0F1210] pt-0">
      {/* Header */}
      <div className="py-20 bg-[#0A0E0B] border-b border-[#C8A96B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">Your Selection</p>
          <h1 className="font-playfair text-5xl text-[#FAF7F2]">
            Shopping <span className="italic text-[#C8A96B]">Cart</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {cartItems.length === 0 ? (
          <div className="text-center py-24">
            <FiShoppingBag size={64} className="text-[#C8A96B]/20 mx-auto mb-6" />
            <p className="font-playfair text-3xl text-[#FAF7F2]/40 mb-4">Your cart is empty</p>
            <p className="font-poppins text-[#FAF7F2]/20 text-sm mb-8">Discover our luxury fragrance collection</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-[#C8A96B] text-[#0F1210] px-10 py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm"
            >
              Explore Collection <FiArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.size}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="flex gap-5 p-5 bg-[#161D18] rounded-xl border border-[#C8A96B]/10"
                  >
                    {/* Image */}
                    <Link to={`/product/${item.product.id}`} className="w-24 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-[#0F1210]">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <Link to={`/product/${item.product.id}`} className="font-playfair text-lg text-[#FAF7F2] hover:text-[#C8A96B] transition-colors">
                            {item.product.name}
                          </Link>
                          <p className="font-poppins text-[#C8A96B]/60 text-xs mt-1">Size: {item.size}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-[#FAF7F2]/20 hover:text-red-400 transition-colors flex-shrink-0"
                        >
                          <FiTrash2 size={15} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center gap-0 border border-[#C8A96B]/20 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                            className="px-3 py-2 text-[#FAF7F2]/60 hover:text-[#C8A96B] transition-colors"
                          >
                            <FiMinus size={12} />
                          </button>
                          <span className="px-4 py-2 border-x border-[#C8A96B]/20 font-poppins text-[#FAF7F2] text-sm min-w-[36px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                            className="px-3 py-2 text-[#FAF7F2]/60 hover:text-[#C8A96B] transition-colors"
                          >
                            <FiPlus size={12} />
                          </button>
                        </div>

                        <p className="font-playfair text-xl text-[#C8A96B]">
                          ${item.product.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-[#C8A96B]/60 hover:text-[#C8A96B] font-poppins text-sm transition-colors mt-4"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-[#161D18] rounded-xl border border-[#C8A96B]/10 p-6 sticky top-28">
                <h3 className="font-playfair text-2xl text-[#FAF7F2] mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-poppins text-sm">
                    <span className="text-[#FAF7F2]/50">Subtotal</span>
                    <span className="text-[#FAF7F2]">${cartTotal}</span>
                  </div>
                  <div className="flex justify-between font-poppins text-sm">
                    <span className="text-[#FAF7F2]/50">Shipping</span>
                    <span className={shipping === 0 ? 'text-[#C8A96B]' : 'text-[#FAF7F2]'}>
                      {shipping === 0 ? 'Free' : `$${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-[#C8A96B]/50 text-xs font-poppins">
                      Add ${200 - cartTotal} more for free shipping
                    </p>
                  )}
                </div>

                <div className="luxury-divider mb-6" />

                <div className="flex justify-between mb-8">
                  <span className="font-playfair text-xl text-[#FAF7F2]">Total</span>
                  <span className="font-playfair text-2xl text-[#C8A96B]">${total}</span>
                </div>

                {/* Promo Code */}
                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Promo code..."
                    className="flex-1 bg-[#0F1210] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none px-4 py-2.5 text-[#FAF7F2] font-poppins text-xs placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors"
                  />
                  <button className="border border-[#C8A96B]/30 hover:border-[#C8A96B] text-[#C8A96B] px-4 py-2.5 font-poppins text-xs tracking-wider rounded-sm transition-colors">
                    Apply
                  </button>
                </div>

                <Link
                  to="/checkout"
                  className="w-full flex items-center justify-center gap-3 bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm transition-colors gold-glow-hover"
                >
                  Proceed to Checkout <FiArrowRight />
                </Link>

                {/* Trust badges */}
                <div className="flex justify-center gap-6 mt-6">
                  {['🔒 Secure', '🛡️ Authentic', '↩️ Returns'].map(badge => (
                    <span key={badge} className="font-poppins text-[#FAF7F2]/20 text-[10px]">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
