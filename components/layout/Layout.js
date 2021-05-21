import Link from 'next/link';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import styles from '../../styles/Layout.module.scss';

export function Layout({ children }) {
  return (
    <>
      <div className={styles.layoutSection}>
        <Header />
        <section className={styles.layoutChildrenSection}>{children}</section>
        <Footer />
        <div
          id="snipcart"
          data-config-modal-style="side"
          data-api-key="YmM2YzIwOTEtMDZjZi00NTk2LTg4OWItZGUxMjU4ZWVkM2ExNjM3NTY5NTIzNTU2Mzc2ODgz"
          hidden
        ></div>
      </div>
    </>
  );
}
