export const EASE_LUXURY = [0.16, 1, 0.3, 1];

export const SPRING_SNAPPY = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
  mass: 0.8
};

export const SPRING_SOFT = {
  type: 'spring',
  stiffness: 120,
  damping: 18
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_LUXURY }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_LUXURY }
  }
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});

export const viewportConfig = {
  once: true,
  margin: "-60px"
};
