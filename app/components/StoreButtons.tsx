import { IconAppleLogo, IconPlayLogo } from "./icons";

const VARIANT_CLASSES = {
  light: "bg-white text-[#0b3049] shadow-lg shadow-black/20",
  dark: "bg-[#0b1a2c] text-white shadow-lg shadow-black/10",
} as const;

const SUBTLE_CLASSES = {
  light: "text-black/60",
  dark: "text-white/60",
} as const;

export default function StoreButtons({
  variant = "light",
  className = "",
}: {
  variant?: keyof typeof VARIANT_CLASSES;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      <a
        href="#"
        className={`flex h-16 w-44 items-center justify-center gap-2.5 rounded-xl transition-transform hover:scale-105 ${VARIANT_CLASSES[variant]}`}
      >
        <IconAppleLogo className="h-6 w-6 shrink-0" />
        <span className="text-left leading-tight">
          <span className={`block text-sm ${SUBTLE_CLASSES[variant]}`}>
            Preuzmite na
          </span>
          <span className="block text-md font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className={`flex h-16 w-44 items-center justify-center gap-2.5 rounded-xl transition-transform hover:scale-105 ${VARIANT_CLASSES[variant]}`}
      >
        <IconPlayLogo className="h-6 w-[1.35rem] shrink-0" />
        <span className="text-left leading-tight">
          <span className={`block text-sm ${SUBTLE_CLASSES[variant]}`}>
            Preuzmite na
          </span>
          <span className="block text-md font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
