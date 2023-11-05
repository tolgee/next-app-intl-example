export const dynamic = 'force-dynamic' 

import { ReactNode } from "react";
import { useLocale } from 'next-intl';

type Props = {
  children: ReactNode;
};

export default async function RootLayout(props: Props) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
