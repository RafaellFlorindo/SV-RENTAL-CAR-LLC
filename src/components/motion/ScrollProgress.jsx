import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * 21st.dev ScrollProgress
 * Top subtle gold line tracking scroll depth
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gold-light via-gold to-gold-dark origin-left z-50 pointer-events-none"
      style={{ scaleX }}
    />
  );
}
