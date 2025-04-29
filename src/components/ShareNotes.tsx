import Image from "next/image";

const ShareNotes: React.FC = () => {
  return (
    <section className="flex overflow-visible relative flex-col items-center px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-0 lg:-gap-4">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          Share your notes with one click
        </h2>
        <p className="text-xl font-medium lg:text-2xl text-colored-secondary">
          Granola makes it easy to share notes on the platforms you already use
        </p>
      </div>

      {/* Desktop Image */}
      <div
        className="hidden md:block relative max-w-4xl w-[110%] lg:-mt-4"
        style={{ aspectRatio: "1692 / 751" }}
      >
        <Image
          alt="Share your notes with one click"
          loading="lazy"
          decoding="async"
          src="/assets/images/shareNotes.png"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          sizes="100vw"
        />
      </div>

      {/* Mobile Image */}
      <div
        className="md:hidden relative max-w-4xl w-[110%] lg:-mt-4"
        style={{ aspectRatio: "1218 / 861" }}
      >
        <Image
          alt="Share your notes with one click"
          loading="lazy"
          decoding="async"
          src="/assets/images/shareNotesMobile.png"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default ShareNotes;
