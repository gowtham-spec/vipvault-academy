import { useEffect, useRef } from 'react';
import { useInView, useAnimation, Variants } from 'framer-motion';

export const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
};

export const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export const staggerChildrenVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};