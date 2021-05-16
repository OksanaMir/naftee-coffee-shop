import Link from 'next/link';

import styles from '../../styles/Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contacts}>
        <li>
          <a href="tel:+420776245218">+420 776 245 218</a>
        </li>
        <li>
          <a href="mailto:nafteecoffee@gmail.com">nafteecoffee@gmail.com</a>
        </li>
        <li>
          <address>Czech Budweis, Czech Republic</address>
        </li>
      </ul>
      <ul>
        <li className={styles.social}>
          <Link href="https://www.instagram.com/nafteecoffee/">
            <a className="fa fa-instagram" />
          </Link>
          <Link href="https://www.facebook.com/search/top?q=Naftee">
            <a className="fa fa-facebook" />
          </Link>
        </li>

        <li>
          <a href="/terms">Terms and Conditions</a>
        </li>
        <li>
          <a href="/privacy">Privacy policy</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>
    </footer>
  );
}
