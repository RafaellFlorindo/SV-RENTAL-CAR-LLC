import { useReducedMotion } from 'framer-motion';

export default function useReducedMotionSafe() {
  const shouldReduce = useReducedMotion();
  return Boolean(shouldReduce);
}
