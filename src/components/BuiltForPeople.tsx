'use client'
import React from "react";
import TweetCard from "./TweetCard";
import { useTranslations } from "next-intl";

const BuiltForPeople = () => {
  const t = useTranslations("builtForPeople");

  return (
    <section className="flex overflow-visible relative flex-col gap-16 px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl items-center lg:gap-12">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h2 className="text-3xl lg:text-4xl text-colored font-bold tracking-[-0.015em] leading-[0.95]">
          {t("title")}
        </h2>
      </div>
      <div className="max-w-4xl md:max-w-6xl w-full col-span-5 md:columns-3 mt-2">
        <div className="flex flex-row md:block w-full overflow-x-auto md:overflow-visible gap-4 md:gap-0 px-4 md:px-0 hide-scrollbar">
          <TweetCard
            displayName="Nat Friedman"
            username="natfriedman"
            isVerified={true}
            tweetLink="https://twitter.com/natfriedman/status/1803788840781365393"
            tweetContent={t("tweets.natFriedman.content")}
            timestamp="6:55 PM · Jun 20, 2024"
            timestampISO="2024-06-20T13:55:47.000Z"
            likeCount={554}
            repliesCount={26}
          />

          <TweetCard
            displayName="Ryan Hoover"
            username="rrhoover"
            isVerified={false}
            tweetLink="https://twitter.com/rrhoover/status/1803788840781365393"
            tweetContent={t("tweets.ryanHoover.content")}
            timestamp="1:49 AM · Apr 1, 2025"
            timestampISO="2025-04-01T01:49:00.000Z"
            likeCount={311}
            repliesCount={45}
          />

          <TweetCard
            displayName="Soleio"
            username="soleio"
            isVerified={false}
            tweetLink="https://twitter.com/soleio/status/[tweet-id]"
            tweetContent={t("tweets.soleio.content")}
            timestamp="6:36 PM · Aug 8, 2024"
            timestampISO="2024-08-08T18:36:00.000Z"
            likeCount={43}
            repliesCount={2}
          />

          <TweetCard
            displayName="Dan Shipper 📧"
            username="danshipper"
            isVerified={false}
            tweetLink="https://twitter.com/danshipper/status/[tweet-id]"
            tweetContent={t("tweets.danShipper.content")}
            timestamp="2:03 AM · Jun 4, 2024"
            timestampISO="2024-06-04T02:03:00.000Z"
            likeCount={33}
            repliesCount={4}
          />

          <TweetCard
            displayName="Guillermo Rauch"
            username="rauchg"
            isVerified={false}
            tweetLink="https://twitter.com/rauchg/status/1803788840781365393"
            tweetContent={t("tweets.guillermoRauch.content")}
            timestamp="2:14 AM · Jan 9, 2025"
            timestampISO="2025-01-09T02:14:00.000Z"
            likeCount={1600}
            repliesCount={69}
          />

          <TweetCard
            displayName="Alex Cohen"
            username="anothercohen"
            isVerified={false}
            tweetLink="https://twitter.com/anothercohen/status/[tweet-id]"
            tweetContent={t("tweets.alexCohen.content")}
            timestamp="6:09 AM · Mar 22, 2025"
            timestampISO="2025-03-22T06:09:00.000Z"
            likeCount={634}
            repliesCount={29}
          />

          <TweetCard
            displayName="MDS"
            username="mds"
            isVerified={false}
            tweetLink="https://twitter.com/mds/status/[tweet-id]"
            tweetContent={t("tweets.mds.content")}
            timestamp="10:34 PM · Sep 19, 2024"
            timestampISO="2024-09-19T22:34:00.000Z"
            likeCount={22}
            repliesCount={7}
          />

          <TweetCard
            profileImage={null}
            displayName="Steven Tey"
            username="steventey"
            isVerified={false}
            tweetLink="https://twitter.com/steventey/status/[tweet-id]"
            tweetContent={t("tweets.stevenTey.content")}
            timestamp="9:55 AM · Sep 16, 2024"
            timestampISO="2024-09-16T09:55:00.000Z"
            likeCount={4}
            repliesCount={0}
          />

          <TweetCard
            displayName="Des Traynor"
            username="destraynor"
            isVerified={false}
            tweetLink="https://twitter.com/destraynor/status/1803788840781365393"
            tweetContent={t("tweets.desTraynor.content")}
            timestamp="2:34 AM · Apr 4, 2025"
            timestampISO="2025-04-04T02:34:00.000Z"
            likeCount={344}
            repliesCount={32}
          />

          <TweetCard
            displayName="Nichole Wischoff"
            username="NWischoff"
            isVerified={false}
            tweetLink="https://twitter.com/NWischoff/status/[tweet-id]"
            tweetContent={t("tweets.nicholeWischoff.content")}
            timestamp="11:41 PM · Nov 12, 2024"
            timestampISO="2024-11-12T23:41:00.000Z"
            likeCount={311}
            repliesCount={41}
          />

          <TweetCard
            displayName="Deedy"
            username="deedydas"
            isVerified={false}
            tweetLink="https://twitter.com/deedydas/status/[tweet-id]"
            tweetContent={t("tweets.deedy.content")}
            timestamp="10:00 PM · Dec 15, 2024"
            timestampISO="2024-12-15T22:00:00.000Z"
            likeCount={1000}
            repliesCount={39}
          />
        </div>
      </div>
    </section>
  );
};

export default BuiltForPeople;
