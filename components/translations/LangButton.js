import React from 'react';

import styles from '../../styles/LangButton.module.scss';
import {useRouter} from "next/router";
import Link from "next/link";

export const LangButton = ({  language }) => {
  const {pathname} = useRouter()
  const locale = language  === "CZ"? 'cs': "en"
  return (
    <Link
      className={styles.langBtn}
      href={pathname}
      locale={locale}
    >
      {language}
    </Link>
  );
};
