import Image from "next/image";
import StoreButtons from "./StoreButtons";

export default function FeatureIntro() {
  return (
    <section className="bg-cloud py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative">
            <div
              className="absolute -inset-8 -z-10 rounded-full bg-brand/10 blur-2xl"
              aria-hidden="true"
            />
            <Image
              src="/screens/device-home.webp"
              alt="Početni zaslon aplikacije ZadarApp s vremenskom prognozom i gradskim vijestima"
              width={592}
              height={1200}
              className="w-56 drop-shadow-2xl sm:w-64 lg:w-72"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col items-center gap-5 text-center lg:order-2 lg:items-start lg:text-left">
          <span className="rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold tracking-wide text-brand uppercase">
            Sve na jednom mjestu
          </span>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#0b1a2c] sm:text-4xl">
            Vodič kroz Zadar u vašem džepu
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-[#334155] sm:text-lg">
            Provjerite vremensku prognozu, pratite gradska događanja i
            pronađite sve o javnom prijevozu i parkingu. Otkrijte zadarske
            otoke, prijavite komunalni problem ili doznajte tko radi
            nedjeljom. Sve iz jedne aplikacije, napravljene za Zadrane i
            posjetitelje.
          </p>

          <StoreButtons variant="dark" className="pt-2 lg:justify-start" />
        </div>
      </div>
    </section>
  );
}
