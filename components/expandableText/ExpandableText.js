import Link from 'next/link';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/ExpandableText.module.scss';

export function ExpandableText(props) {
  //const {question, answer} = props;

  const [showParagraph, setShowParagraph] = useState(false);
  return (
    <article className={styles.expandableText}>
      <div>
        <h3>{props.title}</h3>
        <div onClick={() => setShowParagraph(!showParagraph)}>
          <FontAwesomeIcon
            icon={showParagraph ? faMinus : faPlus}
            color={'black'}
          />
        </div>
      </div>

      {showParagraph && (
        <>
          <p className={styles.text}>{props.paragraph}</p>
          {/* <div>{props.children} </div> */}
        </>
      )}
    </article>
  );
}
