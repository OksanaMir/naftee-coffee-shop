import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { Layout } from '../components/layout/Layout';
import { Loader } from '../components/ loader/Loader';
import { ExpandableText } from '../components/expandableText/ExpandableText';
import { request } from '../lib/datoCMS';
import styles from '../styles/Faq.module.scss';

export default function Faq({data}) {

    function createMarkup(answer) {
        return { __html: `${answer}` };
    }
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <Layout>

          <section className={styles.faqContainer}>
            <h1>Frequently asked questions.</h1>
            <ul className={styles.list}>
              {data?.allFaqs?.map((faq, index) => {
                return (
                  <li key={faq.id}>
                    {/* props */}
                    <ExpandableText
                      id={`faqIconWrapper${index}`}
                      title={faq.question}

                      paragraph={
                        <span
                          dangerouslySetInnerHTML={createMarkup(faq.answer)}
                        />
                      }

                    />
                  </li>
                );
              })}
            </ul>
          </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
    const {locale} = context
    const data = await request({
        query: FAQ_QUERY,
        variables: { locale: locale === "cs"? 'cs_CZ': "en" },
    });

    return {
        props: {
            data
        },
    };
}

const FAQ_QUERY = `query FaqQuery($locale: SiteLocale){
  allFaqs(locale: $locale){
    question
    id
    answer(markdown: true)
  }}`;
