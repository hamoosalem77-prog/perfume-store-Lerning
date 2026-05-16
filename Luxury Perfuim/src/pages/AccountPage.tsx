import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiLock, FiMail, FiEye, FiEyeOff } from 'react-icons/fi';

const AccountPage = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPass, setShowPass] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div className="min-h-screen bg-[#0F1210] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl"
        >
          <div className="text-center mb-12">
            <div className="w-24 h-24 rounded-full bg-[#3B4A3F] border-2 border-[#C8A96B]/40 flex items-center justify-center text-4xl mx-auto mb-6">
              👑
            </div>
            <h2 className="font-playfair text-4xl text-[#FAF7F2] mb-2">Welcome Back</h2>
            <p className="font-poppins text-[#C8A96B]/60 text-sm">{form.email || 'member@elysiannoir.com'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '📦', label: 'My Orders', count: '3 Orders', sub: 'View order history' },
              { icon: '❤️', label: 'Wishlist', count: 'Saved Items', sub: 'View saved fragrances' },
              { icon: '⚙️', label: 'Settings', count: 'Profile', sub: 'Update your details' },
            ].map(item => (
              <div
                key={item.label}
                className="p-6 bg-[#161D18] rounded-xl border border-[#C8A96B]/10 hover:border-[#C8A96B]/30 transition-all cursor-pointer group text-center"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-playfair text-[#FAF7F2] text-lg group-hover:text-[#C8A96B] transition-colors">{item.label}</h4>
                <p className="font-poppins text-[#C8A96B]/50 text-xs mt-1">{item.count}</p>
                <p className="font-poppins text-[#FAF7F2]/20 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setLoggedIn(false)}
              className="font-poppins text-[#FAF7F2]/30 text-sm hover:text-[#C8A96B] transition-colors"
            >
              Sign Out
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F1210] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="font-playfair text-3xl font-semibold tracking-[0.2em] text-[#C8A96B]">ELYSIAN</div>
          <div className="text-[9px] tracking-[0.6em] text-[#FAF7F2]/30 font-poppins uppercase">NOIR</div>
        </div>

        {/* Toggle */}
        <div className="flex mb-8 bg-[#161D18] rounded-sm border border-[#C8A96B]/10 p-1">
          {(['login', 'register'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2.5 font-poppins text-xs tracking-widest uppercase rounded-sm transition-all duration-300 ${
                mode === m
                  ? 'bg-[#C8A96B] text-[#0F1210] font-semibold'
                  : 'text-[#FAF7F2]/40 hover:text-[#FAF7F2]/70'
              }`}
            >
              {m === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          ))}
        </div>

        {/* Form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A96B]/40" size={15} />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-[#161D18] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none pl-11 pr-4 py-4 text-[#FAF7F2] font-poppins text-sm placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors"
                  />
                </div>
              )}

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A96B]/40" size={15} />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-[#161D18] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none pl-11 pr-4 py-4 text-[#FAF7F2] font-poppins text-sm placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors"
                />
              </div>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A96B]/40" size={15} />
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full bg-[#161D18] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none pl-11 pr-11 py-4 text-[#FAF7F2] font-poppins text-sm placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FAF7F2]/30 hover:text-[#C8A96B] transition-colors"
                >
                  {showPass ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>

              {mode === 'login' && (
                <div className="text-right">
                  <button type="button" className="font-poppins text-[#C8A96B]/50 text-xs hover:text-[#C8A96B] transition-colors">
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm transition-colors gold-glow-hover mt-2"
              >
                {mode === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-[#C8A96B]/10" />
              <span className="font-poppins text-[#FAF7F2]/20 text-xs">OR</span>
              <div className="flex-1 h-px bg-[#C8A96B]/10" />
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              {[
                { icon: 'G', label: 'Continue with Google', bg: '#161D18' },
                { icon: 'f', label: 'Continue with Facebook', bg: '#161D18' },
              ].map(btn => (
                <button
                  key={btn.label}
                  type="button"
                  className="w-full flex items-center gap-3 bg-[#161D18] border border-[#C8A96B]/10 hover:border-[#C8A96B]/30 text-[#FAF7F2]/50 hover:text-[#FAF7F2]/70 py-3.5 px-4 rounded-sm font-poppins text-sm transition-all"
                >
                  <span className="font-bold text-[#C8A96B]/60">{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AccountPage;
