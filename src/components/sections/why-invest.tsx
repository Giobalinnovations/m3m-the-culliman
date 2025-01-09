'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Building2,
  Plane,
  Film,
  MapPin,
  Factory,
  Shield,
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

interface InvestmentPointProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const InvestmentPoint = ({
  icon: Icon,
  title,
  description,
}: InvestmentPointProps) => (
  <motion.div
    variants={fadeIn}
    className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl
    transition-all duration-300 border border-gray-100 hover:border-primary/20"
  >
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div
          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center
          group-hover:bg-primary/20 transition-colors duration-300"
        >
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div>
        <h3
          className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary
          transition-colors duration-300"
        >
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default function WhyInvest() {
  return (
    <Section
      id="why-invest"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(180,151,90,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-primary">Invest</span>
            <span className="block text-gray-900 mt-2">in Noida</span>
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto mb-6" />
        </motion.div>

        {/* Investment Points Grid */}
        <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-6">
          <InvestmentPoint
            icon={TrendingUp}
            title="Fastest Emerging Commercial Hub"
            description="Fastest emerging commercial hub in DelNCR – Times Property"
          />
          <InvestmentPoint
            icon={Building2}
            title="Massive Investment Proposal"
            description="UP Government received investments proposal worth Rs. 32.9 Lakh crores for Noida region"
          />
          <InvestmentPoint
            icon={Plane}
            title="International Airport"
            description="Jewar International Airport is coming up in 2024 (Asia's biggest airport)"
          />
          <InvestmentPoint
            icon={Film}
            title="Film City Development"
            description="Film City coming up on Yamuna Expressway in 1000 acres"
          />
          <InvestmentPoint
            icon={MapPin}
            title="Prime Location Parcels"
            description="Availability of Land Parcels in the Prime Locations to attract Big Investors"
          />
          <InvestmentPoint
            icon={Factory}
            title="Manufacturing & Data Hub"
            description="Asia's biggest upcoming manufacturing hub & Data Centre"
          />
          <InvestmentPoint
            icon={Shield}
            title="Future Aviation Hub"
            description="Future Aviation Hub & Dedicated Defence Corridor"
          />
        </motion.div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </motion.div>
    </Section>
  );
}
