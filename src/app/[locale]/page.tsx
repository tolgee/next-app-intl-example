import { getTranslate } from "tolgee/server";
import { Todos } from "./Todos";
import Link from "next-intl/link";

import { Navbar } from "components/Navbar";
import { getItems } from "./actions";



export default async function IndexPage() {
  const t = await getTranslate();
  const items = await getItems()

  return (
    <div className="background-wrapper">
      <div className="example">
        <Navbar>
          <Link href="/translation-methods">
            {t("menu-item-translation-methods")}
          </Link>
        </Navbar>
        <header>
          <img src="/img/appLogo.svg" />
          <h1 className="header__title">{t("app-title")}</h1>
        </header>
        <Todos items={items} />
      </div>
    </div>
  );
}
