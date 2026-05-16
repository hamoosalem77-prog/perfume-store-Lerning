import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const AboutPage = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });

  const values = [
    { icon: '◈', title: 'Artisanal Craft', desc: 'Every fragrance is hand-crafted by master perfumers with decades of expertise.' },
    { icon: '✦', title: 'Rare Ingredients', desc: 'We source only the rarest and most precious ingredients from around the globe.' },
    { icon: '♦', title: 'Timeless Beauty', desc: 'Our designs transcend trends, creating pieces that last a lifetime.' },
    { icon: '◆', title: 'Sustainable Luxury', desc: 'We are committed to ethical sourcing and environmental responsibility.' },
  ];

  const team = [
    { name: 'Isabelle Laurent', role: 'Master Perfumer & Founder', emoji: '👑' },
    { name: 'Marcus Chen', role: 'Head of Creative Direction', emoji: '◈' },
    { name: 'Amira Khalil', role: 'Head of Middle East Collections', emoji: '✦' },
  ];

  return (
    <div className="min-h-screen bg-[#0F1210]">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/brand-story.jpg"
          alt="About Elysian Noir"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1210]/75" />
        <motion.div
          className="relative text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-6">Our Story</p>
          <h1 className="font-playfair text-6xl sm:text-7xl text-[#FAF7F2]">
            About <span className="italic text-[#C8A96B]">Elysian Noir</span>
          </h1>
        </motion.div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center" ref={ref1}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="luxury-divider w-20 mx-auto mb-12" />
          <p className="font-playfair text-2xl sm:text-3xl text-[#FAF7F2]/80 leading-relaxed italic mb-8">
            "We do not create perfumes. We create emotions, memories, and identity."
          </p>
          <p className="font-poppins text-[#C8A96B]/60 text-xs tracking-widest mb-16">— Isabelle Laurent, Founder</p>
          <p className="font-poppins text-[#FAF7F2]/50 text-base leading-loose mb-6">
            Elysian Noir was born in 2009 from a singular obsession: to create fragrances that transcend the ordinary. Founded in the heart of Paris, our atelier brings together master perfumers from France, Lebanon, and India, each contributing their unique heritage to our olfactory tapestry.
          </p>
          <p className="font-poppins text-[#FAF7F2]/40 text-base leading-loose">
            Our name — Elysian Noir — embodies our philosophy. Elysian speaks to the paradise of the senses, while Noir reminds us that the most beautiful things often hide in darkness, waiting to be discovered. Together, they describe the experience of wearing our fragrances: a journey to a private, exquisite world.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="bg-[#0A0E0B] py-24" ref={ref2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">What We Stand For</p>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2]">
              Our <span className="italic text-[#C8A96B]">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="p-8 bg-[#161D18] rounded-xl border border-[#C8A96B]/10 hover:border-[#C8A96B]/30 transition-all duration-500 text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="text-4xl text-[#C8A96B]/30 group-hover:text-[#C8A96B] transition-colors duration-300 mb-6">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl text-[#FAF7F2] mb-4">{value.title}</h3>
                <p className="font-poppins text-[#FAF7F2]/40 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">Our Journey</p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2]">
            The <span className="italic text-[#C8A96B]">Timeline</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px h-full w-px bg-gradient-to-b from-[#C8A96B]/50 via-[#C8A96B]/20 to-transparent" />
          {[
            { year: '2009', event: 'Founded in Paris by Isabelle Laurent', side: 'left' },
            { year: '2012', event: 'Launched the legendary Oriental Collection', side: 'right' },
            { year: '2015', event: 'Opened flagship boutique on Rue du Faubourg', side: 'left' },
            { year: '2018', event: 'Global expansion to 30+ countries', side: 'right' },
            { year: '2021', event: 'Launched sustainable packaging initiative', side: 'left' },
            { year: '2024', event: 'Celebrating 15 years of olfactory excellence', side: 'right' },
          ].map((item) => (
            <div
              key={item.year}
              className={`relative flex items-center mb-12 ${item.side === 'right' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-5/12 ${item.side === 'right' ? 'text-left pl-8' : 'text-right pr-8'}`}>
                <div className="font-playfair text-[#C8A96B] text-xl mb-1">{item.year}</div>
                <p className="font-poppins text-[#FAF7F2]/50 text-sm">{item.event}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C8A96B] rounded-full border-2 border-[#0F1210] z-10" />
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-[#0A0E0B] py-24" ref={ref3}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins text-[#C8A96B] text-xs tracking-[0.5em] uppercase mb-4">The Artisans</p>
            <h2 className="font-playfair text-4xl sm:text-5xl text-[#FAF7F2]">
              Meet Our <span className="italic text-[#C8A96B]">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="text-center p-8 bg-[#161D18] rounded-xl border border-[#C8A96B]/10"
                initial={{ opacity: 0, y: 30 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-full bg-[#3B4A3F] border-2 border-[#C8A96B]/30 flex items-center justify-center text-4xl mx-auto mb-6">
                  {member.emoji}
                </div>
                <h4 className="font-playfair text-xl text-[#FAF7F2] mb-2">{member.name}</h4>
                <p className="font-poppins text-[#C8A96B]/60 text-xs tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center px-4">
        <h2 className="font-playfair text-4xl text-[#FAF7F2] mb-6">
          Begin Your Olfactory <span className="italic text-[#C8A96B]">Journey</span>
        </h2>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 bg-[#C8A96B] hover:bg-[#E0C890] text-[#0F1210] px-12 py-4 font-poppins font-semibold text-sm tracking-[0.2em] uppercase rounded-sm transition-colors gold-glow-hover"
        >
          Explore Collection <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
