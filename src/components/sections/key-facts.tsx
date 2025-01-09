'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  BarChart3,
  Trophy,
  MapPin,
  CheckCircle2,
  Construction,
  Wallet,
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

interface FactCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ElementType;
  color: string;
}

const FactCard = ({
  title,
  value,
  description,
  icon: Icon,
  color,
}: FactCardProps) => (
  <motion.div
    variants={fadeIn}
    className={`relative p-6 rounded-2xl backdrop-blur-sm border border-white/10
    hover:border-white/20 transition-all duration-300 group bg-gradient-to-br
    from-white/5 to-white/0`}
    style={
      {
        '--card-color': color,
      } as React.CSSProperties
    }
  >
    <div
      className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-2xl"
      style={{
        background: `linear-gradient(to bottom right, ${color}, transparent)`,
      }}
    />
    <div className="relative flex items-start gap-4">
      <div className="p-3 rounded-xl" style={{ backgroundColor: `${color}20` }}>
        <Icon className="w-6 h-6" style={{ color: color }} />
      </div>
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <div className="text-2xl font-bold mb-1" style={{ color: color }}>
          {value}
        </div>
        {description && <p className="text-sm text-gray-400">{description}</p>}
      </div>
    </div>
  </motion.div>
);

export default function KeyFactsSection() {
  return (
    <Section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)]" />

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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
            Key Facts
            <span className="block text-2xl md:text-3xl text-gray-400 mt-2">
              at a Glance
            </span>
          </h2>
        </motion.div>

        {/* Facts Grid */}
        <motion.div
          variants={fadeIn}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <FactCard
            icon={Trophy}
            title="Market Position"
            value="2nd Largest"
            description="Indian real estate company in terms of sales"
            color="#FF6B6B"
          />
          <FactCard
            icon={Wallet}
            title="Revenue Potential"
            value="₹1,00,000 CR"
            description="Estimated Revenue Potential"
            color="#FFA94D"
          />
          <FactCard
            icon={Users}
            title="M3M Family"
            value="1.2 LAKH+"
            description="People are now a part of M3M Family"
            color="#FFD43B"
          />
          <FactCard
            icon={MapPin}
            title="Land Bank"
            value="3,000 Acres"
            description="Total Land Bank"
            color="#A9E34B"
          />
          <FactCard
            icon={Building2}
            title="Completed Projects"
            value="29"
            description="Successfully Completed Projects"
            color="#69DB7C"
          />
          <FactCard
            icon={Construction}
            title="Under Development"
            value="21"
            description="Projects Currently Under Development"
            color="#38D9A9"
          />
          <FactCard
            icon={BarChart3}
            title="Total Area"
            value="3 Cr Sq.ft."
            description="Total Area Delivered"
            color="#3BC9DB"
          />
          <FactCard
            icon={CheckCircle2}
            title="Under Development"
            value="4 Cr Sq.ft."
            description="Total Area Under Development"
            color="#4DABF7"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
