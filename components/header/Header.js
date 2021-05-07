import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { HeaderContent } from './HeaderContent';

import styles from '../../styles/Header.module.scss';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <HeaderContent headerClassName="headerDesktop" />
        {!showMenu ? (
          <div onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} color={'white'} />
          </div>
        ) : (
          <div onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faTimes} color={'white'} />
          </div>
        )}
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
