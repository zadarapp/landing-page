import Image from "next/image";
import { IconInstagram, IconFacebook, IconTikTok } from "./icons";

const SOCIALS = [
  { icon: IconInstagram, label: "Instagram" },
  { icon: IconFacebook, label: "Facebook" },
  { icon: IconTikTok, label: "TikTok" },
];

export default function SocialBanner() {
  return (
    <section
      id="zajednica"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:py-24">
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-white/70 uppercase">
            Zajednica
          </span>
          <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            Pratite Zadar uživo
          </h2>
          <p className="max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Uključite obavijesti u aplikaciji i ne propustite gradska
            događanja, radove na cesti ili promjene u javnom prijevozu.
            Pridružite se zajednici ZadarApp korisnika na društvenim
            mrežama.
          </p>

          <div className="flex gap-3 pt-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand hover:text-white"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-10 -z-10 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />
            <Image
              src="/screens/devices-grad-1.webp"
              alt="Skrivene plaže i sunset spotovi u aplikaciji ZadarApp"
              width={592}
              height={1200}
              className="w-52 rotate-2 drop-shadow-2xl sm:w-60 lg:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
