"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    src: "/images%203/65df79f9145a092a096b0d7b_Bobs%20-%20Mobile-p-500.webp",
    alt: "Bobs mobile website preview",
    sizeClass: "w-[min(260px,60vw)]",
    from: { x: -22, y: -8, rotate: -4, scale: 0.98 },
    to: { x: -160, y: -34, rotate: -12, scale: 1 }
  },
  {
    src: "/images%203/65df79f94e854b95f0c1017d_Minerva%20-%20Mobile-p-500.webp",
    alt: "Minerva mobile website preview",
    sizeClass: "z-10 w-[min(300px,70vw)]",
    from: { x: 0, y: 0, rotate: 0, scale: 1 },
    to: { x: 0, y: -8, rotate: 0, scale: 1.02 }
  },
  {
    src: "/images%203/65df79fa4b6f581652e1995a_Mr%20Handyman%20-%20Mobile-p-500.webp",
    alt: "Mr Handyman mobile website preview",
    sizeClass: "w-[min(260px,60vw)]",
    from: { x: 22, y: -6, rotate: 4, scale: 0.98 },
    to: { x: 160, y: -26, rotate: 12, scale: 1 }
  }
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const lerp = (start: number, end: number, t: number) =>
  start + (end - start) * t;

export default function ThankfulSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.85;
      const end = viewport * 0.25;
      const t = clamp((start - rect.top) / (start - end), 0, 1);
      setProgress(t);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b0f10] px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(150%_120%_at_50%_60%,rgba(112,190,180,0.85)_0%,rgba(11,15,16,0.12)_50%,rgba(11,15,16,0.95)_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(11,15,16,0.9)_0%,rgba(11,15,16,0.4)_55%,rgba(11,15,16,0)_100%)]" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
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
            {cards.map((card) => {
              const x = lerp(card.from.x, card.to.x, progress);
              const y = lerp(card.from.y, card.to.y, progress);
              const rotate = lerp(card.from.rotate, card.to.rotate, progress);
              const scale = lerp(card.from.scale, card.to.scale, progress);
              return (
                <img
                  key={card.src}
                  src={card.src}
                  alt={card.alt}
                  className={`absolute left-1/2 top-1/2 rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${card.sizeClass}`}
                  style={{
                    transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) rotate(${rotate}deg) scale(${scale})`
                  }}
                />
              );
            })}
            <div className="h-[440px] w-[340px] opacity-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
