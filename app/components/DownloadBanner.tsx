import Image from "next/image";
import StoreButtons from "./StoreButtons";

export default function DownloadBanner() {
  return (
    <section id="preuzmi" className="relative overflow-hidden bg-brand">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-14 text-center sm:px-10 sm:py-16 lg:flex-row lg:justify-between lg:gap-6 lg:py-20 lg:text-left">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Preuzmite ZadarApp Uskoro.
          </h2>
          <p className="max-w-md text-base text-white/80">
            Besplatno za iOS i Android. Cijeli Zadar i njegovi otoci, uvijek
            uz vas.
          </p>
          <StoreButtons variant="dark" className="pt-1 lg:justify-start" />
        </div>

        <Image
          src="/zadar-logo.webp"
          alt="ZadarApp logo"
          width={160}
          height={160}
          className="h-24 w-24 shrink-0 drop-shadow-[0_15px_35px_rgba(0,0,0,0.3)] sm:h-28 sm:w-28 lg:h-36 lg:w-36"
        />
      </div>
    </section>
  );
}
