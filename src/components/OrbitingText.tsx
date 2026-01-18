import { motion, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

export default function OrbitingText() {
  const radius = 320;
  const text = "Phoebe Pan";
  const characters = text.split('');
  const totalArc = 120;
  const anglePerChar = totalArc / (characters.length - 1);
  const startAngle = -totalArc / 2;
  
  const instances = [0, 180];
  
  const baseRotation = useMotionValue(0);
  const lastTime = useRef(performance.now());
  
  useAnimationFrame(() => {
    const now = performance.now();
    const delta = (now - lastTime.current) / 1000;
    lastTime.current = now;
    baseRotation.set(baseRotation.get() - 18 * delta);
  });
  
  const smoothRotation = useSpring(baseRotation, { stiffness: 100, damping: 30 });
  
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      style={{ perspective: '1200px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <motion.div
        className="relative"
        style={{ 
          transformStyle: 'preserve-3d',
          width: radius * 2,
          height: radius * 2,
          rotateY: smoothRotation,
        }}
      >
        {instances.map((offsetAngle) => (
          <div
            key={offsetAngle}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {characters.map((char, i) => {
              const charAngle = offsetAngle + startAngle + anglePerChar * i;
              
              return (
                <span
                  key={i}
                  className="absolute text-5xl md:text-6xl font-bold text-white"
                  style={{
                    fontFamily: '"Mountains of Christmas", cursive',
                    left: '50%',
                    top: '50%',
                    transform: `
                      translateX(-50%)
                      translateY(-50%)
                      rotateY(${charAngle}deg)
                      translateZ(${radius}px)
                    `,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    textShadow: '0 0 10px rgba(255,255,255,0.5)',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
