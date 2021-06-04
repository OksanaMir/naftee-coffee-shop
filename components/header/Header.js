import Link from 'next/link';
import { useEffect, useState } from 'react';
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
    i18n
      .changeLanguage(event.currentTarget.value === 'EN' ? 'en' : 'cs_CZ')
      .catch(console.error);
  };

  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    const Snip = window?.Snipcart;
    const initialState = Snip?.store?.getState();
    setItemsCount(initialState?.cart?.items?.count);

    const unsubscribe = Snip?.store?.subscribe(() => {
      const newState = Snip?.store?.getState();
      setItemsCount(newState?.cart?.items?.count);
    });

    return () => unsubscribe && unsubscribe();
  }, [setItemsCount]);

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <a>
              <img
                alt={'logo'}
                className={styles.logo}
                src="/assets/naftee_logo_mobile.png"
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
            <div className={styles.shoppingBasket} id="snipcartShoppingBasket">
              <div className="snipcart-checkout">
                <div className=" snipcartShoppingBasket">
                  <FontAwesomeIcon icon={faShoppingBasket} color={'white'} />
                </div>
                <span className={styles.itemsCount}>{itemsCount}</span>
              </div>
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
