import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../components/layout/Layout';
import { FaqItem } from '../components/faq/FaqItem';
import { faqData } from '../mocks/faqContent';

export default function Faq() {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <Layout>
        <h1>Frequently asked questions</h1>
        <ul>
          {faqData.map((faq) => {
            return (
              <li key={faq.id}>
                {/* props */}
                <FaqItem question={faq.question} answer={faq.answer} />
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}
