import Head from "next/head";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

import {Layout} from "../components/layout/Layout";
import {ExpandableText} from "../components/expandableText/ExpandableText";
import {request} from "../lib/datoCMS";
import styles from "../styles/Faq.module.scss";

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
          <h1>Frequently asked questions</h1>
          <ul className={styles.list}>
            {data?.allFaqs?.map((faq, index) => {
              return (
                <li key={faq.id}>
                  <ExpandableText
                    id={`faqIconWrapper${index}`}
                    title={faq.question}
                    paragraph={
                      <span
                        dangerouslySetInnerHTML={createMarkup(faq.answer)}
                      />
                    }

                    // paragraph={faq.answer}
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
const FAQ_QUERY = `query FaqQuery($locale: SiteLocale){
  allFaqs(locale: $locale){
    question
    id
    answer(markdown: true)
  }}`;
