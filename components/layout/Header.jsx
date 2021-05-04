import styles from '../../styles/Header.module.scss';
export const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <a href="/aboutUs">About us</a>
        </li>
        <li>
          <a href="/shop/shopList">Shop</a>
        </li>
        <li>
          <a href="/contact">Contacts</a>
        </li>
      </ul>
      <a className="fas fa-bar"></a>
    </header>
  );
};
