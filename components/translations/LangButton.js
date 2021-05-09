import React, { SyntheticEvent } from 'react';

export const LangButton = ({ changeLanguage, language }) => {
  return (
    <button onClick={changeLanguage} value={language}>
      {language}
    </button>
  );
};
