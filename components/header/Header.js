import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/Header.module.scss';
import { HeaderContent } from './HederContent';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles.header}>
      <HeaderContent headerClassName="headerDesktop" />
      {showMenu && (
        <HeaderContent
          headerClassName="headerMobile"
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      )}
      <div onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faBars} color={'white'} />
      </div>
    </header>
  );
}
