import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import { LangButton } from '../translations/LangButton';
import styles from '../../styles/HeaderContent.module.scss';

export function HeaderContent({ headerClassName, setShowMenu, showMenu }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    console.log('button', event.currentTarget.value);
    i18n
      .changeLanguage(event.currentTarget.value === 'EN' ? 'en' : 'cs_CZ')
      .catch(console.error);
  };
  return (
    <ul className={styles[headerClassName]}>
      <li>
        <Link href="/">
          <a>{t('header.home')}</a>
        </Link>
      </li>

      <li>
        <Link href="/about-us">
          <a>{t('header.aboutUs')}</a>
        </Link>
      </li>
      <li>
        <Link href="/shop/shop-list">
          <a>{t('header.shop')}</a>
        </Link>
      </li>
      <li>
        <Link href="/quiz">
          <a>{t('header.quiz')}</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>{t('header.nafteeBar')}</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>{t('header.contacts')}</a>
        </Link>
      </li>
      <li className={styles.langSwitcher}>
        <div className={styles.btnContainer}>
          <LangButton changeLanguage={changeLanguage} language={'CZ'} />/
          <LangButton changeLanguage={changeLanguage} language={'EN'} />
        </div>
      </li>
    </ul>
  );
}
