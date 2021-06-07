import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../../../styles/GoToDetailButton.module.scss';
export function GoToDetailButton({ id }) {
  const router = useRouter();

  return (
    <Link
      className={styles.button}
      href={`/shop/details/${id}`}
      locale={router.locale}
    >
      <a className={styles.productButton}>Detail produktu</a>
    </Link>
  );
}
