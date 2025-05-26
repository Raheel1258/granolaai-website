"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Testimonial = () => {
  const t = useTranslations("pricing.testimonial");

  return (
    <div className="mt-4 p-6 border rounded-xl bg-gray-900 text-white shadow-md max-w-xl mx-auto">
      <div className="flex items-center gap-3 pb-3 mb-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/api/placeholder/48/48"
            alt={t("name")}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">{t("name")}</h3>
            <svg
              viewBox="0 0 24 24"
              aria-label={t("verified")}
              className="w-4 h-4 text-blue-300"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                />
              </g>
            </svg>
          </div>
          <div className="text-sm text-blue-200">{t("handle")}</div>
        </div>
      </div>
      <p className="mb-3">
        {t("content.part1")}{" "}
        <span className="text-blue-300">@meetgranola</span>.
        <br />
        <br />
        {t("content.part2")}
      </p>
      <div className="text-sm text-blue-300">{t("date")}</div>
      <div className="flex gap-3 mt-3 text-blue-300">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <g>
              <path
                fill="currentColor"
                d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
              />
            </g>
          </svg>
          <span>{t("likes")}</span>
        </div>
      </div>
    </div>
  );
};
