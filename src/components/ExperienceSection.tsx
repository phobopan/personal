import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    year: '2024',
    title: 'Creative Director',
    organization: 'Independent Practice',
    description: 'Leading experimental projects at the intersection of art and technology.',
  },
  {
    year: '2023',
    title: 'Visual Artist',
    organization: 'Gallery Exhibitions',
    description: 'Solo and group exhibitions exploring themes of identity and perception.',
  },
  {
    year: '2022',
    title: 'Art Director',
    organization: 'Fashion Editorial',
    description: 'Conceptualizing and directing visual narratives for high-fashion publications.',
  },
  {
    year: '2021',
    title: 'Photographer',
    organization: 'Studio Work',
    description: 'Capturing moments of raw beauty in portrait and conceptual photography.',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-pearl-lavender/5 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-pearl-blue">
            02 — Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-6xl italic mb-20"
        >
          A journey through <span className="text-gradient-pearl">creation</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-pearl-pink via-pearl-lavender to-pearl-blue"
            />
          </div>

          {/* Experience items */}
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-pearl shadow-glow" />

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16'}`}>
                  <span className="font-display text-6xl md:text-7xl italic text-foreground/10">
                    {exp.year}
                  </span>
                </div>
                
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:order-1 md:pr-16'}`}>
                  <h3 className="font-display text-2xl md:text-3xl italic mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-body text-sm tracking-[0.2em] uppercase text-pearl-pink mb-4">
                    {exp.organization}
                  </p>
                  <p className="font-body text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
