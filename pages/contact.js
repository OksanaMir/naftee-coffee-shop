import { ContactForm } from '../components/form/forms/ContactForm';
import { useTranslation } from 'react-i18next';

import { Layout } from '../components/layout/Layout';

export default function ContactFormPage() {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <>
        <h1>{t('contacts.contact')}</h1>
        <p>{t('contacts.paragraph1')}</p>
        <p>{t('contacts.paragraph2')}</p>
        <p>{t('contacts.text')}</p>
        <p>{t('contacts.adress1')}</p>
        <p>{t('contacts.adress2')}</p>
        <p>{t('contacts.phone')}</p>
        <p>{t('contacts.mobile')}</p>
        <p>{t('contacts.instruction')}</p>

        <ContactForm />
      </>
    </Layout>
  );
}
