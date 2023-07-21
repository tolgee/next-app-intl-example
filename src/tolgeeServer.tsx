import { cache } from 'react';

import { TFnType } from '@tolgee/web';

import en from '../public/i18n/en.json';
import cs from '../public/i18n/cs.json';
import de from '../public/i18n/de.json';
import fr from '../public/i18n/fr.json';
import { useLocale } from 'next-intl';
import { ParamsTags, TBase, TProps } from '@tolgee/react';
import { TolgeeBase } from './i18n';

export const getTolgeeInstance = cache(async (locale: string) => {
  const tolgee = TolgeeBase().init({
    staticData: { en, cs, de, fr },
    observerOptions: {
      fullKeyEncode: true,
    },
    language: locale,
    fetch: async (input, init) => {
      const data = await fetch(input, { ...init, next: { revalidate: 0 } });
      return data;
    },
  });

  await tolgee.run();

  return tolgee;
});

export const getTolgee = async () => {
  const locale = useLocale();
  const tolgee = await getTolgeeInstance(locale);
  return tolgee;
};

export const getTranslate = async () => {
  const tolgee = await getTolgee();
  return tolgee.t;
};

export async function T(props: TProps) {
  const t = await getTranslate();
  return <TBase t={t as TFnType<ParamsTags>} {...props} />;
}
