import Image from "next/image";
import StoreButtons from "./StoreButtons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-ink text-white"
    >
      {/* Background photo */}
      <Image
        src="/hero-mobile.webp"
        alt="Zadar u zalasku sunca, pogled iz zraka"
        fill
        priority
        sizes="100vw"
        className="object-cover sm:hidden"
      />
      <Image
        src="/hero.webp"
        alt="Zadar u zalasku sunca, pogled iz zraka"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover sm:block"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-ink/50"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-32 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 pt-16 pb-28 text-center sm:pt-20 sm:pb-36 lg:pt-24 lg:pb-44">
        

        <Image
          src="/zadar-logo.webp"
          height={96}
          width={96}
          alt="ZadarApp logo"
          className="h-16 w-16 drop-shadow-[0_10px_25px_rgba(36,74,200,0.55)] sm:h-20 sm:w-20"
        />

        <h1 className="text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Cijeli Zadar,
          <br />
          <span className="text-brand">u vašem džepu.</span>
        </h1>

        <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
          Znamenitosti, otoci, gastro preporuke i sva događanja na jednom
          mjestu. Besplatno, za iOS i Android.
        </p>

        <StoreButtons variant="light" className="pt-2" />

        <div className="flex flex-wrap justify-center gap-2 pt-4 text-xs text-white/50">
          {["Vrijeme uživo", "Prijevoz i parking", "Otoci", "Događanja"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Curved divider into the next (light) section */}
      <svg
        className="absolute inset-x-0 -bottom-px h-14 w-full text-cloud sm:h-20"
        viewBox="0 0 1440 120"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,120L0,120Z" />
      </svg>
    </section>
  );
}
