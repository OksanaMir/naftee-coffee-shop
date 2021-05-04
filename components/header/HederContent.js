import Link from 'next/link';
import styles from '../../styles/HeaderContent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';

export function HeaderContent({ headerClassName, setShowMenu, showMenu }) {
  return (
    <ul className={styles[headerClassName]}>
      <li>
        <Link href="/about-us">
          <a>About us</a>
        </Link>

        <div onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={faCross} color={'white'} />
        </div>
      </li>
      <li>
        <Link href="/shop/shop-list">
          <a>Shop</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contacts</a>
        </Link>
      </li>
    </ul>
  );
}
