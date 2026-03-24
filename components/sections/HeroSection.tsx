const stars = Array.from({ length: 5 });

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-visible pb-7 pt-24 text-center max-[640px]:pb-24 max-[640px]:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[350px] bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(8,8,8,0)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <p className="mb-8 text-[16px] uppercase tracking-[0.1em] text-white max-[640px]:text-[0.7rem] max-[640px]:tracking-[0.2em]">
          STRUGGLING TO LAUNCH A WEBSITE YOU LOVE?
        </p>
        <h1 className="mb-6 text-balance text-[72px] font-medium leading-[94px] text-white max-[960px]:text-[52px] max-[960px]:leading-[64px] max-[640px]:text-[clamp(2rem,7vw,2.8rem)] max-[640px]:leading-tight">
          We&apos;ll build your{" "}
          <span className="box-decoration-clone inline-block border-l-4 border-[#2a27ff] bg-[linear-gradient(-50deg,rgba(58,41,209,0)_22%,rgba(58,41,209,0.6))] px-1 text-white/80">
            small business
          </span>{" "}
          <span className="box-decoration-clone inline-block border-l-4 border-[#2a27ff] bg-[linear-gradient(-50deg,rgba(58,41,209,0)_22%,rgba(58,41,209,0.6))] px-1 text-white/80">
            website
          </span>{" "}
          in 7 days for $79
        </h1>
        <p className="mb-9 text-[1.1rem] text-white/70 max-[640px]:text-base">
          Then we&apos;ll help grow your business. Agency service at a fraction of the
          price.
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
          <button
            className="rounded-[10px] bg-[#ff5a1f] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_rgba(255,90,31,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,90,31,0.42)]"
            type="button"
          >
            Get Started
          </button>
          <a
            className="relative font-medium text-white after:absolute after:left-0 after:right-0 after:top-full after:mt-1.5 after:h-[2px] after:bg-white/40 after:content-['']"
            href="#"
          >
            Are our websites any good?
          </a>
        </div>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-[18px] text-[0.95rem] tracking-[0.04em]">
          <span className="font-semibold">RATED 4.8 EXCELLENT</span>
          <div className="flex gap-[6px]" aria-label="5 out of 5 stars">
            {stars.map((_, index) => (
              <span
                key={index}
                className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-[4px] bg-[#00b67a]"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                  <path d="M12 2.6l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.8 6.8 19.9l1-5.9-4.3-4.2 5.9-.9z" />
                </svg>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#00b67a]">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white">
                <path d="M12 2.6l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.8 6.8 19.9l1-5.9-4.3-4.2 5.9-.9z" />
              </svg>
            </span>
            <span>Trustpilot</span>
          </div>
        </div>
        <p className="text-[0.85rem] uppercase tracking-[0.22em] text-white/60 max-[640px]:text-[0.7rem] max-[640px]:tracking-[0.14em]">
          JOIN OUR COMMUNITY OF 700,000+ BUSINESS OWNERS
        </p>
      </div>
    </section>
  );
}
