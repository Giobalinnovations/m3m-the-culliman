'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Landmark, Shield } from 'lucide-react';
import CloudinaryImage from '@/components/cloudinary-image';
import Link from 'next/link';

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

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => (
  <motion.div
    variants={fadeIn}
    className="p-6 rounded-2xl border bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function AboutUs() {
  return (
    <Section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-background/50"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-primary mb-4">
            <span className="h-px w-12 bg-primary"></span>
            <span className="text-sm font-medium uppercase tracking-wider">
              About The Project
            </span>
            <span className="h-px w-12 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            M3M The Cullinan
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            An upscale commercial venture by M3M Group on Noida Expressway,
            where luxury meets convenience
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={fadeIn}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              M3M The Cullinan redefines luxury and convenience, offering
              premium commercial spaces starting from 207 sq. ft., with prices
              beginning at ₹90 lakhs. This prestigious development represents an
              exceptional investment opportunity in one of Noida&apos;s most
              prime locations.
            </p>
            <p>
              The project features world-class architecture and modern
              infrastructure, catering to retailers, corporate offices, and
              premium brands. Its strategic location on the Noida Expressway
              ensures seamless connectivity to Delhi-NCR and proximity to key
              residential and commercial hubs.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="relative rounded-2xl overflow-hidden h-[400px]"
          >
            <CloudinaryImage
              src="virtualtour_byzbrf"
              alt="M3M The Cullinan Exterior"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl"
              fill
              priority
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={fadeIn}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <FeatureCard
            icon={Building2}
            title="Premium Spaces"
            description="High-end commercial spaces starting from 207 sq. ft., perfect for retail and office use"
          />
          <FeatureCard
            icon={Landmark}
            title="Modern Infrastructure"
            description="World-class architecture with sophisticated fire protection and modern utilities"
          />
          <FeatureCard
            icon={Shield}
            title="Complete Security"
            description="24/7 security coverage and free parking facilities for hassle-free operations"
          />
          <FeatureCard
            icon={TrendingUp}
            title="Green Spaces"
            description="Recreational areas and green spaces for an excellent business environment"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeIn} className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            M3M The Cullinan is your ideal destination to grow your business or
            invest in a promising commercial property. Unmatched growth and
            returns await.
          </p>
          <Link
            href="#hero"
            className="inline-block mt-6 px-8 py-3 bg-primary text-white rounded-full
            hover:bg-primary/90 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
