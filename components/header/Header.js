import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <ul>
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
          <Link href="/contact">
            <a>Contacts</a>
          </Link>
        </li>
      </ul>

      <FontAwesomeIcon icon={faBars} color={"white"} />
    </header>
  );
}
