import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { request } from '../lib/datoCMS';
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
  return (
    <>
      <Head>
        <title>Privacy policy</title>
      </Head>
      <Layout>
        <p>{data.personal_data_protection}</p>
      </Layout>
    </>
  );
}

const PRIVACY_QUERY = `query PrivacyQuery($locale: SiteLocale){
    allPersonalDataProtections(locale:$locale){
     id
     personalDataProtectionInformation
    
    }
  }`;
