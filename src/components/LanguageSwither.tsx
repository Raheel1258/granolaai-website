"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "../../i18n";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1];

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) return;
    const segments = pathname.split("/");
    segments[1] = locale;
    router.replace(segments.join("/"));
  };

  return (
    <div className="w-fit">
      <select
        onChange={(e) => switchLocale(e.target.value)}
        value={currentLocale}
        className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
