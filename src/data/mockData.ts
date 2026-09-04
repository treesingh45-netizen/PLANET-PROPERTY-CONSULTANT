import { PropertyItem, ServiceItem, FaqItem, FeatureItem } from '../types';

export const BRAND_INFO = {
  name: 'PLANET PROPERTY CONSULTANT',
  shortName: 'PLANET PROPERTY',
  rating: '5.0',
  ratingStars: 5,
  address: 'Block 11, Gulistan-e-Johar, Karachi, Pakistan',
  city: 'Karachi, Pakistan',
  phone: '+92 336 8213359',
  phoneRaw: '+923368213359',
  email: 'info@planetpropertyconsultant.pk',
  hours: 'Monday - Saturday: 10:00 AM - 8:00 PM',
  logoUrl: 'https://scontent.fkhi21-1.fna.fbcdn.net/v/t39.30808-6/455879352_549735557390630_3174244073543674029_n.jpg?stp=dst-jpg_tt6&cstp=mx959x960&ctp=s959x960&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EgLdGfBa5nYQ7kNvwH8UUQD&_nc_oc=Adpe7z3nJpiJ4PaSWNE-_axs3OVyMWyODj1AYlVf1XiLk8ca3YRZXgbKfK4IZUTsvhE&_nc_zt=23&_nc_ht=scontent.fkhi21-1.fna&_nc_gid=Ox-wgIGYfDj54ZCFx9kXzA&_nc_ss=7b2a8&oh=00_AQL99S0DTfgD5aOvCHka96wG9ecWsxzkN5QsTlthPnYOLA&oe=6AA0DDEB',
  coordinates: {
    lat: 24.9212176,
    lng: 67.1360756,
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.673890255394!2d67.13350077607738!3d24.921217677889395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339933cbe3df1%3A0xfd78f48730ce216d!2sPLANET%20PROPERTY%20CONSULTANT!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  googleMapsLink: 'https://maps.app.goo.gl/3cPjTj3p34g5udyN6'
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'buying',
    number: '01',
    title: 'Property Buying',
    tagline: 'Find the Right Property',
    description: 'Explore property options according to your location, budget and requirements. We guide you through verified listings and neighborhood assessments across Karachi.',
    details: [
      'Comprehensive property requirement analysis',
      'Area-specific market evaluation in Karachi',
      'Due diligence & documentation verification support',
      'Negotiation & closing assistance'
    ],
    iconName: 'key'
  },
  {
    id: 'selling',
    number: '02',
    title: 'Property Selling',
    tagline: 'Sell With Confidence',
    description: 'Get professional guidance when presenting and marketing your property to potential buyers with maximum exposure and smooth deal management.',
    details: [
      'Accurate property market valuation & positioning',
      'Professional presentation & structured buyer outreach',
      'Qualified buyer screening & inquiries handling',
      'Seamless paperwork and transfer guidance'
    ],
    iconName: 'building'
  },
  {
    id: 'investment',
    number: '03',
    title: 'Property Investment',
    tagline: 'Explore Investment Opportunities',
    description: 'Evaluate property opportunities with a focus on your investment requirements and long-term goals for capital appreciation and rental yields.',
    details: [
      'High-growth corridor identification in Karachi',
      'Commercial & residential yield comparisons',
      'Risk assessment and portfolio diversification',
      'Long-term asset appreciation strategy'
    ],
    iconName: 'chart'
  },
  {
    id: 'residential',
    number: '04',
    title: 'Residential Properties',
    tagline: 'Homes & Residential Properties',
    description: 'Explore residential property solutions for individuals, families and buyers seeking modern apartments, townhouses, and family homes.',
    details: [
      'Apartments, penthouses, and independent houses',
      'Family-friendly neighborhoods with prime amenities',
      'Gated community options & secure environments',
      'Direct guidance for first-time home buyers'
    ],
    iconName: 'house'
  },
  {
    id: 'commercial',
    number: '05',
    title: 'Commercial Properties',
    tagline: 'Commercial Property',
    description: 'Discover commercial property opportunities for business and investment requirements, including corporate offices, retail spaces, and plazas.',
    details: [
      'High-visibility commercial retail shops & showrooms',
      'Corporate office suites & business centers',
      'Commercial plots on prime main boulevards',
      'Rental yield analysis for commercial landlords'
    ],
    iconName: 'office'
  },
  {
    id: 'consultation',
    number: '06',
    title: 'Property Consultation',
    tagline: 'Talk Before You Decide',
    description: 'Discuss your requirements with our team before taking your next property step. Gain transparent insights without rushed decisions.',
    details: [
      'One-on-one personalized consultation sessions',
      'Objective evaluation of current market dynamics',
      'Guidance on legal formalities and regulatory steps',
      'Strategic roadmap tailored to your financial goals'
    ],
    iconName: 'conversation'
  }
];

export const PROPERTIES_DATA: PropertyItem[] = [
  {
    id: 'prop-1',
    title: 'Prime Residential Opportunity in Gulistan-e-Johar',
    location: 'Block 11, Gulistan-e-Johar, Karachi',
    category: 'residential',
    categoryLabel: 'Residential',
    type: 'Luxury Apartment / Residence',
    description: 'Exceptional residential opportunity situated in an established neighborhood with seamless connectivity to key transit routes, educational institutions, and lifestyle facilities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    tags: ['Prime Location', 'Block 11', 'Family Friendly', 'Secure Complex'],
    featured: true
  },
  {
    id: 'prop-2',
    title: 'High-Visibility Commercial Boulevard Space',
    location: 'Main Commercial Avenue, Karachi',
    category: 'commercial',
    categoryLabel: 'Commercial',
    type: 'Commercial Retail / Corporate Unit',
    description: 'Strategically positioned commercial space offering prominent frontage and high footfall for corporate offices, retail ventures, or institutional setups.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['Main Road Facing', 'High Footfall', 'Corporate Ready', 'Investment Grade'],
    featured: false
  },
  {
    id: 'prop-3',
    title: 'Strategic Growth Property Investment Opportunity',
    location: 'Emerging Urban Corridor, Karachi',
    category: 'investment',
    categoryLabel: 'Investment',
    type: 'High-Yield Property Asset',
    description: 'Carefully assessed investment avenue situated in an appreciating sector of Karachi, structured for sustainable capital growth and reliable tenancy demand.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    tags: ['Capital Growth', 'High Tenancy Demand', 'Verified Documents'],
    featured: false
  },
  {
    id: 'prop-4',
    title: 'Prime Residential Open Plot Opportunity',
    location: 'Sector 11-A, Gulistan-e-Johar, Karachi',
    category: 'plots',
    categoryLabel: 'Plots',
    type: 'Residential Plot Option',
    description: 'Well-located residential plot opportunity ideal for custom architectural development or long-term family asset planning in a peaceful locale.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['Ready for Construction', 'Clear Boundary', 'Peaceful Enclave'],
    featured: false
  },
  {
    id: 'prop-5',
    title: 'Modern Multi-Storey Commercial Unit',
    location: 'University Road Environs, Karachi',
    category: 'commercial',
    categoryLabel: 'Commercial',
    type: 'Office & Business Space',
    description: 'Premium modern workspace designed with ample elevator access, dedicated parking infrastructure, and uninterrupted utility support.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Parking Included', 'Elevator Access', 'Central Hub'],
    featured: false
  },
  {
    id: 'prop-6',
    title: 'Spacious Multi-Bedroom Executive Residence',
    location: 'Gulistan-e-Johar Enclave, Karachi',
    category: 'residential',
    categoryLabel: 'Residential',
    type: 'Executive Residential Solution',
    description: 'Elegantly proportioned family home featuring contemporary layout ergonomics, well-lit living spaces, and close proximity to markets and parks.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Family Suite', 'Natural Light', 'Gated Community'],
    featured: false
  },
  {
    id: 'prop-7',
    title: 'Commercial Plot on Key Development Arterial',
    location: 'Major Commercial Sector, Karachi',
    category: 'plots',
    categoryLabel: 'Plots',
    type: 'Commercial Plot',
    description: 'High-potential commercial plot positioned near prominent shopping and business centers with wide road access.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Wide Boulevard', 'High Potential', 'Commercial Zone'],
    featured: false
  },
  {
    id: 'prop-8',
    title: 'Long-Term Appreciation Capital Opportunity',
    location: 'Karachi Eastern Bypass Development Area',
    category: 'investment',
    categoryLabel: 'Investment',
    type: 'Development Investment',
    description: 'Targeted for discerning investors seeking early entry into planned master developments with extensive upcoming infrastructure upgrades.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    tags: ['Upcoming Infrastructure', 'Long-term Gains', 'Master Plan'],
    featured: false
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Can you help me find a property in Karachi?',
    answer: 'Yes. We can discuss your requirements and guide you toward suitable property opportunities across residential, commercial, and investment sectors.'
  },
  {
    id: 'faq-2',
    question: 'Do you help property owners sell?',
    answer: 'Yes. We provide property-selling guidance and help connect properties with potential buyers through structured presentation and local market outreach.'
  },
  {
    id: 'faq-3',
    question: 'Do you deal with residential and commercial properties?',
    answer: 'Yes. Our services cover both residential and commercial property requirements, as well as open plots and strategic investment avenues.'
  },
  {
    id: 'faq-4',
    question: 'Can I discuss an investment opportunity?',
    answer: 'Yes. Contact our team to discuss your property investment requirements, risk profile, and preferred time horizon for capital growth or rental returns.'
  },
  {
    id: 'faq-5',
    question: 'Where are you located?',
    answer: 'PLANET PROPERTY CONSULTANT is located at Block 11, Gulistan-e-Johar, Karachi, Pakistan. You are welcome to visit our office or schedule an appointment.'
  },
  {
    id: 'faq-6',
    question: 'How can I contact you?',
    answer: 'You can submit your requirements through our Contact form, chat directly with our online Property Assistant, or visit our office in Block 11, Gulistan-e-Johar, Karachi. For direct telephone inquiries, please refer to our Contact page.'
  }
];

export const WHY_US_FEATURES: FeatureItem[] = [
  {
    title: 'Local Knowledge',
    description: 'Focused on the Karachi property market with deep neighborhood understanding and ongoing ground intelligence.',
    iconName: 'map-pin'
  },
  {
    title: 'Clear Communication',
    description: 'Straightforward information and easy communication without confusing terminology or hidden nuances.',
    iconName: 'message-square'
  },
  {
    title: 'Professional Approach',
    description: 'A structured approach to property requirements, documentation verification, and client confidentiality.',
    iconName: 'shield-check'
  },
  {
    title: 'Customer Focus',
    description: 'Solutions built around the client\'s needs, budget parameters, and lifestyle or business objectives.',
    iconName: 'users'
  },
  {
    title: 'Practical Guidance',
    description: 'Helpful direction before important property decisions to prevent costly errors and ensure sound choices.',
    iconName: 'compass'
  },
  {
    title: 'Long-Term Thinking',
    description: 'Focus on suitable property decisions rather than rushed choices, cultivating lasting client relationships.',
    iconName: 'clock'
  }
];
