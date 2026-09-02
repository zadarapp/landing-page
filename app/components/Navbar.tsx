import Image from "next/image";

const LINKS = [
  { href: "#znacajke", label: "Značajke" },
  { href: "#otoci", label: "Otoci" },
  { href: "#zajednica", label: "Zajednica" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/zadar-logo.webp"
            alt="ZadarApp logo"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            Zadar<span className="text-brand">App</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#preuzmi"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105 sm:px-5"
        >
          Preuzmi
        </a>
      </nav>
    </header>
  );
}
