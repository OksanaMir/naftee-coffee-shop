import React from 'react';

import styles from '../../styles/LangButton.module.scss';
import {useRouter} from "next/router";
import Link from "next/link";

export const LangButton = ({  language }) => {
  const { pathname, query } = useRouter();
  let dynamicPathname = pathname
  if (query.id) {
    dynamicPathname = dynamicPathname.replace('[id]', query.id)
  }
  const locale = language  === "CZ"? 'cs': "en"
  console.log('Pathname', pathname)
  return (
    <Link
      className={styles.langBtn}
      href={dynamicPathname}
      locale={locale}
    >
      {language}
    </Link>
  );
};
