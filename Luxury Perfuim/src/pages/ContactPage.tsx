import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook, FiCheck } from 'react-icons/fi';

const ContactPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0F1210]">
      {/* Header */}
      <div className="relative py-24 bg-[#0A0E0B] border-b border-[#C8A96B]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/brand-story.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0A0E0B]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">Get in Touch</p>
          <h1 className="font-playfair text-5xl sm:text-6xl text-[#FAF7F2]">
            Contact <span className="italic text-[#C8A96B]">Us</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-6">Visit Our Atelier</p>
            <h2 className="font-playfair text-4xl text-[#FAF7F2] mb-8 leading-tight">
              We'd Love to Hear<br />
              <span className="italic text-[#C8A96B]">From You</span>
            </h2>
            <p className="font-poppins text-[#FAF7F2]/40 text-base leading-loose mb-12">
              Whether you're seeking the perfect fragrance for yourself or a gift, our olfactory consultants are here to guide you on your scent journey.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: FiMapPin,
                  title: 'Our Atelier',
                  lines: ['Boulevard Haussmann 142', 'Paris, 75008, France'],
                },
                {
                  icon: FiPhone,
                  title: 'Call Us',
                  lines: ['+33 1 23 45 67 89', 'Mon–Fri: 9am – 7pm CET'],
                },
                {
                  icon: FiMail,
                  title: 'Write to Us',
                  lines: ['hello@elysiannoir.com', 'We respond within 24 hours'],
                },
              ].map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3B4A3F]/40 border border-[#C8A96B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#C8A96B]" />
                  </div>
                  <div>
                    <p className="font-poppins text-[#C8A96B] text-xs tracking-wider uppercase mb-1">{title}</p>
                    {lines.map(line => (
                      <p key={line} className="font-poppins text-[#FAF7F2]/50 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-12">
              <p className="font-poppins text-[#FAF7F2]/20 text-xs tracking-widest uppercase mb-4">Follow Our Journey</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: FiInstagram, href: 'https://instagram.com', label: '@elysiannoir' },
                  { icon: FiTwitter, href: 'https://twitter.com', label: '@elysiannoir' },
                  { icon: FiFacebook, href: 'https://facebook.com', label: 'Elysian Noir' },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 text-[#FAF7F2]/30 hover:text-[#C8A96B] transition-colors"
                  >
                    <div className="w-9 h-9 border border-[#C8A96B]/20 group-hover:border-[#C8A96B] rounded-full flex items-center justify-center transition-colors">
                      <Icon size={14} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-[#161D18] rounded-2xl border border-[#C8A96B]/10 p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Your Name', placeholder: 'Alexandre Dubois' },
                      { name: 'email', label: 'Email', placeholder: 'hello@example.com', type: 'email' },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block font-poppins text-xs text-[#C8A96B]/60 tracking-wider uppercase mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type || 'text'}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full bg-[#0F1210] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none px-4 py-3.5 text-[#FAF7F2] font-poppins text-sm placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block font-poppins text-xs text-[#C8A96B]/60 tracking-wider uppercase mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-[#0F1210] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none px-4 py-3.5 text-[#FAF7F2]/70 font-poppins text-sm rounded-sm transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="fragrance">Fragrance Consultation</option>
                      <option value="order">Order Inquiry</option>
                      <option value="gift">Gift & Personalization</option>
                      <option value="wholesale">Wholesale Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-poppins text-xs text-[#C8A96B]/60 tracking-wider uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      required
                      className="w-full bg-[#0F1210] border border-[#C8A96B]/20 focus:border-[#C8A96B] outline-none px-4 py-3.5 text-[#FAF7F2] font-poppins text-sm placeholder:text-[#FAF7F2]/20 rounded-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm transition-colors gold-glow-hover"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#3B4A3F] flex items-center justify-center text-[#C8A96B] mb-6">
                    <FiCheck size={28} />
                  </div>
                  <h3 className="font-playfair text-2xl text-[#FAF7F2] mb-3">Message Sent</h3>
                  <p className="font-poppins text-[#FAF7F2]/40 text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
