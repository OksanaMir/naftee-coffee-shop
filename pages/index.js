import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { request } from '../lib/datoCMS';

import { Carousel } from 'antd';
import { LandingPageAboutUs } from '../components/landingPage/LandingPageAboutUs';
import { Layout } from '../components/layout/Layout';
import { ProductOverView } from '../components/product/ProductOverView';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const { i18n } = useTranslation();
  const [data, setData] = useState({});

  useEffect(() => {
    request({
      query: PRODUCT_QUERY,
      variables: { locale: i18n.language },
    }).then((response) => {
      setData(response);
    });
  }, [i18n.language]);
  console.log(data, 'dataIndex');

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <div className="container">
      <Head>
        <title>Landing page Naftee</title>
      </Head>

      <Layout>
        <main>
          <LandingPageAboutUs />
          <section className={styles.main}>
            <Carousel accessibility={true} arrows={true} afterChange={onChange}>
              {data &&
                data.allProducts &&
                data.allProducts.map((product) => {
                  return (
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ProductOverView key={product.id} data={product} />
                    </div>
                  );
                })}
            </Carousel>
          </section>
        </main>
      </Layout>
    </div>
  );
}
const PRODUCT_QUERY = `query ProductQuery($locale: SiteLocale){
  allProducts(locale: $locale) {
    amount
    taste
    productName
    method
  select
  id
  productPhoto{
    alt
    id
    url
    title
    width
    height
  }
  price
  cuppingScoreRatingSca
  
  }
}`;
