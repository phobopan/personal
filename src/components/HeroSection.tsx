import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import OrbitingText from './OrbitingText';
import pearlImage from '@/assets/pearl.png';

export default function HeroSection() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 15 });
  
  // Transform mouse position to larger aura offsets for more dramatic effect
  const auraX = useTransform(smoothX, [0, 1], [-150, 150]);
  const auraY = useTransform(smoothY, [0, 1], [-150, 150]);
  
  // Additional offset layers
  const auraX2 = useTransform(smoothX, [0, 1], [120, -120]);
  const auraY2 = useTransform(smoothY, [0, 1], [100, -100]);
  
  const auraX3 = useTransform(smoothX, [0, 1], [-80, 80]);
  const auraY3 = useTransform(smoothY, [0, 1], [80, -80]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="fixed inset-0 w-full h-screen overflow-hidden bg-gradient-dark">
      {/* Subtle background ambiance */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[hsla(350,60%,85%,0.08)] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-[hsla(230,50%,80%,0.06)] rounded-full blur-[150px]" />
      </div>

      {/* Aura layer - furthest back */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="relative w-[400px] h-[400px] md:w-[480px] md:h-[480px]">
          {/* Pastel Pink aura */}
          <motion.div 
            className="absolute inset-0 rounded-full blur-[60px] scale-[1.1]"
            style={{ 
              x: auraX,
              y: auraY,
              background: 'hsla(350, 85%, 75%, 0.55)'
            }}
          />
          
          {/* Mint Green aura */}
          <motion.div 
            className="absolute inset-0 rounded-full blur-[70px] scale-[1.15]"
            style={{ 
              x: auraX2,
              y: auraY2,
              background: 'hsla(150, 60%, 70%, 0.5)'
            }}
          />
          
          {/* Periwinkle aura */}
          <motion.div 
            className="absolute inset-0 rounded-full blur-[75px] scale-[1.1]"
            style={{ 
              x: auraX3,
              y: auraY3,
              background: 'hsla(230, 70%, 75%, 0.55)'
            }}
          />
          
          {/* Soft Orange/Peach accent */}
          <motion.div 
            className="absolute inset-0 rounded-full blur-[50px] scale-[1.0]"
            style={{ 
              x: useTransform(auraX, v => v * 0.5),
              y: useTransform(auraY, v => -v * 0.8),
              background: 'hsla(30, 80%, 75%, 0.5)'
            }}
          />
          
          {/* White/cream center glow */}
          <motion.div 
            className="absolute inset-0 rounded-full blur-[40px] scale-[1.05]"
            style={{ 
              x: useTransform(auraX, v => v * 0.3),
              y: useTransform(auraY, v => v * 0.3),
              background: 'hsla(45, 50%, 92%, 0.6)'
            }}
          />
          
          {/* Base soft glow */}
          <div className="absolute inset-0 bg-[hsla(350,60%,85%,0.2)] rounded-full blur-[60px] scale-[1.3]" />
        </div>
      </div>

      {/* Pearl layer - middle */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.img 
          src={pearlImage} 
          alt="Pearl" 
          className="w-[360px] h-[360px] md:w-[450px] md:h-[450px] object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Orbiting Text - front */}
      <div className="absolute inset-0 z-20">
        <OrbitingText />
      </div>
    </section>
  );
}
