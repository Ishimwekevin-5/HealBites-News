import { Story } from './types';

export const HERO_STORY: Story = {
  id: 'hero-1',
  kicker: 'Medical Breakthrough',
  headline: 'The New Frontier of Longevity: Can We Really Reverse Aging?',
  deck: 'Recent clinical trials in cellular reprogramming suggest that the biological clock might be more flexible than previously thought. Scientists are now testing therapies that could extend human healthspan by decades.',
  author: 'Dr. Sarah Chen',
  timestamp: '2 HOURS AGO',
  imageUrl: 'https://picsum.photos/seed/health-longevity/1200/675',
  category: 'Medicine',
  footage: [
    'https://picsum.photos/seed/longevity-1/1200/675',
    'https://picsum.photos/seed/longevity-2/1200/675'
  ]
};

export const GRID_STORIES: Story[] = [
  {
    id: 'grid-1',
    kicker: 'Nutrition',
    headline: 'The Gut-Brain Connection: Why Your Diet Affects Your Mood',
    deck: 'New research confirms that the microbiome plays a critical role in mental health, influencing everything from anxiety to cognitive function.',
    author: 'Michael Pollan',
    timestamp: '4 HOURS AGO',
    imageUrl: 'https://picsum.photos/seed/nutrition-gut/800/600',
    category: 'Nutrition',
    footage: ['https://picsum.photos/seed/gut-1/800/600']
  },
  {
    id: 'grid-2',
    kicker: 'Mental Health',
    headline: 'The Rise of Digital Therapeutics in Modern Psychiatry',
    deck: 'FDA-approved apps and VR experiences are becoming standard tools for treating PTSD and chronic insomnia.',
    author: 'Jane McGonigal',
    timestamp: '6 HOURS AGO',
    imageUrl: 'https://picsum.photos/seed/mental-health-vr/800/600',
    category: 'Mental Health',
  },
  {
    id: 'grid-3',
    kicker: 'Fitness',
    headline: 'Zone 2 Training: The Secret to Metabolic Health',
    deck: 'Why low-intensity steady-state exercise is being hailed as the most important tool for long-term cardiovascular resilience.',
    author: 'Peter Attia',
    timestamp: '8 HOURS AGO',
    imageUrl: 'https://picsum.photos/seed/fitness-running/800/600',
    category: 'Fitness',
  },
  {
    id: 'grid-4',
    kicker: 'Public Health',
    headline: 'The Global Effort to Eradicate Malaria by 2040',
    deck: 'New mRNA vaccines and gene-drive mosquitoes are bringing us closer to a world without one of history’s deadliest diseases.',
    author: 'Bill Gates',
    timestamp: '10 HOURS AGO',
    imageUrl: 'https://picsum.photos/seed/public-health-vaccine/800/600',
    category: 'Public Health',
  },
];

export const MOST_POPULAR: Story[] = [
  {
    id: 'pop-1',
    kicker: 'Wellness',
    headline: 'How 7 Hours of Sleep Changes Your Brain Chemistry',
    author: 'Matthew Walker',
    timestamp: '1 DAY AGO',
    imageUrl: 'https://picsum.photos/seed/sleep-brain/800/600',
    category: 'Wellness',
  },
  {
    id: 'pop-2',
    kicker: 'Nutrition',
    headline: 'The Truth About Intermittent Fasting and Muscle Loss',
    author: 'Rhonda Patrick',
    timestamp: '2 DAYS AGO',
    imageUrl: 'https://picsum.photos/seed/fasting-muscle/800/600',
    category: 'Nutrition',
  },
  {
    id: 'pop-3',
    kicker: 'Medicine',
    headline: 'AI Is Now Better at Detecting Early-Stage Cancer Than Radiologists',
    author: 'Eric Topol',
    timestamp: '3 DAYS AGO',
    imageUrl: 'https://picsum.photos/seed/ai-cancer/800/600',
    category: 'Medicine',
  },
  {
    id: 'pop-4',
    kicker: 'Mental Health',
    headline: 'Why "Soft Saving" Is the Newest Stress-Relief Trend',
    author: 'HealBites Staff',
    timestamp: '4 DAYS AGO',
    imageUrl: 'https://picsum.photos/seed/stress-relief/800/600',
    category: 'Mental Health',
  },
  {
    id: 'pop-5',
    kicker: 'Biohacking',
    headline: 'The Best Wearables for Tracking Your Biological Age',
    author: 'Tim Ferriss',
    timestamp: '5 DAYS AGO',
    imageUrl: 'https://picsum.photos/seed/wearables-age/800/600',
    category: 'Biohacking',
  },
];
