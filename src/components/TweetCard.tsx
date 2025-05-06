"use client";

import { Heart, MessageCircle, Link2, User } from "lucide-react";
import { ReactNode } from "react";

interface TweetCardProps {
  profileImage?: string | null;
  displayName: string;
  username: string;
  isVerified?: boolean;
  tweetLink: string;
  tweetContent: ReactNode;
  timestamp: string;
  timestampISO: string;
  likeCount: number;
  showFollowButton?: boolean;
  repliesCount: number;
}

export default function TweetCard({
  displayName,
  username,
  isVerified = false,
  tweetLink,
  tweetContent,
  timestamp,
  timestampISO,
  likeCount,
  showFollowButton = true,
  repliesCount,
}: TweetCardProps) {
  return (
    <div className="md:break-inside-avoid flex-shrink-0 md:flex-shrink w-auto max-w-xs md:max-w-none md:mb-4 md:-mt-6 mb-4">
      <div className="w-full min-w-[250px] max-w-[550px] overflow-hidden text-[--tweet-font-color] font-sans font-normal box-border border rounded-xl my-[1.5rem] bg-[--tweet-bg-color] transition-colors duration-200 ">
        <div>
          <article className="relative box-border p-3">
            {/* Header */}
            <div className="flex pb-3 leading-[var(--tweet-header-line-height)] text-[var(--tweet-header-font-size)] whitespace-nowrap break-words overflow-hidden">
              <a
                href={tweetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <div className="relative w-12 h-12 overflow-hidden rounded-full border">
                  <User size={48} />
                </div>
              </a>
              <div className="ml-3 flex flex-col">
                <a
                  href={tweetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="font-bold">
                    <span title={displayName}>{displayName}</span>
                  </div>
                  {isVerified && (
                    <div className="ml-1">
                      {/* Verified Badge */}
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Verified account"
                        className="w-4 h-4"
                      >
                        <g>
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34..."></path>
                        </g>
                      </svg>
                    </div>
                  )}
                </a>
                <div className="flex items-center text-[--tweet-font-color-secondary]">
                  <a
                    href={tweetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    @{username}
                  </a>
                  {showFollowButton && (
                    <>
                      <span className="mx-1">·</span>
                      <a
                        href={`https://twitter.com/intent/follow?screen_name=${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500"
                      >
                        Follow
                      </a>
                    </>
                  )}
                </div>
              </div>
              <a
                href={tweetLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Twitter"
                className="ml-auto flex items-center justify-center w-6 h-6"
              >
                {/* Twitter Icon */}
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
                  <g>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"></path>
                  </g>
                </svg>
              </a>
            </div>

            {/* Tweet Content */}
            <p className="mt-2 text-base">{tweetContent}</p>

            {/* Timestamp */}
            <div className="flex items-center text-[--tweet-font-color-secondary] mt-1 whitespace-nowrap overflow-hidden text-ellipsis text-sm">
              <a
                href={tweetLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={timestamp}
                className="text-inherit no-underline"
              >
                <time dateTime={timestampISO}>{timestamp}</time>
              </a>
              <a
                href="https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter for Websites, Ads Information and Privacy"
                className="flex items-center justify-center w-6 h-6 ml-auto mr-[-4px] rounded-full transition-colors duration-200 hover:bg-gray-200"
              >
                {/* Info Icon */}
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
                  <g>
                    <path d="M13.5 8.5c0 .83-.67 1.5-1.5..."></path>
                  </g>
                </svg>
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center text-[--tweet-font-color-secondary] pt-1 mt-1 border-t-[--tweet-border] whitespace-nowrap overflow-hidden text-ellipsis">
              {/* Like */}
              <a
                href={`https://twitter.com/intent/like?tweet_id=${tweetLink
                  .split("/")
                  .pop()}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Like"
                className="flex items-center mr-5"
              >
                <div className="flex justify-center items-center w-6 h-6 rounded-full -ml-1">
                  <Heart size={18} />
                </div>
                <span className="text-sm">{likeCount}</span>
              </a>

              {/* Reply */}
              <a
                href={`https://twitter.com/intent/tweet?in_reply_to=${tweetLink
                  .split("/")
                  .pop()}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reply"
                className="flex items-center mr-5"
              >
                <div className="flex justify-center items-center w-6 h-6 rounded-full -ml-1">
                  <MessageCircle size={18} />
                </div>
                <span className="text-sm">Reply</span>
              </a>

              {/* Copy Link */}
              <button type="button" className="flex items-center">
                <div className="flex justify-center items-center w-6 h-6 rounded-full -ml-1">
                  <Link2 size={18} className="rotate-[135deg]" />
                </div>
                <span className="text-sm">Copy link</span>
              </button>
            </div>

            {/* Read Replies */}
            <div className="mt-2 py-[4px]">
              <a
                href={tweetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-[0.875rem] font-medium h-[32px] hover:underline flex justify-center items-center w-full px-[16px] border rounded-full"
              >
                Read {repliesCount} replies
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
