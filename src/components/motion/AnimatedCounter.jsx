import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { SPRING_SNAPPY } from '../../lib/motion';

export default function AnimatedCounter({ value = "3+", label = "", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // If it's a pure number or ends with +, count up smoothly
    const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const hasPlus = value.includes('+');
    const isSpecial = isNaN(numericPart);

    if (isSpecial) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / numericPart), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(`${start}${hasPlus ? '+' : ''}`);
      if (start >= numericPart) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className={`flex flex-col ${className}`}>
      <motion.span
        initial={{ scale: 0.7, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={SPRING_SNAPPY}
        className="font-serif font-extrabold text-gold"
      >
        {displayValue}
      </motion.span>
      {label && <span className="text-xs text-slate-300">{label}</span>}
    </div>
  );
}
