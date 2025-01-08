'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import {
  Plane,
  Factory,
  Navigation,
  Film,
  Flag,
  LucideIcon,
} from 'lucide-react';
import CloudinaryImage from '@/components/cloudinary-image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
}

const ProjectCard = ({
  number,
  title,
  description,
  icon: Icon,
  imageSrc,
}: ProjectCardProps) => (
  <motion.div
    variants={fadeIn}
    className="group relative overflow-hidden rounded-xl"
  >
    <div className="relative h-[300px] w-full overflow-hidden">
      <CloudinaryImage
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6" />
          <span className="text-4xl font-bold">{number}</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-white/90">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const projects = [
  {
    number: '01',
    title: 'Jewar Airport',
    description:
      'The Jewar International Airport, Set To Become The Largest Airport In Asia, Is Scheduled For Completion By 2024. This Airport Spans An Impressive 7,200 Acres And Will Feature Six Runways, With A Project Cost Of 30,000 Crore.',
    icon: Plane,
    imageSrc: 'plots-in-jewar_x8mrsj',
  },
  {
    number: '02',
    title: 'Industrial Hub Sector 32-33',
    description:
      "Within The Area, You'll Find A 300-Acre Apparel Park, A 50-Acre Handicraft Park, A 100-Acre IT Park, And A Medical Device Park.",
    icon: Factory,
    imageSrc: 'section_nqcp0r',
  },
  {
    number: '03',
    title: 'Yamuna Expressway',
    description:
      'The Delhi To Agra Route, Extending Over 165 Kilometres, Is Part Of The Delhi-Mumbai Highway Project, Which Comes With A Total Cost Of 1 Lakh Crore. The Highway Itself Stretches For 1350 Kilometres.',
    icon: Navigation,
    imageSrc: 'yamuna-expressway_660_08091203_0_1200x768_vmfqii',
  },
  {
    number: '04',
    title: 'Film City Sector 21',
    description:
      'Film City, Located In Sector 21, Spans 1000 Acres And Involves An Investment Of 1000 Crore, Developed In Three Phases Under A 90-Year License.',
    icon: Film,
    imageSrc: 'film-city_dzfibi',
  },
  {
    number: '05',
    title: 'Formula 1 Race Track',
    description:
      'JP Sport City Includes Various Parks, Such As Apparel Park (300 Acres), MSME Park (240 Acres), Handicraft Park (50 Acres), And Toy Park (100 Acres), Alongside The Medical Device Park In Sector.',
    icon: Flag,
    imageSrc: 'formula_tqr2yw',
  },
];

export default function Projects() {
  return (
    <Section id="projects" variant="default" className="py-16 overflow-hidden">
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
            PROJECTS
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Discover our prestigious developments shaping the future of Greater
            Noida
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map(project => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
              icon={project.icon}
              imageSrc={project.imageSrc}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
