import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiLock } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const steps = ['Shipping', 'Payment', 'Review'];

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', country: '', zip: '',
    cardNumber: '', cardName: '', expiry: '', cvv: '',
  });

  const shipping = cartTotal >= 200 ? 0 : 25;
  const total = cartTotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(p => p + 1);
    else {
      setOrderPlaced(true);
      clearCart();
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#0F1210] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <motion.div
            className="w-24 h-24 bg-[#3B4A3F] border-2 border-[#C8A96B] rounded-full flex items-center justify-center mx-auto mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FiCheck size={40} className="text-[#C8A96B]" />
          </motion.div>
          <h2 className="font-playfair text-4xl text-[#FAF7F2] mb-4">Order Confirmed</h2>
          <p className="font-poppins text-[#FAF7F2]/40 mb-2 text-sm">
            Thank you for your order. Your luxury fragrances are being prepared with the utmost care.
          </p>
          <p className="font-poppins text-[#C8A96B]/60 text-xs mb-10">Order #EN-{Math.floor(Math.random() * 100000)}</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-[#C8A96B] text-[#0F1210] px-10 py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F1210]">
      <div className="py-16 bg-[#0A0E0B] border-b border-[#C8A96B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl text-[#FAF7F2]">
            Secure <span className="italic text-[#C8A96B]">Checkout</span>
          </h1>
          {/* Steps */}
          <div className="flex items-center justify-center gap-0 mt-8">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-sm font-poppins text-xs tracking-wider transition-all ${
                  i <= currentStep ? 'text-[#C8A96B]' : 'text-[#FAF7F2]/20'
                }`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border ${
                    i < currentStep ? 'bg-[#C8A96B] border-[#C8A96B] text-[#0F1210]' :
                    i === currentStep ? 'border-[#C8A96B] text-[#C8A96B]' : 'border-[#FAF7F2]/10 text-[#FAF7F2]/20'
                  }`}>
                    {i < currentStep ? <FiCheck size={10} /> : i + 1}
                  </div>
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-12 h-px ${i < currentStep ? 'bg-[#C8A96B]/50' : 'bg-[#C8A96B]/10'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-playfair text-2xl text-[#FAF7F2] mb-8">Shipping Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'firstName', label: 'First Name', placeholder: 'Alexandre' },
                      { name: 'lastName', label: 'Last Name', placeholder: 'Dubois' },
                      { name: 'email', label: 'Email', placeholder: 'hello@example.com', type: 'email' },
                      { name: 'phone', label: 'Phone', placeholder: '+1 234 567 8900', type: 'tel' },
                      { name: 'address', label: 'Address', placeholder: '123 Rue de la Paix' },
                      { name: 'city', label: 'City', placeholder: 'Paris' },
                      { name: 'country', label: 'Country', placeholder: 'France' },
                      { name: 'zip', label: 'ZIP Code', placeholder: '75001' },
                    ].map(field => (
                      <div key={field.name} className={field.name === 'address' ? 'sm:col-span-2' : ''}>
                        <label className="block font-poppins text-xs text-[#C8A96B]/60 tracking-wider uppercase mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type || 'text'}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full bg-[#161D18] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none px-4 py-3.5 text-[#FAF7F2] font-poppins text-sm placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-playfair text-2xl text-[#FAF7F2] mb-8">Payment Information</h3>
                  <div className="p-4 bg-[#3B4A3F]/20 border border-[#C8A96B]/20 rounded-sm mb-6 flex items-center gap-3">
                    <FiLock size={14} className="text-[#C8A96B]" />
                    <span className="font-poppins text-xs text-[#FAF7F2]/50">Your payment information is encrypted and secure.</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'cardNumber', label: 'Card Number', placeholder: '•••• •••• •••• 1234', colSpan: true },
                      { name: 'cardName', label: 'Cardholder Name', placeholder: 'Alexandre Dubois', colSpan: true },
                      { name: 'expiry', label: 'Expiry Date', placeholder: 'MM / YY', colSpan: false },
                      { name: 'cvv', label: 'CVV', placeholder: '•••', colSpan: false },
                    ].map(field => (
                      <div key={field.name} className={field.colSpan ? '' : 'inline-block w-[calc(50%-8px)] mr-4 last:mr-0'}>
                        <label className="block font-poppins text-xs text-[#C8A96B]/60 tracking-wider uppercase mb-2">
                          {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full bg-[#161D18] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none px-4 py-3.5 text-[#FAF7F2] font-poppins text-sm placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-playfair text-2xl text-[#FAF7F2] mb-8">Review Your Order</h3>
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-4 p-4 bg-[#161D18] rounded-xl border border-[#C8A96B]/10">
                        <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="font-playfair text-[#FAF7F2] text-lg">{item.product.name}</p>
                          <p className="font-poppins text-[#C8A96B]/60 text-xs">{item.size} × {item.quantity}</p>
                        </div>
                        <p className="font-playfair text-[#C8A96B]">${item.product.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-[#161D18] rounded-xl border border-[#C8A96B]/10 space-y-2">
                    <div className="flex justify-between font-poppins text-sm">
                      <span className="text-[#FAF7F2]/40">Shipping to:</span>
                      <span className="text-[#FAF7F2]/70">{form.city || 'N/A'}, {form.country || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between font-poppins text-sm">
                      <span className="text-[#FAF7F2]/40">Payment:</span>
                      <span className="text-[#FAF7F2]/70">Card ending {form.cardNumber.slice(-4) || '****'}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-4 mt-8">
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(p => p - 1)}
                  className="border border-[#C8A96B]/20 hover:border-[#C8A96B] text-[#FAF7F2]/60 hover:text-[#C8A96B] px-8 py-3.5 font-poppins text-sm tracking-wider uppercase rounded-sm transition-all"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex-1 bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] py-3.5 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm transition-colors gold-glow-hover"
              >
                {currentStep < 2 ? 'Continue' : 'Place Order'}
              </button>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-[#161D18] rounded-xl border border-[#C8A96B]/10 p-6 sticky top-28">
              <h3 className="font-playfair text-xl text-[#FAF7F2] mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                {cartItems.map(item => (
                  <div key={`${item.product.id}-${item.size}`} className="flex justify-between text-sm font-poppins">
                    <span className="text-[#FAF7F2]/40 truncate mr-4">{item.product.name} ×{item.quantity}</span>
                    <span className="text-[#FAF7F2]/70 whitespace-nowrap">${item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="luxury-divider mb-4" />
              <div className="flex justify-between font-poppins text-sm mb-2">
                <span className="text-[#FAF7F2]/40">Shipping</span>
                <span className={shipping === 0 ? 'text-[#C8A96B]' : 'text-[#FAF7F2]/70'}>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-playfair text-[#FAF7F2]">Total</span>
                <span className="font-playfair text-xl text-[#C8A96B]">${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
