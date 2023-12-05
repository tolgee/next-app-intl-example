import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "es"] as const;
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
