// Brand Colors
export const BRAND_COLORS = {
  antiquelace: '#E8E1D1',
  deepumber: '#4B342C',
  rosyblush: '#C38380',
  rosetaupe: '#9C7164',
  softpeach: '#D8B69F',
} as const

// Typography
export const TYPOGRAPHY = {
  serif: 'font-serif',
  sans: 'font-sans',
} as const

// Animation Durations (in ms)
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 800,
} as const

// Sample Data for Influencer Analysis
export const SAMPLE_INFLUENCERS = [
  {
    id: 1,
    name: 'Emma',
    handle: '@secrets.of.makeup',
    followers: 6793,
    engagement: 0.57,
    category: 'Beauty',
    description: 'Selected for her exceptional 8.2% engagement rate and high affinity with the 18-24 demographic.',
  },
  {
    id: 2,
    name: 'Saif',
    handle: '@alsiafy',
    followers: 1053,
    engagement: 0.68,
    category: 'Fashion ',
    description: 'Chosen for his massive reach in the tech sector and consistent content quality scores.',
  },
  {
    id: 3,
    name: 'Algeria',
    handle: '@algeria.now',
    followers: 49495,
    engagement: 0.87,
    category: 'Photography & Tourism',
    description: 'Perfect fit for wellness campaigns with a highly active community and authentic storytelling.',
  },
  {
    id: 4,
    name: 'Audrey Huber',
    handle: '@mrsaudreyhuber',
    followers: 2138,
    engagement: 0.68,
    category: 'Family',
    description: 'Offers broad international reach and visually stunning content that drives high share rates.',
  },
  {
    id: 5,
    name: 'Nata Albot',
    handle: '@nataalbot',
    followers: 42994,
    engagement: 0.68,
    category: 'Food',
    description: 'Known for honest product reviews and a loyal community that trusts her recommendations.',
  },
  {
    id: 6,
    name: 'Tyler Brooks',
    handle: '@tylerbrooks',
    followers: 510000,
    engagement: 6.5,
    category: 'Fitness & Sports',
    description: 'High-energy content creator with strong brand recall and excellent conversion rates.',
  },
  {
    id: 7,
    name: 'Amara Osei',
    handle: '@amaraosei',
    followers: 290000,
    engagement: 9.1,
    category: 'Food & Cooking',
    description: 'Exceptionally high engagement driven by relatable, creative recipe content.',
  },
  {
    id: 8,
    name: 'Liam Nakamura',
    handle: '@liamnaka',
    followers: 445000,
    engagement: 5.9,
    category: 'Gaming & Esports',
    description: 'Commands a dedicated gaming audience with consistent viewership and live-stream metrics.',
  },
  {
    id: 9,
    name: 'Sofia Petrova',
    handle: '@sofiapetrova',
    followers: 375000,
    engagement: 7.0,
    category: 'Art & Design',
    description: 'Visually distinctive feed that appeals to creative professionals and design enthusiasts.',
  },
  {
    id: 10,
    name: 'David Kim',
    handle: '@davidkim',
    followers: 620000,
    engagement: 6.3,
    category: 'Finance & Business',
    description: 'Trusted voice in personal finance with high credibility and an educated audience base.',
  },
]

export const INFLUENCER_HISTORY_DATA = {
  1: {
    ...SAMPLE_INFLUENCERS[0],
    location: 'New York, USA',
    joinDate: 'March 2019',
    avgReach: '850K',
    collaborations: [
      {
        id: 101,
        brandName: 'Urban Outfitters',
        brandLogo: 'UO',
        campaignType: 'Seasonal Lookbook',
        date: '2023-11-15',
        reach: '1.2M',
        engagement: 9.5,
        conversions: 450,
        sentiment: 92,
        year: 2023
      },
      {
        id: 102,
        brandName: 'Glossier',
        brandLogo: 'GL',
        campaignType: 'Product Launch',
        date: '2023-08-22',
        reach: '980K',
        engagement: 8.8,
        conversions: 320,
        sentiment: 88,
        year: 2023
      },
      {
        id: 103,
        brandName: 'Revolve',
        brandLogo: 'RV',
        campaignType: 'Summer Collection',
        date: '2022-06-10',
        reach: '850K',
        engagement: 7.9,
        conversions: 210,
        sentiment: 85,
        year: 2022
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 210000 },
      { month: 'Feb', followers: 215000 },
      { month: 'Mar', followers: 222000 },
      { month: 'Apr', followers: 228000 },
      { month: 'May', followers: 235000 },
      { month: 'Jun', followers: 245000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 7.2 },
      { campaign: 'C2', rate: 8.5 },
      { campaign: 'C3', rate: 7.9 },
      { campaign: 'C4', rate: 9.1 },
      { campaign: 'C5', rate: 8.2 },
    ]
  },
  2: {
    ...SAMPLE_INFLUENCERS[1],
    location: 'San Francisco, USA',
    joinDate: 'January 2018',
    avgReach: '1.5M',
    collaborations: [
      {
        id: 201,
        brandName: 'Samsung',
        brandLogo: 'SM',
        campaignType: 'Tech Review',
        date: '2023-12-05',
        reach: '2.1M',
        engagement: 5.8,
        conversions: 890,
        sentiment: 89,
        year: 2023
      },
      {
        id: 202,
        brandName: 'Logitech',
        brandLogo: 'LG',
        campaignType: 'Setup Tour',
        date: '2023-09-15',
        reach: '1.8M',
        engagement: 6.2,
        conversions: 550,
        sentiment: 94,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 520000 },
      { month: 'Feb', followers: 535000 },
      { month: 'Mar', followers: 550000 },
      { month: 'Apr', followers: 565000 },
      { month: 'May', followers: 578000 },
      { month: 'Jun', followers: 589000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 5.2 },
      { campaign: 'C2', rate: 5.9 },
      { campaign: 'C3', rate: 6.1 },
      { campaign: 'C4', rate: 5.6 },
    ]
  },
  3: {
    ...SAMPLE_INFLUENCERS[2],
    location: 'Austin, USA',
    joinDate: 'June 2020',
    avgReach: '600K',
    collaborations: [
      {
        id: 301,
        brandName: 'Athleta',
        brandLogo: 'AT',
        campaignType: 'Yoga Series',
        date: '2023-09-10',
        reach: '550K',
        engagement: 8.1,
        conversions: 280,
        sentiment: 95,
        year: 2023
      },
      {
        id: 302,
        brandName: 'Whole Foods',
        brandLogo: 'WF',
        campaignType: 'Healthy Eating',
        date: '2023-05-20',
        reach: '480K',
        engagement: 7.5,
        conversions: 190,
        sentiment: 90,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 380000 },
      { month: 'Feb', followers: 390000 },
      { month: 'Mar', followers: 395000 },
      { month: 'Apr', followers: 400000 },
      { month: 'May', followers: 405000 },
      { month: 'Jun', followers: 412000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 6.8 },
      { campaign: 'C2', rate: 7.2 },
      { campaign: 'C3', rate: 7.0 },
      { campaign: 'C4', rate: 7.4 },
    ]
  },
  4: {
    ...SAMPLE_INFLUENCERS[3],
    location: 'London, UK',
    joinDate: 'Available since 2019',
    avgReach: '950K',
    collaborations: [
      {
        id: 401,
        brandName: 'The North Face',
        brandLogo: 'NF',
        campaignType: 'Winter Expedition',
        date: '2023-11-01',
        reach: '1.5M',
        engagement: 6.8,
        conversions: 600,
        sentiment: 93,
        year: 2023
      },
      {
        id: 402,
        brandName: 'Airbnb',
        brandLogo: 'AB',
        campaignType: 'Unique Stays',
        date: '2023-07-15',
        reach: '1.2M',
        engagement: 6.0,
        conversions: 450,
        sentiment: 88,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 600000 },
      { month: 'Feb', followers: 615000 },
      { month: 'Mar', followers: 630000 },
      { month: 'Apr', followers: 650000 },
      { month: 'May', followers: 665000 },
      { month: 'Jun', followers: 678000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 5.5 },
      { campaign: 'C2', rate: 5.8 },
      { campaign: 'C3', rate: 6.2 },
      { campaign: 'C4', rate: 6.1 },
    ]
  },
  5: {
    ...SAMPLE_INFLUENCERS[4],
    location: 'Mumbai, India',
    joinDate: 'September 2020',
    avgReach: '500K',
    collaborations: [
      {
        id: 501,
        brandName: 'Nykaa',
        brandLogo: 'NK',
        campaignType: 'Skincare Routine',
        date: '2023-10-12',
        reach: '620K',
        engagement: 8.0,
        conversions: 310,
        sentiment: 91,
        year: 2023
      },
      {
        id: 502,
        brandName: 'The Body Shop',
        brandLogo: 'BS',
        campaignType: 'Clean Beauty',
        date: '2023-04-18',
        reach: '480K',
        engagement: 7.6,
        conversions: 240,
        sentiment: 87,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 280000 },
      { month: 'Feb', followers: 290000 },
      { month: 'Mar', followers: 298000 },
      { month: 'Apr', followers: 305000 },
      { month: 'May', followers: 312000 },
      { month: 'Jun', followers: 320000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 7.0 },
      { campaign: 'C2', rate: 7.5 },
      { campaign: 'C3', rate: 8.1 },
      { campaign: 'C4', rate: 7.8 },
    ]
  },
  6: {
    ...SAMPLE_INFLUENCERS[5],
    location: 'Miami, USA',
    joinDate: 'February 2019',
    avgReach: '900K',
    collaborations: [
      {
        id: 601,
        brandName: 'Nike',
        brandLogo: 'NK',
        campaignType: 'Training Program',
        date: '2023-11-20',
        reach: '1.1M',
        engagement: 6.8,
        conversions: 520,
        sentiment: 90,
        year: 2023
      },
      {
        id: 602,
        brandName: 'Gatorade',
        brandLogo: 'GT',
        campaignType: 'Hydration Challenge',
        date: '2023-06-05',
        reach: '850K',
        engagement: 6.2,
        conversions: 380,
        sentiment: 86,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 460000 },
      { month: 'Feb', followers: 470000 },
      { month: 'Mar', followers: 482000 },
      { month: 'Apr', followers: 490000 },
      { month: 'May', followers: 500000 },
      { month: 'Jun', followers: 510000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 6.0 },
      { campaign: 'C2', rate: 6.3 },
      { campaign: 'C3', rate: 6.7 },
      { campaign: 'C4', rate: 6.5 },
    ]
  },
  7: {
    ...SAMPLE_INFLUENCERS[6],
    location: 'Accra, Ghana',
    joinDate: 'July 2021',
    avgReach: '400K',
    collaborations: [
      {
        id: 701,
        brandName: 'HelloFresh',
        brandLogo: 'HF',
        campaignType: 'Meal Kit Review',
        date: '2023-09-28',
        reach: '450K',
        engagement: 9.3,
        conversions: 400,
        sentiment: 96,
        year: 2023
      },
      {
        id: 702,
        brandName: 'KitchenAid',
        brandLogo: 'KA',
        campaignType: 'Home Cooking',
        date: '2023-03-14',
        reach: '380K',
        engagement: 8.9,
        conversions: 280,
        sentiment: 93,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 250000 },
      { month: 'Feb', followers: 258000 },
      { month: 'Mar', followers: 265000 },
      { month: 'Apr', followers: 274000 },
      { month: 'May', followers: 282000 },
      { month: 'Jun', followers: 290000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 8.5 },
      { campaign: 'C2', rate: 9.0 },
      { campaign: 'C3', rate: 8.8 },
      { campaign: 'C4', rate: 9.1 },
    ]
  },
  8: {
    ...SAMPLE_INFLUENCERS[7],
    location: 'Tokyo, Japan',
    joinDate: 'April 2020',
    avgReach: '750K',
    collaborations: [
      {
        id: 801,
        brandName: 'Razer',
        brandLogo: 'RZ',
        campaignType: 'Peripherals Showcase',
        date: '2023-12-10',
        reach: '900K',
        engagement: 6.1,
        conversions: 490,
        sentiment: 88,
        year: 2023
      },
      {
        id: 802,
        brandName: 'Discord',
        brandLogo: 'DC',
        campaignType: 'Community Building',
        date: '2023-07-22',
        reach: '700K',
        engagement: 5.7,
        conversions: 350,
        sentiment: 85,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 400000 },
      { month: 'Feb', followers: 410000 },
      { month: 'Mar', followers: 420000 },
      { month: 'Apr', followers: 430000 },
      { month: 'May', followers: 438000 },
      { month: 'Jun', followers: 445000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 5.5 },
      { campaign: 'C2', rate: 5.8 },
      { campaign: 'C3', rate: 6.0 },
      { campaign: 'C4', rate: 5.9 },
    ]
  },
  9: {
    ...SAMPLE_INFLUENCERS[8],
    location: 'Berlin, Germany',
    joinDate: 'October 2019',
    avgReach: '550K',
    collaborations: [
      {
        id: 901,
        brandName: 'Adobe',
        brandLogo: 'AD',
        campaignType: 'Creative Suite',
        date: '2023-10-30',
        reach: '600K',
        engagement: 7.2,
        conversions: 300,
        sentiment: 92,
        year: 2023
      },
      {
        id: 902,
        brandName: 'Etsy',
        brandLogo: 'ET',
        campaignType: 'Artisan Spotlight',
        date: '2023-05-08',
        reach: '500K',
        engagement: 6.8,
        conversions: 220,
        sentiment: 89,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 340000 },
      { month: 'Feb', followers: 348000 },
      { month: 'Mar', followers: 355000 },
      { month: 'Apr', followers: 362000 },
      { month: 'May', followers: 368000 },
      { month: 'Jun', followers: 375000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 6.5 },
      { campaign: 'C2', rate: 6.9 },
      { campaign: 'C3', rate: 7.1 },
      { campaign: 'C4', rate: 7.0 },
    ]
  },
  10: {
    ...SAMPLE_INFLUENCERS[9],
    location: 'Seoul, South Korea',
    joinDate: 'August 2018',
    avgReach: '1.1M',
    collaborations: [
      {
        id: 1001,
        brandName: 'Bloomberg',
        brandLogo: 'BL',
        campaignType: 'Market Insights',
        date: '2023-11-15',
        reach: '1.3M',
        engagement: 6.5,
        conversions: 700,
        sentiment: 91,
        year: 2023
      },
      {
        id: 1002,
        brandName: 'Robinhood',
        brandLogo: 'RH',
        campaignType: 'Investing Basics',
        date: '2023-08-01',
        reach: '1.0M',
        engagement: 6.1,
        conversions: 580,
        sentiment: 87,
        year: 2023
      }
    ],
    growthHistory: [
      { month: 'Jan', followers: 560000 },
      { month: 'Feb', followers: 575000 },
      { month: 'Mar', followers: 588000 },
      { month: 'Apr', followers: 600000 },
      { month: 'May', followers: 610000 },
      { month: 'Jun', followers: 620000 },
    ],
    engagementHistory: [
      { campaign: 'C1', rate: 5.8 },
      { campaign: 'C2', rate: 6.0 },
      { campaign: 'C3', rate: 6.4 },
      { campaign: 'C4', rate: 6.3 },
    ]
  }
}

// Processing Status Messages
export const PROCESSING_MESSAGES = [
  'Analyzing influencer profiles...',
  'Evaluating engagement metrics...',
  'Assessing audience demographics...',
  'Calculating ROI potential...',
  'Generating AI insights...',
  'Finalizing recommendations...',
]
