import Image from "next/image";
import { IconInstagram, IconFacebook, IconTikTok, IconAppleLogo, IconPlayLogo } from "./icons";

const LEGAL_LINKS = [
  "Uvjeti korištenja",
  "Pravila privatnosti",
  "Kolačići",
  "Kontakt",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:px-10">
        <div className="flex flex-col items-center gap-6 border-b border-white/10 pb-8 sm:flex-row sm:justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/zadar-logo.webp"
              alt="ZadarApp logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-heading text-base font-bold tracking-tight text-white">
              Zadar<span className="text-brand">App</span>
            </span>
          </a>

          <div className="flex gap-3">
            {[IconInstagram, IconFacebook, IconTikTok].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Društvena mreža"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-brand hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-36 items-center justify-center gap-2 rounded-lg bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              <IconAppleLogo className="h-4 w-4 shrink-0" />
              <span className="text-xs font-medium">App Store</span>
            </a>
            <a
              href="#"
              className="flex h-10 w-36 items-center justify-center gap-2 rounded-lg bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              <IconPlayLogo className="h-4 w-3.5 shrink-0" />
              <span className="text-xs font-medium">Google Play</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:justify-start">
            {LEGAL_LINKS.map((label) => (
              <li key={label}>
                <a href="#" className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul> */}
          <p className="text-xs text-white/40">
            © 2026 ZadarApp · Zadar, Hrvatska
          </p>
        </div>
      </div>
    </footer>
  );
}
