import { request } from "../../../lib/datoCMS";
import { ProductDetail } from "../../../components/product/ProductDetail";

export default function ProductDetailPage({ product, selects }) {
  return (
    <ProductDetail
      product={product.product}
      selectMethod={selects?.allSelectors?.[0]?.select?.selectMethod}
      selectWeight={selects?.allSelectors?.[1]?.select?.selectWeight}
    />
  );
}

export async function getStaticPaths() {
  const products = await request({
    query: ALL_PRODUCTS_QUERY,
    variables: { locale: "cs_CZ" },
  });
  const paths = products.allProducts.map((it) => {
    return {
      params: {
        id: it.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const product = await request({
    query: SINGLE_PRODUCT_QUERY,
    variables: {
      filter: { id: { eq: context.params.id } },
      locale: context.locale === "cs" ? "cs_CZ" : "en",
    },
  });
  const selects = await request({
    query: SELECTORS_QUERY,
    variables: { locale: context.locale === "cs" ? "cs_CZ" : "en" },
  });

  return {
    props: {
      product,
      selects,
    },
  };
}

const SINGLE_PRODUCT_QUERY = `query ProductQuery($filter: ProductModelFilter, $locale: SiteLocale){
  product(filter: $filter, locale:$locale) {
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

const ALL_PRODUCTS_QUERY = `query ProductQuery($locale: SiteLocale){
  allProducts(locale: $locale) {
   id
  }
}`;
