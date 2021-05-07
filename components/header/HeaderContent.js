import Link from 'next/link';
import styles from '../../styles/HeaderContent.module.scss';

export function HeaderContent({ headerClassName, setShowMenu, showMenu }) {
  return (
    <ul className={styles[headerClassName]}>
      <li>
        <Link href="/about-us">
          <a>About us</a>
        </Link>
      </li>
      <li>
        <Link href="/shop/shop-list">
          <a>Shop</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Quiz</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Basket</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Naftee Bar</a>
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
//<i class="fas fa-shopping-basket"></i>
