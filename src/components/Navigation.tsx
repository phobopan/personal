import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { label: 'Instagram', href: 'https://www.instagram.com/phobopan/', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phoebe-pan/', external: true },
  { label: 'Email', href: 'mailto:phoebepan@college.harvard.edu', external: true },
];

// Wave animation for individual letters
const WaveText = ({ text, href, external }: { text: string; href: string; external?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          animate={isHovered ? {
            y: [0, -4, 0],
          } : { y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </a>
  );
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <a href="#" className="font-display text-xl italic text-gradient-pearl">
              
            </a>
            <ul className="flex gap-12">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                >
                  <WaveText text={item.label} href={item.href} external={item.external} />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
      >
        <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed inset-y-0 right-0 w-full md:hidden bg-background/95 backdrop-blur-lg z-40"
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                transition={{ delay: isOpen ? 0.1 + i * 0.1 : 0 }}
              >
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-3xl italic text-foreground hover:text-gradient-pearl transition-colors duration-300"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
