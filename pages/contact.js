import Head from 'next/head';
import styles from '../styles/Contact.module.scss';
import { ContactForm } from '../components/form/forms/ContactForm';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/layout/Layout';

export default function ContactFormPage() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Head>Contact</Head>
      <Layout>
        <section className={styles.contactContainer}>
          <h1>{t('contacts.contact')}</h1>
          <p>{t('contacts.text1')}</p>
          <p>{t('contacts.adress1')}</p>
          <p>{t('contacts.adress2')}</p>
          <p>{t('contacts.adress3')}</p>
          <p>{t('contacts.phone')}</p>
          <p>{t('contacts.text2')}</p>
          <p>{t('contacts.instruction')}</p>

          <ContactForm />
        </section>
      </Layout>
    </>
  );
}
