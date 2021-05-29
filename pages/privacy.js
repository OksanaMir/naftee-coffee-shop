import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { request } from '../lib/datoCMS';
import { ExpandableText } from '../components/expandableText/ExpandableText';
import { Layout } from '../components/layout/Layout';
import styles from '../styles/Privacy.module.scss';
import { useEffect, useState } from 'react';

export default function Privacy() {
  const { i18n } = useTranslation();
  const [data, setData] = useState({});

  useEffect(() => {
    request({
      query: PRIVACY_QUERY,
      variables: { locale: i18n.language },
    }).then((response) => {
      setData(response);
    });
  }, [i18n.language]);
  console.log(data, 'dataIndex');

  function createMarkup(paragrapPdp) {
    return { __html: `${paragrapPdp}` };
  }

  return (
    <>
      <Head>
        <title>Privacy policy</title>
      </Head>
      <Layout>
        <ul className={styles.list}>
          {data?.allPersonalDataProtections?.map((policy, index) => {
            return (
              <li key={policy.id}>
                <ExpandableText
                  index={index}
                  title={policy.headlinePdp}
                  paragraph={
                    <span
                      dangerouslySetInnerHTML={createMarkup(policy.paragrapPdp)}
                    ></span>
                  }
                />
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}

const PRIVACY_QUERY = `query PrivacyQuery($locale: SiteLocale) {
  allPersonalDataProtections(orderBy: _createdAt_ASC locale: $locale) {
    headlinePdp
    id
    paragrapPdp(markdown: true)
  }
  }`;
