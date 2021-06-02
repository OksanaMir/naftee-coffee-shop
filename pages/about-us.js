import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { request } from '../../lib/datoCMS';
import { useEffect, useState } from 'react';
import { Layout } from '../components/layout/Layout';

import styles from '../styles/About.module.scss';

export default function AboutUs() {
  const { i18n } = useTranslation();
  const [data, setData] = useState('');

  useEffect(() => {
    request({
      query: ABOUT_QUERY,
      variables: { locale: i18n.language },
    }).then((response) => {
      setData(response);
    });
  }, [i18n.language]);

  return (
    <>
      <Head>
        <title>About us</title>
      </Head>

      <Layout>
        <section className={styles.aboutUsContainer}>
          <h1>About us.</h1>
          <section className={styles.aboutSection}>
            <img alt="about us" src="../assets/aboutUs.jpg" />
            <p>{data?.about?.history}</p>
          </section>
        </section>
      </Layout>
    </>
  );
}

const ABOUT_QUERY = `query AboutQuery($locale: SiteLocale){
 
  about(locale: $locale) {
    history
  }
}`;
