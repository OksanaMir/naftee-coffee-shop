import Head from 'next/head';
import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';
import {request} from '../lib/datoCMS';

import {LandingPageAboutUs} from '../components/landingPage/LandingPageAboutUs';
import {Layout} from '../components/layout/Layout';
import {ProductOverView} from '../components/product/ProductOverView';
import styles from '../styles/Home.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";

export default function Home() {
  const {i18n } = useTranslation();
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
          <section className={styles.main}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
              {
                data && data.allProducts && data.allProducts.map(product => {
                  return (
                      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <SwiperSlide>
                          <ProductOverView key={product.id} data={product} />
                        </SwiperSlide>
                      </div>
                  )
                })
              }
            </Swiper>
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
