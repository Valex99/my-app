"use client";

import { createAnimations } from "@/app/components/animations/animations";
import type { Animations } from "@/app/components/animations/types";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  customAnimation?: boolean;
  delay?: number;
  duration?: number;
  animation?: keyof Animations;
}

const Block = ({
  children,
  className,
  delay,
  duration,
  customAnimation = false,
  animation = "fadeIn",
  ...props
}: ContainerProps) => {
  const combinedClassName = cn(className);

  const animations = createAnimations(delay, duration);

  return (
    <AnimatePresence>
      <motion.div
        className={combinedClassName}
        {...(customAnimation ? props : animations[animation])}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default Block;
