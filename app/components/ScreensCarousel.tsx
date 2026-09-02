"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SCREENS = [
  {
    src: "/screens/device-home.webp",
    alt: "Početni zaslon aplikacije ZadarApp s vremenskom prognozom i vijestima",
    title: "Sve o Zadru na dlanu",
    subtitle: "Vrijeme, promet i vijesti iz grada, svaki dan.",
  },
  {
    src: "/screens/devices-grad-1.webp",
    alt: "Pregled gradskih usluga u aplikaciji ZadarApp",
    title: "Sve gradske usluge",
    subtitle: "Hitne informacije, promet, ankete i još mnogo toga.",
  },
  {
    src: "/screens/devices-otoci.webp",
    alt: "Popis zadarskih otoka u aplikaciji ZadarApp",
    title: "Otkrijte zadarske otoke",
    subtitle: "Deset otoka, jedna aplikacija za istraživanje.",
  },
  {
    src: "/screens/device-otok.webp",
    alt: "Detaljne informacije o otoku Ižu u aplikaciji ZadarApp",
    title: "Detalji o svakom otoku",
    subtitle: "Prijevoz, znamenitosti i korisne informacije.",
  },
  {
    src: "/screens/device-komunalne.webp",
    alt: "Komunalne informacije i kontakti gradskih poduzeća u aplikaciji ZadarApp",
    title: "Prijavite komunalni problem",
    subtitle: "Kontakti svih gradskih poduzeća na jednom mjestu.",
  },
  {
    src: "/screens/devices-nedjelje.webp",
    alt: "Popis dućana otvorenih nedjeljom u aplikaciji ZadarApp",
    title: "Što radi nedjeljom?",
    subtitle: "Provjerite radno vrijeme prije nego krenete.",
  },
] as const;

const DISPLAY_MS = 4000;
const FADE_MS = 400;

export default function ScreensCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (pausedRef.current) return;
    const fadeOutTimer = setTimeout(() => setVisible(false), DISPLAY_MS);
    return () => clearTimeout(fadeOutTimer);
  }, [index]);

  useEffect(() => {
    if (visible || pausedRef.current) return;
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % SCREENS.length);
      setVisible(true);
    }, FADE_MS);
    return () => clearTimeout(nextTimer);
  }, [visible]);

  function goTo(i: number) {
    pausedRef.current = true;
    setVisible(false);
    setTimeout(() => {
      setIndex(i);
      setVisible(true);
    }, FADE_MS);
  }

  const screen = SCREENS[index];

  return (
    <section className="bg-cloud py-16 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-3xl px-6 text-center sm:px-10">
        <div className="mx-auto max-w-xl">
          
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Aplikacija u akciji
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#334155] sm:text-lg">
            Pogledajte kako izgleda istraživanje Zadra i otoka kroz ZadarApp.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <div
            className="flex h-16 flex-col items-center justify-start text-center transition-opacity ease-in-out sm:h-14"
            style={{
              transitionDuration: `${FADE_MS}ms`,
              opacity: visible ? 1 : 0,
            }}
          >
            <h3 className="text-lg font-bold tracking-tight text-brand sm:text-xl">
              {screen.title}
            </h3>
            <p className="mt-1 text-sm text-[#334155] sm:text-base">
              {screen.subtitle}
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-10 -z-10 rounded-full bg-brand/10 blur-3xl"
              aria-hidden="true"
            />
            <Image
              src={screen.src}
              alt={screen.alt}
              width={592}
              height={1200}
              className="w-48 drop-shadow-2xl transition-opacity ease-in-out sm:w-56 lg:w-64"
              style={{
                transitionDuration: `${FADE_MS}ms`,
                opacity: visible ? 1 : 0,
              }}
            />
          </div>

          <div className="flex gap-2 pt-2">
            {SCREENS.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Prikaži: ${s.title}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-7 bg-brand"
                    : "w-2.5 bg-[#0b1a2c]/15 hover:bg-[#0b1a2c]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
