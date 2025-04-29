import { logoSetOne, logoSetTwo } from "@/constants/logo-sets";
import Image from "next/image";

const TrustedBySection = () => {
  return (
    <section className="flex flex-col items-center px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-0 pb-0 mt-8 bg-white relative">
      <h3 className="mb-8 font-medium text-black">Trusted by individuals at</h3>

      {/* First Row */}
      <div className="w-full overflow-hidden relative mb-10">
        <div className="marquee-container gap-4">
          {[...Array(2)].flatMap((_, i) =>
            logoSetOne.map((logo, index: number) => (
              <Image
                key={`${i}-${index}`}
                alt={logo.alt}
                src={logo.src}
                width={240}
                height={120}
                className="opacity-80 md:w-48"
              />
            ))
          )}
        </div>

        {/* Fade Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 w-1/6 h-full z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 w-1/6 h-full z-10 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Second Row */}
      <div className="w-full overflow-hidden relative">
        <div className="marquee-reverse-container gap-4">
          {[...Array(2)].flatMap((_, i) =>
            logoSetTwo.map((logo, index: number) => (
              <Image
                key={`${i}-${index}`}
                alt={logo.alt}
                src={logo.src}
                width={240}
                height={120}
                className="opacity-80 md:w-48"
              />
            ))
          )}
        </div>

        {/* Fade Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 w-1/6 h-full z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 w-1/6 h-full z-10 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
};

export default TrustedBySection;
