import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { request } from '../lib/datoCMS';
import { Loader } from '../components/ loader/Loader';
import { isMobile } from 'react-device-detect';
import { ProductTeaser } from '../components/product/ProductTeaser';
import { Carousel } from 'antd';
import { LandingPageAboutUs } from '../components/landingPage/LandingPageAboutUs';
import { Layout } from '../components/layout/Layout';
import { ProductOverView } from '../components/product/ProductOverView';
import styles from '../styles/Index.module.scss';

export default function Index() {
  const { i18n } = useTranslation();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    request({
      query: PRODUCT_QUERY,
      variables: { locale: i18n.language },
    })
      .then((response) => {
        setData(response);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [i18n.language]);

  return (
    <div className="container">
      <Head>
        <title>Landing page Naftee</title>
      </Head>

      <Layout>
        <main>
          <div className={styles.mainPhoto}>
            <LandingPageAboutUs />
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {isMobile ? (
                <section className={styles.mainMobile}>
                  <Carousel accessibility={true} arrows={true}>
                    {data?.allProducts?.map((product) => {
                      return (
                        <div
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          key={product.id}
                        >
                          <ProductOverView key={product.id} data={product} />
                        </div>
                      );
                    })}
                  </Carousel>
                </section>
              ) : (
                <section className={styles.mainDesctop}>
                  {data?.allProducts?.map((product) => (
                    <ProductTeaser key={product.id} data={product} />
                  ))}
                </section>
              )}
            </>
          )}
        </main>
      </Layout>
    </div>
  );
}
const PRODUCT_QUERY = `query ProductQuery($locale: SiteLocale){
  allProducts(locale: $locale) {
    taste
    productName
    id
    quantityWeight 
    horizontalProductView {
      alt
      id
      url
      title
      width
      height
    }
    productBanner {
      alt
      id
      url
      title
      width
      height
    }
    cuppingScoreRatingSca
  
  }
}`;
