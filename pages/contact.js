import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { request } from '../lib/datoCMS';

import { useEffect, useState } from 'react';
import { ContactForm } from '../components/form/forms/ContactForm';

import { Layout } from '../components/layout/Layout';
import { Loader } from '../components/ loader/Loader';
import styles from '../styles/Contact.module.scss';

export default function ContactFormPage() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    request({
      query: CONTACT_QUERY,
      variables: { locale: i18n.language },
    })
      .then((response) => {
        setData(response);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [i18n.language]);

  return (
    <>
      <Head>Contact</Head>
      <Layout>
        {isLoading ? (
          <Loader />
        ) : (
          <section className={styles.contactContainer}>
            <h1>{data?.contact?.headline}</h1>
            <p>{data?.contact?.information}</p>
            <p>{data?.contact?.callToAction}</p>

            <p className={styles.instruction}>{t('contacts.instruction')}</p>

            <ContactForm />
          </section>
        )}
      </Layout>
    </>
  );
}
const CONTACT_QUERY = `query ContactQuery($locale: SiteLocale)
{
  contact(locale:$locale){
    headline
   information
   callToAction
  }
 }`;
