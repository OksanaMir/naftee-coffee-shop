import Link from "next/link";

import { Header } from "../header/Header";

import styles from "../../styles/Layout.module.scss";

export function Layout({ children }) {
  return (
    <><div className={styles.layoutSection}>
      <Header />
      <section className={styles.layoutChildrenSection}>{children}</section>
      <footer>
        <ul>
          <li>Terms</li>
          <li>Contacts</li>
          <li>
            <Link href="https://www.instagram.com/nafteecoffee/">
              <a className="fa fa-instagram" />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/search/top?q=Naftee">
              <a className="fa fa-facebook" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    </>
  );
}
