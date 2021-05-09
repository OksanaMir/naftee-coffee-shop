import Head from 'next/head';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../components/layout/Layout';
import { ExpandableText } from '../components/expandableText/ExpandableText';
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
                <ExpandableText
                  title={faq.question}
                  children={
                    <>
                      <Link href="https://www.instagram.com/nafteecoffee/">
                        <a className="fa fa-instagram" />
                      </Link>
                      <Link href="https://www.facebook.com/search/top?q=Naftee">
                        <a className="fa fa-facebook" />
                      </Link>
                    </>
                  }
                  paragraph={faq.answer}
                />
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}
