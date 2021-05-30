import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { Layout } from '../components/layout/Layout';

import styles from '../styles/About.module.scss';

export default function AboutUs() {
  const { t, i18n } = useTranslation();

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
            <p>{t('aboutUs.paragraph')} </p>
          </section>
        </section>
      </Layout>
    </>
  );
}
