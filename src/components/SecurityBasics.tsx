'use client';

import { useTranslations } from 'next-intl';
import { calendlyLink } from "@/constants/nav-links";

export const SecurityBasics = () => {
  const t = useTranslations('security.basics');

  return (
    <>
      <h2 className="text-colored">{t('howItWorks.title')}</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          {t('howItWorks.captureOptions.title')}
          <ul className="list-circle pl-6 mt-2 space-y-1">
            <li>
              <strong>{t('howItWorks.captureOptions.webApp.title')}</strong> {t('howItWorks.captureOptions.webApp.description')}
            </li>
            <li>
              <strong>{t('howItWorks.captureOptions.phoneApp.title')}</strong> {t('howItWorks.captureOptions.phoneApp.description')}
            </li>
          </ul>
        </li>
        <li>
          <strong>{t('howItWorks.calendarIntegration.title')}</strong> {t('howItWorks.calendarIntegration.description')}
        </li>
        <li>
          {t('howItWorks.virtualMeetings.title')}
          <ul className="list-circle pl-6 mt-2 space-y-1">
            {t.raw('howItWorks.virtualMeetings.options').map((option: string, index: number) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </li>
        <li>{t('howItWorks.compatibility')}</li>
        <li>{t('howItWorks.aiPartners')}</li>
      </ul>

      <h2 className="mt-8 text-colored">{t('aiTraining.title')}</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          <strong>{t('aiTraining.dataPrivacy.title')}</strong> {t('aiTraining.dataPrivacy.description')}
        </li>
      </ul>

      <h2 className="mt-8 text-colored">{t('recordings.title')}</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          <strong>{t('recordings.minimalHandling.title')}</strong> {t('recordings.minimalHandling.description')}
        </li>
        <li>{t('recordings.botAssisted')}</li>
      </ul>

      <h2 className="mt-8 text-colored">{t('dataControl.title')}</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          <strong>{t('dataControl.privacy.title')}</strong> {t('dataControl.privacy.description')}
        </li>
        <li>
          <strong>{t('dataControl.retention.title')}</strong> {t('dataControl.retention.description')}
        </li>
      </ul>

      <h2 className="mt-8 text-colored">{t('infrastructure.title')}</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          <strong>{t('infrastructure.storage.title')}</strong> {t('infrastructure.storage.description')}
        </li>
        <li>
          <strong>{t('infrastructure.backups.title')}</strong> {t('infrastructure.backups.description')}
        </li>
        <li>
          <strong>{t('infrastructure.team.title')}</strong> {t('infrastructure.team.description')}
        </li>
      </ul>

      <h2 className="mt-8 text-colored">{t('help.title')}</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-400">
        <li>
          {t('help.contact')} {""}
          <a
            className="underline underline-offset-2 decoration-tertiary hover:decoration-accent-strong hover:text-accent-strong"
            href={calendlyLink}
          >
            reach out to our team.
          </a>
        </li>
      </ul>
    </>
  );
};