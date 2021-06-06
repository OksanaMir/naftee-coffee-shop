import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import { LangButton } from '../translations/LangButton';
import styles from '../../styles/HeaderContent.module.scss';
import {useRouter} from "next/router";

export function HeaderContent({ headerClassName, setShowMenu, showMenu }) {
  const { t, i18n } = useTranslation();
const router = useRouter()

  return (
    <ul className={styles[headerClassName]}>
      <li>
        <Link href="/">
          <a>{t('header.home', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}</a>
        </Link>
      </li>

      <li>
        <Link href="/about-us">
          <a>{t('header.aboutUs', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}</a>
        </Link>
      </li>
      <li>
        <Link href="/shop/shop-list">
          <a>{t('header.shop', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}</a>
        </Link>
      </li>
      <li>
        <Link href="/quiz">
          <a>{t('header.quiz', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}</a>
        </Link>
      </li>
      {/* <li>
        <Link href="/">
          <a>{t('header.nafteeBar')}</a>
        </Link>
      </li> */}
      <li>
        <Link href="/contact">
          <a>{t('header.contacts', {lng: router.locale  === "cs"? 'cs_CZ': "en"})}</a>
        </Link>
      </li>
      <li className={styles.langSwitcher}>
        <div className={styles.btnContainer}>
          <LangButton  language={'CZ'} />/
          <LangButton  language={'EN'} />
        </div>
      </li>
    </ul>
  );
}
