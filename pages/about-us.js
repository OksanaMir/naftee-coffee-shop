import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { request } from '../lib/datoCMS';
import { useEffect, useState } from 'react';
import { Loader } from '../components/ loader/Loader';

import { Layout } from '../components/layout/Layout';

import styles from '../styles/About.module.scss';

export default function AboutUs() {
  const { i18n } = useTranslation();
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    request({
      query: ABOUT_QUERY,
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
        <title>About us</title>
      </Head>
      {data?.about && (
        <Layout>
          {isLoading ? (
            <Loader />
          ) : (
            <section className={styles.aboutUsContainer}>
              <h1>About us.</h1>
              <section className={styles.aboutSection}>
                <img alt="about us" src="../assets/aboutUs.jpg" />

                <span
                  dangerouslySetInnerHTML={createMarkup(data.about.history)}
                />

                {/* <p>{data?.about?.history}</p> */}
              </section>
            </section>
          )}
        </Layout>
      )}
    </>
  );
}

const ABOUT_QUERY = `query AboutQuery($locale: SiteLocale){
 
  about(locale: $locale) {
    history(markdown: true)
  }
}`;
