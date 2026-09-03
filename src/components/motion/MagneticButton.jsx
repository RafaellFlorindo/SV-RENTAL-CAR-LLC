import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SPRING_SNAPPY } from '../../lib/motion';
import useReducedMotionSafe from '../../hooks/useReducedMotionSafe';

/**
 * 21st.dev MagneticButton
 * Physics-based subtle cursor magnetic pull + metallic light shimmer
 */
export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "gold",
  pullFactor = 0.25,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isShimmering, setIsShimmering] = useState(false);
  const prefersReduced = useReducedMotionSafe();

  const handleMouseMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * pullFactor;
    const y = (clientY - (top + height / 2)) * pullFactor;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsShimmering(false);
  };

  const handleMouseEnter = () => {
    setIsShimmering(true);
  };

  const baseStyles = "relative inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider rounded overflow-hidden select-none transition-shadow";
  const variantStyles = variant === "gold"
    ? "bg-gold hover:bg-gold-light text-navy-950 shadow-md shadow-gold/20"
    : variant === "navy"
    ? "bg-[#0F1E33] hover:bg-[#182C4A] text-white shadow-md border border-white/10"
    : "bg-white hover:bg-slate-50 text-navy-900 border border-slate-300";

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={SPRING_SNAPPY}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {/* 21st.dev Metallic Shimmer Sweep */}
      {isShimmering && !prefersReduced && (
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none z-10"
        />
      )}
      <span className="relative z-20 flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-block" {...props}>
      {content}
    </button>
  );
}
