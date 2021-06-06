import Head from 'next/head';
import {useTranslation} from 'react-i18next';
import {request} from '../lib/datoCMS';
import {ContactForm} from '../components/form/forms/ContactForm';

import {Layout} from '../components/layout/Layout';
import styles from '../styles/Contact.module.scss';

export default function ContactFormPage({data}) {
  const { t } = useTranslation();

    function createMarkup(callToAction) {
        return { __html: `${callToAction}` };
    }

  return (
    <>
      <Head>Contact</Head>
      <Layout>

          <section className={styles.contactContainer}>
            <h1>{data?.contact?.headline}</h1>
            <span
              className={styles.contactcallToAction}
              dangerouslySetInnerHTML={createMarkup(
                data?.contact?.callToAction,
              )}
            />

            <ContactForm />
            <span
              className={styles.contactInformation}
              dangerouslySetInnerHTML={createMarkup(data?.contact?.information)}
            />
          </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
    const {locale} = context
    const data = await request({
        query: CONTACT_QUERY,
        variables: { locale: locale === "cs"? 'cs_CZ': "en" },
    });

    return {
        props: {
            data
        },
    };
}

const CONTACT_QUERY = `query ContactQuery($locale: SiteLocale)
{
  contact(locale:$locale){
    headline
   information(markdown: true)
   callToAction(markdown: true)
  }
 }`;
