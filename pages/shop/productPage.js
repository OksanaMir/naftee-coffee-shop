import Head from 'next/head';

import { Layout } from '../../components/layout/Layout';

import { useTranslation } from 'react-i18next';
import { Loader } from '../../components/ loader/Loader';
import { useState, useEffect } from 'react';
import { request } from '../../lib/datoCMS';
import { ProductDetail } from '../../components/product/ProductDetail';

export default function ShopList() {
  const [selectsData, setSelectsData] = useState({});
  const [productsData, setProductsData] = useState({});
  const [showItem, setShowItem] = useState(false);
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    request({
      query: PRODUCT_QUERY,
      variables: { locale: i18n.language },
    })
      .then((response) => {
        setProductsData(response);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [i18n.language]);
  console.log(productsData, 'dataIndex');

  useEffect(() => {
    setIsLoading(true);
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
  const onMouseEnter = () => {
    setShowItem(!setShowItem);
  };
  const onMouseLeave = () => {
    setShowItem(showItem);
  };

  return (
    <>
      <Head>
        <title>Shop list</title>
      </Head>
      <Layout>
        isLoading ? <Loader /> : (
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
        )
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
