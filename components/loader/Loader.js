import styles from '../../styles/Loader.module.scss';
export function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spanned}>
        <div className={styles.coffee_cup}></div>
      </div>
    </div>
  );
}
