import React from 'react';

export const LangSelector: React.FC = () => {
  // const router = useRouter();
  // const setLanguage = (lang: string) => {
  //   router.replace(router., undefined, { locale: lang });
  // };

  return (
    <select
      className="lang-selector"
      // onChange={(e) => setLanguage(e.target.value)}
      value={'en'}
    >
      <option value="en">🇬🇧 English</option>
      <option value="cs">🇨🇿 Česky</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="de">🇩🇪 Deutsch</option>
    </select>
  );
};
