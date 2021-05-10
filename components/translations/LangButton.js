import React, { SyntheticEvent } from 'react';

import styles from '../../styles/LangButton.module.scss';

export const LangButton = ({ changeLanguage, language }) => {
  return (
    <button
      className={styles.langBtn}
      onClick={changeLanguage}
      value={language}
    >
      {language}
    </button>
  );
};
