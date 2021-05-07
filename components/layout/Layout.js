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
      </div>
    </>
  );
}
