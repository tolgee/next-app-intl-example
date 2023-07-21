import { getTranslate } from '@/tolgeeServer';

export const Component1 = async () => {
  const t = await getTranslate();
  return <div>{t('on-the-road-title')}</div>;
};
