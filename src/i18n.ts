import { FormatIcu } from '@tolgee/format-icu';
import { DevTools, Tolgee } from '@tolgee/react';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export function TolgeeBase() {
  return Tolgee().use(FormatIcu()).use(DevTools()).updateDefaults({
    apiKey: apiKey,
    apiUrl: apiUrl,
  });
}
