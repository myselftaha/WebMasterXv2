"use client";

import { useRef } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const cards = [
  {
    src: "/images%203/65df79f9145a092a096b0d7b_Bobs%20-%20Mobile-p-500.webp",
    alt: "Bobs mobile website preview",
    sizeClass: "w-[min(420px,82vw)]",
    from: { x: -16, y: 8, rotate: -3, scale: 0.98 },
    to: { x: -260, y: -22, rotate: -8, scale: 1.08 }
  },
  {
    src: "/images%203/65df79f94e854b95f0c1017d_Minerva%20-%20Mobile-p-500.webp",
    alt: "Minerva mobile website preview",
    sizeClass: "w-[min(480px,86vw)]",
    from: { x: 0, y: 12, rotate: 0, scale: 1 },
    to: { x: 0, y: -34, rotate: 0, scale: 1.08 }
  },
  {
    src: "/images%203/65df79fa4b6f581652e1995a_Mr%20Handyman%20-%20Mobile-p-500.webp",
    alt: "Mr Handyman mobile website preview",
    sizeClass: "w-[min(420px,82vw)]",
    from: { x: 16, y: 8, rotate: 3, scale: 0.98 },
    to: { x: 260, y: -18, rotate: 8, scale: 1.08 }
  }
];

type CardMotion = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
};

const useCardMotion = (
  progress: MotionValue<number>,
  motion: {
    from: CardMotion;
    to: CardMotion;
  }
) => {
  const x = useTransform(progress, [0, 1], [motion.from.x, motion.to.x]);
  const y = useTransform(progress, [0, 1], [motion.from.y, motion.to.y]);
  const rotate = useTransform(progress, [0, 1], [motion.from.rotate, motion.to.rotate]);
  const scale = useTransform(progress, [0, 1], [motion.from.scale, motion.to.scale]);

  return { x, y, rotate, scale };
};

export default function ThankfulSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "start 25%"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.3
  });

  const leftMotion = useCardMotion(smoothProgress, {
    from: cards[0].from,
    to: cards[0].to
  });
  const centerMotion = useCardMotion(smoothProgress, {
    from: cards[1].from,
    to: cards[1].to
  });
  const rightMotion = useCardMotion(smoothProgress, {
    from: cards[2].from,
    to: cards[2].to
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b0f10] px-6 py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(150%_120%_at_50%_60%,rgba(112,190,180,0.85)_0%,rgba(11,15,16,0.12)_50%,rgba(11,15,16,0.95)_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(11,15,16,0.9)_0%,rgba(11,15,16,0.4)_55%,rgba(11,15,16,0)_100%)]" />
      <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-16 lg:grid-cols-[0.95fr_1.35fr]">
        <div>
          <h2 className="text-[clamp(2.6rem,4.6vw,4.3rem)] font-medium leading-tight">
            Thankfully,
            <span className="block">there is UENI.</span>
          </h2>
          <p className="mt-6 max-w-[520px] text-lg font-accent font-normal text-white/70">
            The truly affordable done-for-you website solution.
          </p>
          <button
            className="mt-10 rounded-[12px] bg-[#ff5a1f] px-10 py-4 text-base font-medium text-white shadow-[0_12px_26px_rgba(255,90,31,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,31,0.45)]"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
              <motion.img
                src={cards[0].src}
                alt={cards[0].alt}
                className={`rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${cards[0].sizeClass}`}
                style={leftMotion}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <motion.img
                src={cards[1].src}
                alt={cards[1].alt}
                className={`rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${cards[1].sizeClass}`}
                style={centerMotion}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
              <motion.img
                src={cards[2].src}
                alt={cards[2].alt}
                className={`rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${cards[2].sizeClass}`}
                style={rightMotion}
              />
            </div>
            <div className="h-[620px] w-[540px] opacity-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
