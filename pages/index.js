import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { request } from '../lib/datoCMS';

import { LandingPageAboutUs } from '../components/landingPage/LandingPageAboutUs';
import { Layout } from '../components/layout/Layout';
import { ProductOverView } from '../components/product/ProductOverView';

export default function Home() {
  const { t, i18n } = useTranslation();
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
  return (
    <div className="container">
      <Head>
        <title>Landing page Naftee</title>
      </Head>

      <Layout>
        <main>
          <LandingPageAboutUs />
          {data &&
            data.allProducts &&
            data.allProducts.map((product) => {
              return <ProductOverView data={product} />;
            })}
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
  
  }
}`;
