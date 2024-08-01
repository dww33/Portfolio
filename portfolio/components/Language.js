import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const languageNames = {
  'en-US': 'English',
  'zh-CN': '中文简体',
  'zh-TW': '中文繁体'
};

const Language = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { locales, locale: currentLocale } = router;
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false); 
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown} 
        className="nav-item cursor-pointer text-custom1 custom-underline"
      >
        {languageNames[currentLocale]}
      </button>
      {dropdownOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-custom2">
          {locales.filter(locale => locale !== currentLocale).map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale} passHref legacyBehavior>
                <a className="block px-4 py-2 text-custom1 hover:bg-custom3">
                  {languageNames[locale]}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
