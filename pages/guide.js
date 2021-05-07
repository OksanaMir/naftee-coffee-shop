import Head from 'next/head';

import { Layout } from '../components/layout/Layout';

import styles from '../styles/Guide.module.scss';

export default function Guide() {
  return (
    <>
      <Head>
        <title>Guide</title>
      </Head>

      <Layout>
        <section className={styles.guideSection}>
          <h1>Guide</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </section>
      </Layout>
    </>
  );
}
