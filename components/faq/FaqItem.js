import Link from 'next/link';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/FaqItem.module.scss';
import Faq from '../../pages/faq';

export function FaqItem(props) {
  //const {question, answer} = props;

  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className={styles.faq}>
      <div>
        <h3>{props.question}</h3>
        <div onClick={() => setShowAnswer(!showAnswer)}>
          <FontAwesomeIcon icon={faArrowDown} color={'black'} />
        </div>
      </div>

      {showAnswer && (
        <>
          <p>{props.answer}</p>
          <div>
            <Link href="https://www.instagram.com/nafteecoffee/">
              <a className="fa fa-instagram" />
            </Link>
            <Link href="https://www.facebook.com/search/top?q=Naftee">
              <a className="fa fa-facebook" />
            </Link>
          </div>
        </>
      )}
    </article>
  );
}
