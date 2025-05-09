// import Image from "next/image";
import React from "react";

const MeetingToWork: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl overflow-visible gap-4 lg:gap-8">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          Put your meetings to work
        </h2>
        <p className="text-xl font-medium lg:text-2xl text-colored-secondary">
          NestQ has the latest AI models built in, so it can help you do your
          post-meeting action items
        </p>
      </div>
      <div className="relative mt-4 w-full cursor-default select-none">
        <ul className="flex flex-wrap gap-1 justify-center w-full">
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            What are my action items?
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            What were the client&apos;s main goals?
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            Did we decide on the strategy?
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            What investment amount was discussed?
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            Which retirement plans were mentioned?
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            When is our next client meeting?
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            Show client&apos;s risk profile updates.
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            List documents needed from client.
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            Did we talk about estate planning?
          </li>
          <li className="px-2 py-1 text-[12px] text-white rounded-full md:px-4 md:py-2 md:text-xl bg-black/30 cursor-default select-none">
            Summarize the client&apos;s key questions.
          </li>
        </ul>
        <div className="flex absolute top-1/2 left-1/2 items-center p-4 w-[90%] md:w-full md:max-w-lg h-12 rounded-lg shadow-xl backdrop-blur-lg -translate-x-1/2 -translate-y-1/2 md:h-16 bg-white/90 cursor-default select-none">
          <div className="w-0.5 h-7 inline-block rounded-full bg-accent opacity-100 md:w-[3px] md:h-9"></div>
          <p className="w-full text-base tracking-wide opacity-90 md:text-xl text-tertiary font-basic">
            Ask about meeting
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="size-6 text-tertiary"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"></path>
          </svg>
        </div>
      </div>
      {/* <div className="flex flex-col col-span-full gap-4 items-center py-12 mx-auto text-colored">
        <blockquote className="max-w-3xl text-2xl italic text-center md:text-3xl text-balance">
          The addiction is real - at this point I can&apos;t imagine life without it.
          Effortlessly powerful
        </blockquote>
        <div className="flex gap-4 items-center -ml-2">
          <Image
            src="/assets/images/adrianaVitagliano.jpeg"
            alt="Adriana Vitagliano"
            width={48}
            height={48}
            className="rounded-full size-10 md:size-12 bg-neutral-200"
          />
          <div className="flex flex-col">
            <span className="font-semibold leading-tight md:text-lg">
              Adriana Vitagliano
            </span>
            <p className="text-sm font-normal text-black">VC, Firstminute</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default MeetingToWork;
