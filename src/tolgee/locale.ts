"use server";

import { cookies } from "next/headers";
import { DEFAULT_LOCALE } from "./shared";

const LOCALE_COOKIE = "next_locale";

export async function setLocale(locale: string) {
  const cookieStore = cookies();
  cookieStore.set({
    name: LOCALE_COOKIE,
    value: locale,
  });
}

export async function getLocale() {
  const cookieStore = cookies();
  return cookieStore.get(LOCALE_COOKIE)?.value ?? DEFAULT_LOCALE;
}
