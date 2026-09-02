import Image from "next/image";

// simple-icons:apple
function IconAppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04c-2.04.027-3.91 1.183-4.961 3.014c-2.117 3.675-.546 9.103 1.519 12.09c1.013 1.454 2.208 3.09 3.792 3.039c1.52-.065 2.09-.987 3.935-.987c1.831 0 2.35.987 3.96.948c1.637-.026 2.676-1.48 3.676-2.948c1.156-1.688 1.636-3.325 1.662-3.415c-.039-.013-3.182-1.221-3.22-4.857c-.026-3.04 2.48-4.494 2.597-4.559c-1.429-2.09-3.623-2.324-4.39-2.376c-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83c-1.207.052-2.662.805-3.532 1.818c-.78.896-1.454 2.338-1.273 3.714c1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

// thesvg-color:google-play
function IconPlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 466 511.98" className={className}>
      <path
        fill="#ea4335"
        d="M199.9 237.8L1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81c11.16 0 20.93-2.79 29.3-8.37l244.16-139.46z"
      />
      <path
        fill="#fbbc04"
        d="m433.91 205.1l-104.65-60l-111.61 110.22l113.01 108.83l104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23c-1.4-20.93-13.95-40.46-32.09-50.22"
      />
      <path
        fill="#34a853"
        d="M199.42 273.45L329.27 145.1L87.9 8.37C79.53 2.79 68.36 0 57.2 0C30.7 0 6.98 18.14 1.4 41.86z"
      />
      <path
        fill="#4285f4"
        d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-y-auto bg-[#04101d] text-white lg:overflow-hidden">

      {/* Wave vector – decorative, sits behind every other element */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-100 md:h-150 w-full text-[#244AC8]/90"
        viewBox="0 0 1440 220"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,80C840,75,960,85,1080,101.3C
1200,117,1320,139,1380,149.3L1440,160L1440,220L0,220Z" />
      </svg>

      {/* Main */}
      <main className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:py-0">
        {/* Left: copy */}
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <Image 
           src={"/zadar-logo.webp"}
           height={100}
           width={100}
           alt="logo"
           className="w-20 h-20 md:w-30 md:h-30"
           
           />
          <h1 className="text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Cijeli Zadar,
            <br />
            <span className="text-[#244AC8]">
              u vašem džepu.
            </span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Znamenitosti, otoci, gastro preporuke i sva događanja na jednom
            mjestu.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-1 lg:justify-start">
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-xl bg-white px-6 py-3 text-[#0b3049] shadow-lg shadow-black/20 transition-transform "
            >
              <IconAppleLogo className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-sm text-black/60">
                  Preuzmite na
                </span>
                <span className="block text-md font-semibold">
                  App Store
                </span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-xl bg-white px-6 py-3 text-[#0b3049] shadow-lg shadow-black/20 transition-transform"
            >
              <IconPlayLogo className="h-6 w-[1.35rem]" />
              <span className="text-left leading-tight">
                <span className="block text-sm text-black/60">
                  Preuzmite na
                </span>
                <span className="block text-md font-semibold">
                  Google Play
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Right: phone screenshots */}
        <div className="flex items-center justify-center pt-6 lg:pt-0">
          <div className="flex items-end">
            <Image
              src="/mobile_2.webp"
              alt="ZadarApp – pregled zadarskih otoka"
              width={423}
              height={858}
              priority
              className="w-32 -rotate-6 drop-shadow-2xl sm:w-40 lg:w-48"
            />
            <Image
              src="/mobile_1.webp"
              alt="ZadarApp – skrivene plaže u Zadru"
              width={423}
              height={858}
              priority
              className="-ml-10 z-10 w-36 rotate-3 drop-shadow-2xl sm:-ml-14 sm:w-44 lg:-ml-16 lg:w-52"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
