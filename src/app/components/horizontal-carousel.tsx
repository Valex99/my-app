"use client";
import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Children, type ReactNode, useEffect, useRef, useState } from "react";

export interface HorizontalCarouselProps {
  children: ReactNode;
  id: string;
  onIndexChange?: (index: number) => void;
  useSnap?: boolean;
  useIndicator?: boolean;
  useDots?: boolean;
  useArrows?: boolean;
  gap?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export function HorizontalCarousel({
  children,
  id,
  onIndexChange,
  useSnap,
  useIndicator,
  useDots,
  useArrows,
  gap,
  autoplay,
  autoplayInterval = 3000,
}: HorizontalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayProgress, setAutoplayProgress] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    setAutoplayProgress(0);
    const progressInterval = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / (autoplayInterval / 50); // Update every 50ms
      });
    }, 50);

    const slideInterval = setInterval(() => {
      scrollToIndex((currentIndex + 1) % Children.count(children));
    }, autoplayInterval);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [currentIndex, autoplay, children, autoplayInterval]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const scrollHandler = () => {
      updateCurrentIndex();
    };

    const currentScrollRef = scrollRef.current;
    currentScrollRef?.addEventListener("scroll", scrollHandler);
    return () => currentScrollRef?.removeEventListener("scroll", scrollHandler);
  }, [onIndexChange, children]);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      if (useSnap) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.clientWidth * index,
          behavior: "smooth",
        });
      } else {
        console.log(index);
        const child = scrollRef.current.children[index] as HTMLElement;
        const childRect = child.getBoundingClientRect();
        const containerRect = scrollRef.current.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const containerCenter = containerRect.left + containerRect.width / 2;
        const delta = childCenter - containerCenter;
        scrollRef.current.scrollBy({
          left: delta,
          behavior: "smooth",
        });
      }
    }
  };

  const updateCurrentIndex = () => {
    if (scrollRef.current) {
      const containerCenter =
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth / 2;
      let minDiff = Number.POSITIVE_INFINITY;
      let bestIndex = 0;
      Array.from(scrollRef.current.children).forEach((child, index) => {
        const childEl = child as HTMLElement;
        const childCenter = childEl.offsetLeft + childEl.offsetWidth / 2;
        const diff = Math.abs(childCenter - containerCenter);
        if (diff < minDiff) {
          minDiff = diff;
          bestIndex = index;
        }
      });
      setCurrentIndex(bestIndex);
      onIndexChange?.(bestIndex);
    }
  };

  // Call it on mount to initialize currentIndex
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    updateCurrentIndex();
  }, [onIndexChange]);

  return (
    <div className="w-full gap-y-4">
      <div className={cn("relative w-full", useSnap && "mx-auto")}>
        <div
          ref={scrollRef}
          className={cn(
            "no-scrollbar flex overflow-x-scroll scroll-smooth",
            gap,
            useSnap && "snap-x snap-mandatory"
          )}
        >
          {Children.map(children, (child, index) => {
            return (
              <div
                key={`${id}-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                className={cn(useSnap && "w-full flex-shrink-0 snap-center")}
              >
                {child}
              </div>
            );
          })}
        </div>

        {useIndicator && (
          <div className="absolute top-20 left-0 right-0 z-50 flex gap-1 px-4">
            {Children.map(children, (_, index) => {
              const isActive = index === currentIndex;
              const isPast = index < currentIndex;
              const lineWidth = `${100 / Children.count(children)}%`;

              return (
                <div
                  key={`${id}-indicator-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    index
                  }`}
                  className="relative h-1 cursor-pointer"
                  style={{ width: lineWidth }}
                  onClick={() => scrollToIndex(index)}
                >
                  {/* Background line */}
                  <div className="h-full w-full rounded-full bg-white/30" />

                  {/* Progress line */}
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full bg-white"
                    initial={{ width: isPast ? "100%" : "0%" }}
                    animate={{
                      width: isPast
                        ? "100%"
                        : isActive && autoplay
                        ? `${autoplayProgress}%`
                        : isActive
                        ? "100%"
                        : "0%",
                    }}
                    transition={{
                      duration: isActive && autoplay ? 0.05 : 0.3,
                      ease: "linear",
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {useArrows && (
        <>
          {/* Left Arrow: only show if not on the first image */}
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={() => scrollToIndex(currentIndex - 1)}
              className="absolute top-[15%] lg:top-0 -translate-y-1/2 left-4 z-20 p-2 rounded-full lg:left-4"
              aria-label="Previous"
            >
              <MoveLeft className="size-8 text-primary" />
            </button>
          )}
          {/* Right Arrow: only show if not on the last image */}
          {currentIndex <
            Children.count(children) - (window.innerWidth >= 1024 ? 2 : 1) && (
            <button
              type="button"
              onClick={() => scrollToIndex(currentIndex + 1)}
              className="absolute top-[15%] lg:top-0 -translate-y-1/2 right-4 z-20 p-2 rounded-full lg:right-4"
              aria-label="Next"
            >
              <MoveRight className="size-8 text-primary" />
            </button>
          )}
        </>
      )}

      {useDots && (
        <div className="mt-8 flex justify-center">
          {Children.map(children, (_, index) => (
            <motion.div
              className={cn(
                "bg-sc-black-990 relative z-10 mx-2 h-3 w-3 rounded-full"
                // index === currentIndex ? 'bg-sc-black-full' : 'bg-sc-black-990'
              )}
              initial={false} // Add this line
              animate={
                index === currentIndex
                  ? { backgroundColor: "#E1B506" }
                  : { backgroundColor: "#E0E0E0" }
              } // Modify this line
              transition={{ duration: 0.3, delay: 0.08 }}
              key={`${id}-dot-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
              onTap={() => {
                scrollToIndex(index);
              }}
            >
              {index === currentIndex && (
                <motion.button
                  className={cn(
                    "absolute left-0 top-0 z-20 h-full w-full rounded-full"
                  )}
                  layoutId="dot"
                  initial={{ backgroundColor: "#E1B506" }}
                  animate={{ backgroundColor: "#E1B506" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
