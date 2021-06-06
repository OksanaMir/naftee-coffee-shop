import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { request } from '../lib/datoCMS';
import { useEffect, useState } from 'react';
import { Loader } from '../components/ loader/Loader';

import { Layout } from '../components/layout/Layout';

import styles from '../styles/About.module.scss';

export default function AboutUs({data}) {
  const { t } = useTranslation();

  function createMarkup(paragraph) {
    return { __html: `${paragraph}` };
  }

  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
        <Layout>

            <section className={styles.aboutUsContainer}>
              <h1>About us.</h1>
              <section className={styles.aboutSection}>
                <img alt="About us" src="../assets/AboutUs.jpg" />

                <span
                  className={styles.paragraphWrapper}
                  dangerouslySetInnerHTML={createMarkup(data.about.history)}
                />

              </section>
            </section>
        </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const {locale} = context
  const data = await request({
    query: ABOUT_QUERY,
    variables: { locale: locale === "cs"? 'cs_CZ': "en" },
  });

  return {
    props: {
      data
    },
  };
}

const ABOUT_QUERY = `query AboutQuery($locale: SiteLocale){
 
  about(locale: $locale) {
    history(markdown: true)
  
  }
}`;
