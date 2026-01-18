import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const galleryItems = [
  { id: 1, title: 'Ethereal I', category: 'Photography', color: 'from-pearl-pink/20 to-pearl-lavender/20' },
  { id: 2, title: 'Nocturne', category: 'Digital Art', color: 'from-pearl-blue/20 to-pearl-silver/20' },
  { id: 3, title: 'Membrane', category: 'Mixed Media', color: 'from-pearl-lavender/20 to-pearl-pink/20' },
  { id: 4, title: 'Celestial', category: 'Photography', color: 'from-pearl-silver/20 to-pearl-blue/20' },
  { id: 5, title: 'Chrysalis', category: 'Digital Art', color: 'from-pearl-pink/20 to-pearl-blue/20' },
  { id: 6, title: 'Luminous', category: 'Photography', color: 'from-pearl-blue/20 to-pearl-lavender/20' },
];

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div
      ref={itemRef}
      style={{ y, scale }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative aspect-[3/4] ${index % 3 === 1 ? 'md:mt-20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-sm overflow-hidden pearl-border`}>
        {/* Placeholder with gradient - replace with actual images */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-pearl opacity-30" />
        </div>
        
        {/* Hover overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-6"
        >
          <motion.span
            initial={false}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-pearl-pink mb-2"
          >
            {item.category}
          </motion.span>
          <motion.h3
            initial={false}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.15 }}
            className="font-display text-3xl italic text-foreground"
          >
            {item.title}
          </motion.h3>
          <motion.div
            initial={false}
            animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="w-12 h-px bg-gradient-pearl mt-4"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pearl-pink/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pearl-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-pearl-lavender">
            03 — Gallery
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-6xl italic"
          >
            Selected <span className="text-gradient-pearl">works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-muted-foreground max-w-md"
          >
            A curated collection of personal photographs and art pieces that explore 
            the boundaries between reality and imagination.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
