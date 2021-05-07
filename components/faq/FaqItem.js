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
          We are a small, family-owned business that select the best sorts of
          coffee, directly buy coffee on the best farms, roasting coffee the
          old-fashioned way and packaging coffee with love. Our mission has
          always been to produce the best-tasting, highest quality coffee and
          deliver it to our customers with an unsurpassed level of customer
          service. To accomplish that, we use only specialty arabica and combine
          that with our fresh roasting technology - and you get perfect coffee
          flavor with special taste. As you can see, our passion is quality. To
          make you are satisfied - we do our best and always with love!
        </p>
      )}
    </article>
  );
}
