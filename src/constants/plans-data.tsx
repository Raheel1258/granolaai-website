import { useTranslations } from "next-intl";

interface Feature {
  text: string;
  highlight?: boolean;
  icon?: string;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  buttonText: string;
  androidButton: string;
  features: (string | Feature)[];
}

export const getPlansData = (billingPeriod: string, t: any) => {
  return [
    {
      name: t("plans.freeTrial.name"),
      price: t("plans.freeTrial.price"),
      period: t("plans.freeTrial.period"),
      buttonText: t("plans.freeTrial.buttonText"),
      androidButton: t("plans.freeTrial.androidButton"),
      features: t.raw("plans.freeTrial.features"),
    },
    {
      name: t("plans.individual.name"),
      price: t(`plans.individual.price.${billingPeriod}`),
      period: t(`plans.individual.period.${billingPeriod}`),
      buttonText: t("plans.individual.buttonText"),
      androidButton: t("plans.individual.androidButton"),
      features: t.raw("plans.individual.features"),
    },
    {
      name: t("plans.business.name"),
      price: t(`plans.business.price.${billingPeriod}`),
      period: t(`plans.business.period.${billingPeriod}`),
      buttonText: t("plans.business.buttonText"),
      androidButton: t("plans.business.androidButton"),
      features: t.raw("plans.business.features"),
    },
  ];
};
