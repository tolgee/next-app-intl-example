import { getLocale } from "next-intl/server";
import { Link } from "@/navigation";
import { Navbar } from "@/components/Navbar";
import { TolgeeNextProvider } from "@/tolgee/client";

import { TranslationMethodsServer } from "./TranslationMethodsServer";
import { TranslationMethodsClient } from "./TranslationMethodsClient";

export default async function AboutPage() {
  const locale = await getLocale();

  return (
    <TolgeeNextProvider locale={locale} locales={{}}>
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
