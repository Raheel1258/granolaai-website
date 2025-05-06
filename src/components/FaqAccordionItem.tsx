import { FAQItem } from "@/app/pricing/types";

export const FAQAccordionItem = ({
  faq,
  isOpen,
  toggleFaq,
}: {
  faq: FAQItem;
  isOpen: boolean;
  toggleFaq: (id: string) => void;
}) => {
  return (
    <div className="w-full text-left border-b">
      <button
        onClick={() => toggleFaq(faq.id)}
        className="flex items-center py-4 w-full group"
      >
        <p className="flex-1 text-lg font-semibold text-left md:text-xl">
          {faq.question}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`size-5 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 prose max-w-none">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};
