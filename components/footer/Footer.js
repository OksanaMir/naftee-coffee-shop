import Link from 'next/link';


import styles from '../../styles/Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contacts}>
        <li>
          <a href="tel:+4733378X01">+47 333 78 X01</a>
        </li>
        <li>
          <a href="mailto:webmaster@example.com">Naftee@naftee.com</a>
        </li>
        <li>
          <address>Box 564, Disneyland, USA</address>
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
          <a href="/faq">FAQ</a>
        </li>
      </ul>
    </footer>
  );
}
