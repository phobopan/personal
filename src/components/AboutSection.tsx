import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-pearl-pink/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-pearl-blue/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-5xl mx-auto relative"
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-pearl-pink">
            01 — About
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl italic leading-tight"
            >
              Creating at the
              <span className="text-gradient-pearl"> intersection</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              I'm Phoebe Pan, a multi-disciplinary creative exploring the spaces where 
              art, technology, and human experience converge. My work spans photography, 
              digital art, and experimental design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              Drawing inspiration from gothic architecture, celestial phenomena, and 
              the ephemeral nature of light, I craft visual narratives that invite 
              contemplation and wonder.
            </motion.p>
          </div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-full border border-foreground/10" />
            <div className="absolute inset-4 rounded-full border border-foreground/10" />
            <div className="absolute inset-8 rounded-full border border-pearl-pink/20" />
            <div className="absolute inset-12 rounded-full border border-pearl-blue/20" />
            <div className="absolute inset-16 rounded-full bg-gradient-pearl-subtle" />
            
            {/* Central quote */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <p className="font-display text-2xl md:text-3xl italic text-center text-foreground/80">
                "Beauty lies in the tension between light and shadow"
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
