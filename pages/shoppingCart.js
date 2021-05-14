import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { Layout } from '../components/layout/Layout';
import styles from '../styles/ShoppingCart.module.scss';

export default function ShoppingCart() {
  return (
    <>
      <Head>
        <title>My Cart</title>
      </Head>
      <Layout>
        <p></p>
      </Layout>
    </>
  );
}
