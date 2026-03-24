const cards = [
  {
    src: "/images%203/65df79f9145a092a096b0d7b_Bobs%20-%20Mobile-p-500.webp",
    alt: "Bobs mobile website preview",
    className:
      "rotate-[-6deg] -translate-x-10 -translate-y-6 w-[min(260px,60vw)]"
  },
  {
    src: "/images%203/65df79f94e854b95f0c1017d_Minerva%20-%20Mobile-p-500.webp",
    alt: "Minerva mobile website preview",
    className: "z-10 w-[min(300px,70vw)]"
  },
  {
    src: "/images%203/65df79fa4b6f581652e1995a_Mr%20Handyman%20-%20Mobile-p-500.webp",
    alt: "Mr Handyman mobile website preview",
    className:
      "rotate-[6deg] translate-x-10 -translate-y-4 w-[min(260px,60vw)]"
  }
];

export default function ThankfulSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f10] px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(150%_120%_at_50%_60%,rgba(112,190,180,0.85)_0%,rgba(11,15,16,0.12)_50%,rgba(11,15,16,0.95)_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(11,15,16,0.9)_0%,rgba(11,15,16,0.4)_55%,rgba(11,15,16,0)_100%)]" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-[clamp(2.6rem,4.6vw,4.3rem)] font-semibold leading-tight">
            Thankfully,
            <span className="block">there is UENI.</span>
          </h2>
          <p className="mt-6 max-w-[520px] text-lg text-white/70">
            The truly affordable done-for-you website solution.
          </p>
          <button
            className="mt-10 rounded-[12px] bg-[#ff5a1f] px-10 py-4 text-base font-semibold text-white shadow-[0_12px_26px_rgba(255,90,31,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,31,0.45)]"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {cards.map((card) => (
              <img
                key={card.src}
                src={card.src}
                alt={card.alt}
                className={`absolute rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${card.className}`}
              />
            ))}
            <div className="h-[420px] w-[320px] opacity-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
