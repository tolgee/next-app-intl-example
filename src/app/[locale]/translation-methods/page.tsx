import { Navbar } from "components/Navbar";
import { TranslationMethods } from "./TranslationMethods";
import Link from "next-intl/link";

export default function AboutPage() {
  return (
    <main className="translation-methods">
      <Navbar>
        <div slot="menu-items">
          <Link href="/">The example app</Link>
        </div>
      </Navbar>
      <TranslationMethods />
    </main>
  );
}
