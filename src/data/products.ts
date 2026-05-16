export interface Product {
  id: number;
  name: string;
  nameAr: string;
  category: 'men' | 'women' | 'oriental' | 'limited';
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  sizes: string[];
  description: string;
  descriptionAr: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  isBestSeller?: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Noir Obsidian',
    nameAr: 'نوار أوبسيديان',
    category: 'men',
    price: 420,
    originalPrice: 520,
    image: '/images/product-1.jpg',
    images: ['/images/product-1.jpg', '/images/hero-bg.jpg'],
    rating: 4.9,
    reviews: 234,
    sizes: ['30ml', '50ml', '100ml'],
    description: 'A bold masterpiece crafted for the distinguished man. Noir Obsidian opens with a burst of smoky bergamot, evolving into a heart of oud and leather, resting on a deep base of amber and musk.',
    descriptionAr: 'تحفة فنية جريئة مصممة للرجل المتميز. يفتح نوار أوبسيديان بانفجار من البرغموت المدخن، ثم يتطور إلى قلب من العود والجلد، ليستقر على قاعدة عميقة من العنبر والمسك.',
    notes: {
      top: ['Bergamot', 'Black Pepper', 'Cardamom'],
      middle: ['Oud', 'Leather', 'Rose'],
      base: ['Amber', 'Musk', 'Vetiver'],
    },
    isBestSeller: true,
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Rose Ethereal',
    nameAr: 'روز إيثيريال',
    category: 'women',
    price: 380,
    image: '/images/product-2.jpg',
    images: ['/images/product-2.jpg', '/images/collection-women.jpg'],
    rating: 4.8,
    reviews: 189,
    sizes: ['30ml', '50ml', '100ml'],
    description: 'An ethereal journey through fields of Bulgarian roses, kissed by morning dew. A timeless feminine fragrance that embodies grace and elegance in every drop.',
    descriptionAr: 'رحلة أثيرية عبر حقول الورد البلغاري، التي تقبّلها ندى الصباح. عطر أنثوي خالد يجسد الرقة والأناقة في كل قطرة.',
    notes: {
      top: ['Pink Pepper', 'Lemon', 'Peach'],
      middle: ['Bulgarian Rose', 'Jasmine', 'Iris'],
      base: ['Sandalwood', 'White Musk', 'Vanilla'],
    },
    isBestSeller: true,
    isNew: true,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Oud Al Malik',
    nameAr: 'عود الملك',
    category: 'oriental',
    price: 650,
    image: '/images/product-3.jpg',
    images: ['/images/product-3.jpg', '/images/collection-oriental.jpg'],
    rating: 5.0,
    reviews: 312,
    sizes: ['50ml', '100ml', '200ml'],
    description: 'The crown jewel of our oriental collection. Oud Al Malik is a majestic blend of the finest Arabian oud, rare saffron, and precious ambergris — a fragrance fit for royalty.',
    descriptionAr: 'جوهرة تاج مجموعتنا الشرقية. عود الملك هو مزيج مهيب من أجود عود عربي ونادر زعفران وعنبر ثمين — عطر يليق بالملوك.',
    notes: {
      top: ['Saffron', 'Rose', 'Bergamot'],
      middle: ['Oud', 'Incense', 'Geranium'],
      base: ['Ambergris', 'Amber', 'Musk'],
    },
    isBestSeller: true,
    badge: 'Royal',
  },
  {
    id: 4,
    name: 'Shadow Velvet',
    nameAr: 'شادو فيلفيت',
    category: 'limited',
    price: 890,
    image: '/images/product-4.jpg',
    images: ['/images/product-4.jpg', '/images/collection-limited.jpg'],
    rating: 4.9,
    reviews: 87,
    sizes: ['100ml'],
    description: 'A rare limited edition masterpiece. Shadow Velvet is a dark, velvety composition that whispers of mystery and luxury, available in only 1000 numbered bottles worldwide.',
    descriptionAr: 'تحفة فنية نادرة من الإصدار المحدود. شادو فيلفيت هو تركيبة داكنة ومخملية تهمس بالغموض والفخامة، متاح في 1000 زجاجة مرقمة فقط في جميع أنحاء العالم.',
    notes: {
      top: ['Dark Plum', 'Champagne', 'Bergamot'],
      middle: ['Orris', 'Jasmine Absolute', 'Dark Rose'],
      base: ['Patchouli', 'Ambergris', 'Black Musk'],
    },
    isBestSeller: false,
    badge: 'Limited',
  },
  {
    id: 5,
    name: 'Cedar Monarch',
    nameAr: 'سيدار موناك',
    category: 'men',
    price: 340,
    image: '/images/product-1.jpg',
    images: ['/images/product-1.jpg'],
    rating: 4.7,
    reviews: 156,
    sizes: ['30ml', '50ml', '100ml'],
    description: 'A commanding presence of cedar wood and tobacco, balanced with fresh citrus and warm spices. The fragrance of a leader.',
    descriptionAr: 'حضور قوي من خشب الأرز والتبغ، متوازن مع الحمضيات الطازجة والتوابل الدافئة. عطر القائد.',
    notes: {
      top: ['Grapefruit', 'Ginger', 'Nutmeg'],
      middle: ['Cedar', 'Tobacco', 'Vetiver'],
      base: ['Benzoin', 'Amber', 'Dark Musk'],
    },
    isBestSeller: false,
    isOnSale: true,
    badge: 'Sale',
  },
  {
    id: 6,
    name: 'Bleu de Nuit',
    nameAr: 'بلو دو نيت',
    category: 'women',
    price: 460,
    image: '/images/product-2.jpg',
    images: ['/images/product-2.jpg'],
    rating: 4.8,
    reviews: 203,
    sizes: ['30ml', '50ml', '100ml'],
    description: 'A nocturnal voyage through midnight gardens. Blue de Nuit captures the intoxicating scent of night-blooming flowers under a starlit sky.',
    descriptionAr: 'رحلة ليلية عبر حدائق منتصف الليل. يلتقط بلو دو نيت الرائحة المسكرة لزهور تتفتح في الليل تحت سماء مرصعة بالنجوم.',
    notes: {
      top: ['Midnight Jasmine', 'Cool Bergamot', 'Marine'],
      middle: ['Iris', 'Tuberose', 'Violet'],
      base: ['Blue Musk', 'Cedarwood', 'Cashmeran'],
    },
    isBestSeller: true,
    badge: 'Best Seller',
  },
  {
    id: 7,
    name: 'Amber Seduction',
    nameAr: 'أمبر سيدكشن',
    category: 'oriental',
    price: 520,
    image: '/images/product-3.jpg',
    images: ['/images/product-3.jpg'],
    rating: 4.9,
    reviews: 178,
    sizes: ['50ml', '100ml'],
    description: 'A seductive oriental composition with rich amber and exotic spices, creating an irresistible aura of warmth and sensuality.',
    descriptionAr: 'تركيبة شرقية مغرية مع عنبر غني وتوابل غريبة، تخلق هالة لا تقاوم من الدفء والحسية.',
    notes: {
      top: ['Cinnamon', 'Star Anise', 'Cardamom'],
      middle: ['Amber', 'Myrrh', 'Labdanum'],
      base: ['Oud', 'Sandalwood', 'Vanilla'],
    },
    isBestSeller: false,
    isNew: true,
    badge: 'New',
  },
  {
    id: 8,
    name: 'Crystal Elixir',
    nameAr: 'كريستال إليكسير',
    category: 'limited',
    price: 1200,
    image: '/images/product-4.jpg',
    images: ['/images/product-4.jpg'],
    rating: 5.0,
    reviews: 45,
    sizes: ['100ml'],
    description: 'The pinnacle of perfumery. Crystal Elixir is adorned with Swarovski crystals and contains the world\'s rarest ingredients, making it the ultimate luxury statement.',
    descriptionAr: 'قمة صناعة العطور. كريستال إليكسير مزين بكريستال سواروفسكي ويحتوي على أندر مكونات العالم، مما يجعله البيان النهائي للفخامة.',
    notes: {
      top: ['Neroli', 'Champagne', 'Pink Pepper'],
      middle: ['Absolute Rose', 'Ylang Ylang', 'Peony'],
      base: ['Ambergris', 'White Oud', 'Musk'],
    },
    isBestSeller: false,
    badge: 'Exclusive',
  },
];

export const categories = [
  { id: 'all', name: 'All', nameAr: 'الكل' },
  { id: 'men', name: "Men's", nameAr: 'رجالي' },
  { id: 'women', name: "Women's", nameAr: 'نسائي' },
  { id: 'oriental', name: 'Oriental', nameAr: 'شرقي' },
  { id: 'limited', name: 'Limited', nameAr: 'محدود' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Al-Rashidi',
    nameAr: 'سارة الراشدي',
    role: 'Luxury Lifestyle Blogger',
    rating: 5,
    comment: 'Elysian Noir has completely changed my understanding of luxury fragrances. The Oud Al Malik is absolutely divine — I receive compliments everywhere I go.',
    commentAr: 'غيّرت إليسيان نوار فهمي تمامًا لعطور الفخامة. عود الملك رائع بشكل مطلق — أتلقى المجاملات في كل مكان أذهب إليه.',
    avatar: '👑',
  },
  {
    id: 2,
    name: 'Mohammed Al-Farsi',
    nameAr: 'محمد الفارسي',
    role: 'Business Executive',
    rating: 5,
    comment: 'Noir Obsidian is my signature scent. The quality, the longevity, and the sheer sophistication are unmatched. Worth every single penny.',
    commentAr: 'نوار أوبسيديان هو عطري المميز. الجودة والثبات والتطور لا مثيل لها. يستحق كل فلس.',
    avatar: '✦',
  },
  {
    id: 3,
    name: 'Layla Mansouri',
    nameAr: 'ليلى منصوري',
    role: 'Fashion Designer',
    rating: 5,
    comment: 'Rose Ethereal is like wearing a dream. The artistry behind each bottle is breathtaking — truly a masterpiece in every sense of the word.',
    commentAr: 'روز إيثيريال مثل ارتداء حلم. الفن وراء كل زجاجة مذهل — تحفة فنية حقيقية بكل معنى الكلمة.',
    avatar: '♦',
  },
  {
    id: 4,
    name: 'Ahmed Khalil',
    nameAr: 'أحمد خليل',
    role: 'Art Collector',
    rating: 5,
    comment: 'The Shadow Velvet Limited Edition is not just a perfume — it\'s a collector\'s item. The bottle design alone is a work of art.',
    commentAr: 'شادو فيلفيت الإصدار المحدود ليس مجرد عطر — إنه قطعة للمجموعات. تصميم الزجاجة وحده تحفة فنية.',
    avatar: '◈',
  },
];
