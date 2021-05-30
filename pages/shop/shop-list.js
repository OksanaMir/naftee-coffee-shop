import Head from 'next/head';

import {Layout} from '../../components/layout/Layout';

import {useTranslation} from 'react-i18next';

import {useEffect, useState} from 'react';
import {request} from '../../lib/datoCMS';
import {ProductDetail} from '../../components/product/ProductDetail';
import styles from '../../styles/ShopList.module.scss';

export default function ShopList() {
  const [selectsData, setSelectsData] = useState({});
  const [productsData, setProductsData] = useState({});

  const { i18n } = useTranslation();

  useEffect(() => {
    request({
      query: PRODUCT_QUERY,
      variables: { locale: i18n.language },
    }).then((response) => {
      setProductsData(response);
    });
  }, [i18n.language]);

  useEffect(() => {
    request({
      query: SELECTORS_QUERY,
      variables: {},
    }).then((response) => {
      setSelectsData(response);
    });
  }, [i18n.language]);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log(values);
  };
  const { allProducts } = productsData || {};
  console.log(selectsData, 'hjsflaaks');

  return (
    <>
      <Head>
        <title>Shop list</title>
      </Head>
      <Layout>
        <section className={styles.shopListContainer}>
          {allProducts?.map((product) => {
            return (
              <div key={product.id}>
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

const SELECTORS_QUERY = `query SelectorsQuery{

  allSelectors {
   id
    select
  
  }
}`;

const PRODUCT_QUERY = `query ProductQuery($locale: SiteLocale){
  allProducts(locale: $locale) {
    amount
    taste
    productName
    method
    select
    id
    prices
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
    description
    characteristic
  }
}`;
