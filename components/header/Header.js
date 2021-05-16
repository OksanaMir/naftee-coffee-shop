import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingBasket,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { HeaderContent } from './HeaderContent';
import { LangButton } from '../translations/LangButton';

import styles from '../../styles/Header.module.scss';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    console.log('button', event.currentTarget.value);
    i18n
      .changeLanguage(event.currentTarget.value === 'EN' ? 'en' : 'cs_CZ')
      .catch(console.error);
  };

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <a>
              <img
                className={styles.logo}
                src="/assets/naftee_specialty_logo.png"
              />
            </a>
          </Link>
        </div>

        <div className={styles.navigation}>
          <div className={styles.navigationContent}>
            <HeaderContent headerClassName="headerDesktop" />
            <div className={styles.langSwitcher}>
              <div className={styles.btnContainer}>
                <LangButton changeLanguage={changeLanguage} language={'CZ'} />/
                <LangButton changeLanguage={changeLanguage} language={'EN'} />
              </div>
            </div>
            <div className={styles.shoppingBasket}>
              <Link href="/shoppingCart">
                <a>
                  <FontAwesomeIcon icon={faShoppingBasket} color={'white'} />
                </a>
              </Link>
            </div>
          </div>
          {!showMenu ? (
            <div
              className={styles.burgerMenu}
              onClick={() => setShowMenu(!showMenu)}
            >
              <FontAwesomeIcon icon={faBars} color={'white'} />
            </div>
          ) : (
            <div
              className={styles.burgerMenu}
              onClick={() => setShowMenu(!showMenu)}
            >
              <FontAwesomeIcon icon={faTimes} color={'white'} />
            </div>
          )}
        </div>
      </header>
      {showMenu && (
        <HeaderContent
          headerClassName="headerMobile"
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      )}
    </>
  );
}
