import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { Layout } from '../components/layout/Layout';
import { ExpandableText } from '../components/expandableText/ExpandableText';
import { request } from '../lib/datoCMS';

export default function Faq() {
  const { i18n } = useTranslation();
  const [data, setData] = useState({});

  useEffect(() => {
    request({
      query: FAQ_QUERY,
      variables: { locale: i18n.language },
    }).then((response) => {
      setData(response);
    });
  }, [i18n.language]);

  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <Layout>
        <h1>Frequently asked questions</h1>
        <ul>
          {data?.allFaqs?.map((faq) => {
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
const FAQ_QUERY = `query FaqQuery($locale: SiteLocale){
  allFaqs(locale: $locale){
    question
    id
    answer
  }}`;
