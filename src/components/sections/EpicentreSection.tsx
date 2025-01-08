'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import {
  Navigation,
  Plane,
  TreePine,
  LucideIcon,
  FileCheck,
} from 'lucide-react';

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const highlights = [
  {
    icon: Navigation,
    title: 'Farm With Wide Road',
    description: 'Upto 50 Feet',
  },
  {
    icon: Plane,
    title: 'Country Living Near Airport',
    description: 'Close proximity to International Airport',
  },
  {
    icon: TreePine,
    title: 'Luxury Green Environment',
    description: 'Surrounded by natural greenery',
  },
  {
    icon: FileCheck,
    title: 'Ownership- Freehold',
    description: 'With Registry/Electricity',
  },
];

const HighlightCard = ({
  icon: Icon,
  title,
  description,
  index,
}: HighlightCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-300" />
      <div className="absolute inset-0 bg-card/40 backdrop-blur-sm rounded-2xl" />

      <div className="relative p-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-4 ring-1 ring-primary/20 group-hover:ring-primary/30">
                <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <motion.h3
              className="text-2xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function EpicentreSection() {
  return (
    <Section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          />

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary relative">
            HIGHLIGHTS
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Discover the exceptional features that make Gokul Enclave a premier
            choice for luxury living
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              index={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
