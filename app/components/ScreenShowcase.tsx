"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SCREENS = [
  {
    src: "/screens/device-home.webp",
    alt: "Početni zaslon aplikacije ZadarApp s vremenskom prognozom i vijestima",
    title: "Sve o Zadru na dlanu",
    subtitle: "Vrijeme, promet i vijesti iz grada, svaki dan.",
  },
  {
    src: "/screens/devices-grad.webp",
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
    src: "/screens/devices-grad-1.webp",
    alt: "Skrivene plaže i sunset spotovi u aplikaciji ZadarApp",
    title: "Skrivene plaže i najbolji zalasci",
    subtitle: "Mjesta koja znaju samo lokalci.",
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

const DISPLAY_MS = 3500;
const FADE_MS = 500;

export default function ScreenShowcase() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setVisible(false), DISPLAY_MS);
    return () => clearTimeout(fadeOutTimer);
  }, [index]);

  useEffect(() => {
    if (visible) return;
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % SCREENS.length);
      setVisible(true);
    }, FADE_MS);
    return () => clearTimeout(nextTimer);
  }, [visible]);

  const screen = SCREENS[index];

  return (
    <div className="flex flex-col items-center gap-5 pt-6 lg:pt-0">
      <div
        className="flex h-16 flex-col items-center justify-start text-center transition-opacity ease-in-out sm:h-14"
        style={{ transitionDuration: `${FADE_MS}ms`, opacity: visible ? 1 : 0 }}
      >
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          {screen.title}
        </h2>
        <p className="mt-1 text-sm text-white/60 sm:text-base">
          {screen.subtitle}
        </p>
      </div>

      <Image
        src={screen.src}
        alt={screen.alt}
        width={592}
        height={1200}
        priority
        className="w-48 drop-shadow-2xl transition-opacity ease-in-out sm:w-56 lg:w-64"
        style={{ transitionDuration: `${FADE_MS}ms`, opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
