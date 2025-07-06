import type { Animations } from "@/app/components/animations/types";

export const createAnimations = (
  delay = 0,
  duration = 0.7,
  once = true
): Animations => ({
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      delay,
      duration,
      type: "spring",
    },
    viewport: { once },
  },
  fadeInUp: {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: {
      delay,
      duration,
      type: "spring",
    },
    viewport: { once },
  },
  fadeInDown: {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
    transition: {
      delay,
      duration,
      type: "spring",
    },
    viewport: { once },
  },
  fadeInLeft: {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
    transition: {
      delay,
      duration,
      type: "spring",
    },
    viewport: { once },
  },
  fadeInRight: {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
    transition: {
      delay,
      duration,
      type: "spring",
    },
    viewport: { once },
  },
});
