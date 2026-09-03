import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

/**
 * 21st.dev SpotlightCard
 * Mouse-tracking subtle gold radial glow effect on hover
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(197, 154, 69, 0.14)",
  borderColor = "rgba(197, 154, 69, 0.35)",
  ...props
}) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const borderMask = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${borderColor}, transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(-1000);
        mouseY.set(-1000);
      }}
      className={`relative overflow-hidden group rounded-xl transition-all duration-300 ${className}`}
      {...props}
    >
      {/* 21st.dev Dynamic Spotlight Gradient Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{ background }}
      />
      
      {/* Dynamic Border Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl border border-transparent group-hover:border-gold/30 transition-colors duration-300 z-20"
        style={{
          boxShadow: isHovered ? '0 12px 32px -8px rgba(197, 154, 69, 0.15)' : 'none'
        }}
      />

      <div className="relative z-30 h-full">
        {children}
      </div>
    </div>
  );
}
