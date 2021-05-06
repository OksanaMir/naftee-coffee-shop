import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/FaqItem.module.scss';
import Faq from '../../pages/faq';

export function FaqItem() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className={styles.faq}>
      <div>
        <h3>What makes coffee special?</h3>
        <div onClick={() => setShowAnswer(!showAnswer)}>
          <FontAwesomeIcon icon={faArrowDown} color={'black'} />
        </div>
      </div>
      {showAnswer && (
        <p>
          /dgfhfjjkvfdovkjvdnkdnkvncsbdkqbwdkb dsjdbjsbjbsmk dkfnsf sjfnsjcjsb
        </p>
      )}
    </article>
  );
}
