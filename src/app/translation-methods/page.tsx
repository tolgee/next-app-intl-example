import { Navbar } from "@/components/Navbar";
import { getStaticData } from "@/tolgee/shared";
import { TolgeeNextProvider } from "@/tolgee/client";

import { TranslationMethodsServer } from "./TranslationMethodsServer";
import { TranslationMethodsClient } from "./TranslationMethodsClient";
import { getLocale } from "@/tolgee/locale";
import Link from "next/link";

export default async function AboutPage() {
  const locale = await getLocale();
  const locales = await getStaticData(["en", locale]);

  return (
    <TolgeeNextProvider locale={locale} locales={locales}>
      <main className="translation-methods">
        <Navbar>
          <div slot="menu-items">
            <Link href="/">The example app</Link>
          </div>
        </Navbar>
        <TranslationMethodsClient />
        <TranslationMethodsServer />
      </main>
    </TolgeeNextProvider>
  );
}
