import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const languageNames = {
  'en-US': '中文',
  'zh-CN': 'English'
};

const Language = () => {
  const router = useRouter();

  const { locales, locale: currentLocale } = router;

  return (

    <li className="nav-item cursor-pointer text-custom1">
      {locales.map((locale) => {
        if (locale === currentLocale) return null;
        return (

          <Link
            key={locale}
            href={router.asPath}
            locale={locale}
            passHref
            className="custom-underline"
          >
            <button>{languageNames[locale]}</button>
          </Link>
        );
      })}
    </li>
  );
};

export default Language;
