'use client';

import { useTranslate } from '@tolgee/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function ClientComponent() {
  const router = useRouter();
  const { t } = useTranslate();
  const [counter, setCounter] = useState(0);

  function handleRefresh() {
    router.refresh();
  }

  function handleIncrement() {
    setCounter((val) => (val += 1));
  }

  return (
    <>
      <div>
        <button onClick={handleRefresh}>{t('delete-item-button')}</button>
      </div>
      <div>
        <button onClick={handleIncrement}>Increment {counter}</button>
      </div>
    </>
  );
}
