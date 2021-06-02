import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { request } from '../lib/datoCMS';
import { Loader } from '../components/ loader/Loader';

import { ExpandableText } from '../components/expandableText/ExpandableText';
import { Layout } from '../components/layout/Layout';
import styles from '../styles/Privacy.module.scss';
import { useEffect, useState } from 'react';

export default function Privacy() {
  const { i18n } = useTranslation();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    request({
      query: PRIVACY_QUERY,
      variables: { locale: i18n.language },
    })
      .then((response) => {
        setData(response);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [i18n.language]);
  console.log(data, 'dataIndex');

  function createMarkup(paragrapPdp) {
    return { __html: `${paragrapPdp}` };
  }

  return (
    <>
      <Head>
        <title>Privacy policy</title>
      </Head>
      <Layout>
        {isLoading ? (
          <Loader />
        ) : (
          <section className={styles.privacyContainer}>
            <div className={styles.main}>
              <h1>Privacy Policy</h1>
              <ul className={styles.list}>
                {data?.allPersonalDataProtections?.map((policy, index) => {
                  return (
                    <li key={policy.id}>
                      <ExpandableText
                        id={`privacyIconWrapper${index}`}
                        title={policy.headlinePdp}
                        paragraph={
                          <span
                            dangerouslySetInnerHTML={createMarkup(
                              policy.paragrapPdp,
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

const PRIVACY_QUERY = `query PrivacyQuery($locale: SiteLocale) {
  allPersonalDataProtections(orderBy: _createdAt_ASC locale: $locale) {
    headlinePdp
    id
    paragrapPdp(markdown: true)
  }
  }`;
