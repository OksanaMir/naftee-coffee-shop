import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../components/layout/Layout';
import { FaqItem } from '../components/faq/FaqItem';
export default function Faq() {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <Layout>
        <h1>Frequently asked questions</h1>
        <ul>
          <li>
            <FaqItem />
          </li>
          <li>
            <FaqItem />
          </li>
          <li>
            <FaqItem />
          </li>
          <li>
            <FaqItem />
          </li>
        </ul>
      </Layout>
    </>
  );
}
