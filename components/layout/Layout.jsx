import styles from '../../styles/Layout.module.scss';
import { Header } from './Header';
export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <section className={styles.layoutSection}>{children}</section>
      <footer>
        <ul>
          <li>Terms</li>
          <li>Contacts</li>
          <li>
            {' '}
            <a
              href="https://www.instagram.com/nafteecoffee/"
              class="fa fa-instagram"
            ></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/search/top?q=Naftee"
              class="fa fa-facebook"
            ></a>
          </li>
        </ul>
      </footer>
    </>
  );
};
