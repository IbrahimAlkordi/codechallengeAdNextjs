import React from 'react';
import classes from './Translate.module.scss';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function Translate() {
  // eslint-disable-next-line
  const{t, i18n} = useTranslation();
  const router = useRouter()
  return (
    <li>
      {i18n.language === 'en' && (
        <button
          className={classes.translate_btn}
          onClick={() => {
            // i18n.changeLanguage('ar');
            router.push("/ar");
          }}
        >
          ar
        </button>
      )}
      {i18n.language === 'ar' && (
        <button
          className={classes.translate_btn}
          onClick={() => {
            // i18n.changeLanguage('en');
            router.push("/en");
          }}
        >
          en
        </button>
      )}
    </li>
  );
}

export default Translate;
