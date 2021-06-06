import Head from "next/head";

import {Layout} from '../../components/layout/Layout';

import {request} from "../../lib/datoCMS";
import {ProductDetail} from "../../components/product/ProductDetail";
import styles from "../../styles/ShopList.module.scss";

export default function ShopList({ selectsData, productsData }) {




  const { allProducts } = productsData || {};
  console.log(selectsData, "hjsflaaks");



  return (
    <>
      <Head>
        <title>Shop list</title>
      </Head>
      <Layout>
        <h1>Shop.</h1>

            <section className={styles.shopListContainer}>

              {allProducts?.map((product) => {
                return (
                  <div className={styles.container} key={product.id}>
                    <ProductDetail
                      product={product}
                      selectWeight={
                        selectsData?.allSelectors?.[1]?.select?.selectWeight
                      }
                      selectMethod={
                        selectsData?.allSelectors?.[0]?.select?.selectMethod
                      }
                    />
                  </div>
                );
              })}
            </section>

      </Layout>
    </>
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


const SELECTORS_QUERY = `query SelectorsQuery{

  allSelectors {
   id
    select
  
  }
}`;

const PRODUCT_QUERY = `query ProductQuery($locale: SiteLocale){
  allProducts(locale: $locale) {
    taste
    productName
    id
    quantityWeight
    productPhoto{
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
    horizontalProductView {
      alt
      id
      url
      title
      width
      height
    }
    cuppingScoreRatingSca
    description(markdown: true)
    characteristic(markdown: true)
  }
}`;
