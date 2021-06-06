import Head from 'next/head';
import {request} from '../lib/datoCMS';
import {isMobile} from 'react-device-detect';
import {ProductTeaser} from '../components/product/ProductTeaser';
import {Carousel} from 'antd';
import {LandingPageAboutUs} from '../components/landingPage/LandingPageAboutUs';
import {Layout} from '../components/layout/Layout';
import {ProductOverView} from '../components/product/ProductOverView';
import styles from '../styles/Index.module.scss';

export default function Index({ selectsData, productsData }) {

    const { allProducts } = productsData || {};


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

              {isMobile ? (
                <section className={styles.mainMobile}>
                  <Carousel accessibility={true} arrows={true}>
                    {allProducts?.map((product) => {
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
                          <ProductOverView key={product.id} data={product} selectWeight={
                              selectsData?.allSelectors?.[1]?.select?.selectWeight
                          }
                                           selectMethod={
                                               selectsData?.allSelectors?.[0]?.select?.selectMethod
                                           }/>
                        </div>
                      );
                    })}
                  </Carousel>
                </section>
              ) : (
                <section className={styles.mainDesctop}>
                  {allProducts?.map((product) => (
                    <ProductTeaser key={product.id} data={product} />
                  ))}
                </section>

          )}
        </main>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
    const {locale} = context
    const productsData = await request({
        query: PRODUCT_QUERY,
        variables: { locale: locale === "cs"? 'cs_CZ': "en" },
    });
    const selectsData = await request({
        query: SELECTORS_QUERY,
        variables: {},
    });
    return {
        props: {
            productsData,
            selectsData,
        },
    };
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

const SELECTORS_QUERY = `query SelectorsQuery{

  allSelectors {
   id
    select
  
  }
}`;