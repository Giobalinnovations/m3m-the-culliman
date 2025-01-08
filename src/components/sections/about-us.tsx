'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Building2, MapPin, Star, LucideIcon } from 'lucide-react';

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

const FeatureCard = ({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: LucideIcon;
}) => (
  <motion.div
    variants={fadeIn}
    className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300"
  >
    <div className="flex flex-col items-center gap-3">
      <Icon className="w-8 h-8 text-primary" />
      <div className="text-center">
        <div className="font-semibold text-lg mb-1">{title}</div>
        <div className="text-muted-foreground">{value}</div>
      </div>
    </div>
  </motion.div>
);

export default function AboutUs() {
  return (
    <Section id="about" variant="default" className="overflow-hidden py-16">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container max-w-5xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div variants={fadeIn} className="space-y-2 mb-8 text-center">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <span className="h-px w-12 bg-primary"></span>
            <span className="text-sm font-medium uppercase tracking-wider">
              About
            </span>
            <span className="h-px w-12 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            GOKUL ENCLAVE
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={fadeIn}
          className="prose prose-lg max-w-none text-muted-foreground"
        >
          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            className="bg-card/30 backdrop-blur-sm rounded-xl p-6 hover:bg-card/50 transition-colors duration-300"
          >
            <p className="leading-relaxed text-xl text-center">
              GOKUL ENCLAVE A Project Developing Near Noida International
              Airport, Connected With Aero City. Featuring Luxury Premium
              Farmhouses Designed For An Unparalleled Standard Of Living
            </p>
          </motion.div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <FeatureCard
            title="Location"
            value="Near International Airport"
            icon={MapPin}
          />
          <FeatureCard
            title="Property Type"
            value="Luxury Farmhouses"
            icon={Building2}
          />
          <FeatureCard
            title="Living Standard"
            value="Unparalleled"
            icon={Star}
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
