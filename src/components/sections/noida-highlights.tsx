'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import {
  MapPin,
  Building2,
  Landmark,
  GraduationCap,
  Database,
  Plane,
  TreePine,
  Award,
  Briefcase,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface HighlightCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  isGold?: boolean;
}

const HighlightCard = ({
  icon: Icon,
  title,
  description,
  isGold,
}: HighlightCardProps) => (
  <motion.div
    variants={fadeIn}
    className={`group relative p-6 rounded-2xl backdrop-blur-sm border
    transition-all duration-300 hover:scale-105
    ${
      isGold
        ? 'border-primary/20 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/40'
        : 'border-white/10 bg-white/5 hover:border-white/20'
    }`}
  >
    <div className="flex items-start gap-4">
      <div
        className={`p-3 rounded-xl ${isGold ? 'bg-primary/20' : 'bg-white/10'}
        group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-6 h-6 ${isGold ? 'text-primary' : 'text-white'}`} />
      </div>
      <div>
        <h3
          className={`font-semibold text-lg mb-2
          ${isGold ? 'text-primary' : 'text-white'}
          group-hover:translate-x-1 transition-transform duration-300`}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function NoidaHighlights() {
  return (
    <Section
      id="noida-highlights"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,151,90,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(180,151,90,0.15),transparent_50%)]" />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container relative max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              City Overview
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
            Noida at a Glance
          </h2>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={fadeIn}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <HighlightCard
            icon={MapPin}
            title="3rd Largest Economy"
            description="Situated in 3rd Largest Economy in India: Uttar Pradesh"
            isGold
          />
          <HighlightCard
            icon={Landmark}
            title="Financial Capital"
            description="Financial Capital of Uttar Pradesh"
            isGold
          />
          <HighlightCard
            icon={Building2}
            title="IT Hub"
            description="Prominent IT Hub of North India"
          />
          <HighlightCard
            icon={GraduationCap}
            title="Education Hub"
            description="Prominent Education Hub of North India"
            isGold
          />
          <HighlightCard
            icon={Database}
            title="Data Centre Hub"
            description="Emerging Data Centre Hub of North India"
          />
          <HighlightCard
            icon={Plane}
            title="International Airport"
            description="Noida International Airport to become Logistical Gateway of North India"
            isGold
          />
          <HighlightCard
            icon={TreePine}
            title="Self-Sustainable City"
            description="Best self-sustainable Medium City"
          />
          <HighlightCard
            icon={Award}
            title="Cleanest City"
            description="5th Cleanest city in India (amongst cities with 100,000 to one million population)"
            isGold
          />
          <HighlightCard
            icon={Briefcase}
            title="Investment Destination"
            description="One of the most preferred investment destinations for big projects especially, those related to IT and electronics"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
