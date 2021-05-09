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
        <section className={styles.aboutSection}>
          <p>{t('aboutUs.paragraph')} </p>
        </section>
      </Layout>
    </>
  );
}
