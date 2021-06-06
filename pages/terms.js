import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '../components/ loader/Loader';

import { Layout } from '../components/layout/Layout';
import { ExpandableText } from '../components/expandableText/ExpandableText';
import { request } from '../lib/datoCMS';

import styles from '../styles/Terms.module.scss';

export default function Terms() {
  const { i18n } = useTranslation();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    request({
      query: PRODUCT_QUERY,
      variables: { locale: i18n.language },
    })
      .then((response) => {
        setData(response);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [i18n.language]);
  function createMarkup(paragraph) {
    return { __html: `${paragraph}` };
  }

  return (
    <>
      <Head>
        <title>Terms and Conditions.</title>
      </Head>
      <Layout>
        {isLoading ? (
          <Loader />
        ) : (
          <section className={styles.termsContainer}>
            <div className={styles.main}>
              <h1>Terms and Conditions</h1>
              <ul className={styles.list}>
                {data?.allTermAndConditions?.map((term, index) => {
                  return (
                    <li key={term.id}>
                      <ExpandableText
                        id={`termsIconWrapper${index}`}
                        title={term.headline}
                        paragraph={
                          <li
                            dangerouslySetInnerHTML={createMarkup(
                              term.paragraph,
                            )}
                          />
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
}

const TERMS_QUERY = `query TermsQuery($locale: SiteLocale)
{
  allTermAndConditions(orderBy: _createdAt_ASC locale:$locale){
    pageName
    paragraph(markdown: true)
    headline
    id
  }
 }`;
