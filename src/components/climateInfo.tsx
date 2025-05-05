import React from "react";

const StripeClimateInfo: React.FC = () => {
  return (
    <div className="flex flex-col col-span-full items-center mt-32 mb-8">
      <div className="flex gap-2 text-black">
        <img
          src="/StripeClimateBadge.svg"
          width={24}
          height={24}
          alt="Stripe Climate"
        />
        <span>
          Granola contributes 1.5% of your subscription to remove CO₂ from the
          atmosphere through{" "}
          <a
            href="https://stripe.com/climate"
            title="Stripe Climate"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe Climate
          </a>
          .
        </span>
      </div>
    </div>
  );
};

export default StripeClimateInfo;
