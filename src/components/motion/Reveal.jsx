import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '../../lib/motion';

export default function Reveal({ children, className = "", delay = 0, y = 28 }) {
  const customVariant = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={customVariant}
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
}
