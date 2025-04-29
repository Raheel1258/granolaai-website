import React from "react";
import TweetCard from "./TweetCard";

const BuiltForPeople = () => {
  return (
    <section className="flex overflow-visible relative flex-col gap-16 px-4 py-16 w-full max-w-3xl sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl items-center lg:gap-12">
      <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
        <h2 className="text-3xl lg:text-5xl text-colored font-bold tracking-[-0.015em] leading-[0.95] text-balance">
          Built for people with back-to-back meetings
        </h2>
      </div>
      <div className="max-w-4xl md:max-w-6xl w-full col-span-5 md:columns-3 mt-8">
        <div className="flex flex-row md:block w-full overflow-x-auto md:overflow-visible gap-4 md:gap-0 px-4 md:px-0 hide-scrollbar">
          <TweetCard
            displayName="Nat Friedman"
            username="natfriedman"
            isVerified={true}
            tweetLink="https://twitter.com/natfriedman/status/1803788840781365393"
            tweetContent={
              <>
                Been using{" "}
                <a
                  href="http://granola.so"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-500 hover:underline"
                >
                  granola.so
                </a>{" "}
                a bit lately; it generates the best meeting notes of anything
                I&apos;ve tried so far. Not sure how they did that.
              </>
            }
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
            tweetContent={
              <>
                Granola is so good.
                <br />I hope they introduce a marketplace of one-click
                integrations. I got use cases! :)
              </>
            }
            timestamp="1:49 AM · Apr 1, 2025"
            timestampISO="2025-04-01T01:49:00.000Z"
            likeCount={311}
            repliesCount={45}
          />

          <TweetCard
            displayName="Soleio"
            username="soleio"
            isVerified={false} // Set to true if Soleio is verified
            tweetLink="https://twitter.com/soleio/status/[tweet-id]" // Replace [tweet-id] with actual tweet ID if you have it
            tweetContent={
              <>
                I get uncharacteristically excited about group Zoom meetings now
                <br />
                <br />
                Why? Because the payoff is seeing @meetgranola really work its
                magic and generate incredible meeting notes seconds after we
                adjourn
              </>
            }
            timestamp="6:36 PM · Aug 8, 2024"
            timestampISO="2024-08-08T18:36:00.000Z"
            likeCount={43}
            repliesCount={2}
          />

          <TweetCard
            displayName="Dan Shipper 📧"
            username="danshipper"
            isVerified={false} // Change to true if he's verified
            tweetLink="https://twitter.com/danshipper/status/[tweet-id]" // Replace [tweet-id] with the actual ID if known
            tweetContent={
              <>
                If you aren’t using @meetgranola for your meetings you are
                seriously missing out.
                <br />
                <br />
                Incredible product.
              </>
            }
            timestamp="2:03 AM · Jun 4, 2024"
            timestampISO="2024-06-04T02:03:00.000Z"
            likeCount={33}
            repliesCount={4}
          />

          <TweetCard
            displayName="Guillermo Rauch"
            username="rauchg"
            isVerified={false} // Assuming Guillermo is not verified, change to `true` if verified
            tweetLink="https://twitter.com/rauchg/status/1803788840781365393" // Replace with actual tweet URL if available
            tweetContent={
              <>
                It&apos;s actually unbelievable how good{" "}
                <a
                  href="http://granola.ai"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-500 hover:underline"
                >
                  granola.ai
                </a>{" "}
                is.
                <br />
                It replaces writing documents. It&apos;s the killer user
                research tool. The ability to &quot;chat with the
                transcript&quot; to come back to a point that was made is pure
                gold. There&apos;s no going back to pre-granola days.
              </>
            }
            timestamp="2:14 AM · Jan 9, 2025"
            timestampISO="2025-01-09T02:14:00.000Z"
            likeCount={1600}
            repliesCount={69}
          />

          <TweetCard
            displayName="Alex Cohen"
            username="anothercohen"
            isVerified={false} // Change to true if Alex is verified
            tweetLink="https://twitter.com/anothercohen/status/[tweet-id]" // Replace [tweet-id] with the actual ID if known
            tweetContent={
              <>
                The two AI tools I use most often right now:
                <br />
                - Granola.ai
                <br />
                - Howie.com
                <br />
                <br />
                Both are 10/10.
                <br />
                <br />
                Granola has solved meeting notes for me and Howie has saved me
                dozens of hours of scheduling headaches
              </>
            }
            timestamp="6:09 AM · Mar 22, 2025"
            timestampISO="2025-03-22T06:09:00.000Z"
            likeCount={634}
            repliesCount={29}
          />

          <TweetCard
            displayName="MDS"
            username="mds"
            isVerified={false} // Change to true if MDS is verified
            tweetLink="https://twitter.com/mds/status/[tweet-id]" // Replace [tweet-id] with the actual ID if known
            tweetContent={<>I love Granola (the AI note taking app)</>}
            timestamp="10:34 PM · Sep 19, 2024"
            timestampISO="2024-09-19T22:34:00.000Z"
            likeCount={22}
            repliesCount={7}
          />
          <TweetCard
            profileImage={null} // Add Steven Tey's Twitter avatar URL if available
            displayName="Steven Tey"
            username="steventey"
            isVerified={false} // Change to true if Steven is verified
            tweetLink="https://twitter.com/steventey/status/[tweet-id]" // Replace [tweet-id] with the actual ID if known
            tweetContent={
              <>
                Replying to @james406
                <br />
                Bullish on @meetgranola — no more “AI notetaker” needed
                <br />
                <br />
                <a
                  href="https://granola.so"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  granola.so
                </a>
              </>
            }
            timestamp="9:55 AM · Sep 16, 2024"
            timestampISO="2024-09-16T09:55:00.000Z"
            likeCount={4}
            repliesCount={0}
          />

          <TweetCard
            displayName="Des Traynor"
            username="destraynor"
            isVerified={false} // Assuming Des is not verified, change to `true` if verified
            tweetLink="https://twitter.com/destraynor/status/1803788840781365393" // Replace with actual tweet URL if available
            tweetContent={
              <>
                I don&apos;t think I&apos;ve ever gotten more thanks from people
                recommending an app than I have for{" "}
                <a
                  href="http://meetgranola.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-500 hover:underline"
                >
                  @meetgranola
                </a>
                .
                <br />
                Everyone thinks they have a good meeting notes app, but
                it&apos;s only once they use Granola they realise what
                they&apos;ve been missing.
              </>
            }
            timestamp="2:34 AM · Apr 4, 2025"
            timestampISO="2025-04-04T02:34:00.000Z"
            likeCount={344}
            repliesCount={32}
          />

          <TweetCard
            displayName="Nichole Wischoff"
            username="NWischoff"
            isVerified={false} // Change to true if Nichole is verified
            tweetLink="https://twitter.com/NWischoff/status/[tweet-id]" // Replace [tweet-id] with the actual ID if known
            tweetContent={
              <>
                Just used Granola AI for the first time to take notes for me.
                Totally insane product. Highly recommend. Not an investor sadly.
              </>
            }
            timestamp="11:41 PM · Nov 12, 2024"
            timestampISO="2024-11-12T23:41:00.000Z"
            likeCount={311}
            repliesCount={41}
          />

          <TweetCard
            displayName="Deedy"
            username="deedydas"
            isVerified={false} // Change to true if Deedy is verified
            tweetLink="https://twitter.com/deedydas/status/[tweet-id]" // Replace [tweet-id] with the actual ID if known
            tweetContent={
              <>
                Granola is one of the best made “AI” apps that I&apos;ve used
                this year.
                <br />
                <br />
                If you are in a lot of meetings, this is a gamechanger. It takes
                notes in all those meetings for you, so you only need to add
                what&apos;s in your head.
                <br />
                <br />
                It&apos;s minimal, fast, with no setup. It. just. works.
              </>
            }
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
