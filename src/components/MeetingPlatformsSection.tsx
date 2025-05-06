import Image from "next/image";

const MeetingPlatformsSection = () => {
  return (
    <section className="flex overflow-visible relative flex-col items-center px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-4 lg:gap-8">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          Works on all platforms, no meeting bots
        </h2>
        <p className="text-xl font-medium lg:text-2xl text-colored-secondary">
          Granola transcribes your Mac&apos;s audio directly, with no meeting
          bots joining your call
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center w-full">
        <div className="flex justify-center items-center">
          <Image
            alt="meet-logo logo"
            loading="lazy"
            width={120}
            height={60}
            className="w-20 md:w-28"
            src="/assets/images/meet-logo.jpg"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="slack-logo logo"
            loading="lazy"
            width={120}
            height={60}
            className="w-20 md:w-28"
            src="/assets/images/slack-logo.jpg"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="teams-logo logo"
            loading="lazy"
            width={120}
            height={60}
            className="w-20 md:w-28"
            src="/assets/images/teams-logo.jpg"
          />
        </div>
        <div className="flex justify-center items-center md:block">
          <Image
            alt="webex-logo logo"
            loading="lazy"
            width={120}
            height={60}
            className="w-20 md:w-28"
            src="/assets/images/webex-logo.jpg"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="zoom-logo logo"
            loading="lazy"
            width={120}
            height={60}
            className="w-20 md:w-28"
            src="/assets/images/zoom-logo.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetingPlatformsSection;
