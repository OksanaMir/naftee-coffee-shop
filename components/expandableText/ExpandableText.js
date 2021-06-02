import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/ExpandableText.module.scss';

export function ExpandableText({ id, paragraph, title }) {
  const [showParagraph, setShowParagraph] = useState(false);
  const onClick = () => {
    setShowParagraph(!showParagraph);
    const elm = document.getElementById(id);
    showParagraph
      ? elm.setAttribute('style', 'transform: rotate(90deg)')
      : elm.setAttribute('style', 'transform: rotate(180deg)');
  };
  return (
    <article className={styles.expandableText}>
      <div className={styles.list}>
        <h3>{title}</h3>
        <div className={styles.iconBox} id={id} onClick={onClick}>
          <FontAwesomeIcon
            icon={showParagraph ? faMinus : faPlus}
            color={'black'}
          />
        </div>
      </div>

      {showParagraph && (
        <>
          <p className={styles.text}>{paragraph}</p>
          {/* <div>{props.children} </div> */}
        </>
      )}
    </article>
  );
}
