import Head from 'next/head';

import { Layout } from '../components/layout/Layout';
import styles from '../styles/About.module.scss';
export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Create Next App !!!</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <Layout>
        <section className={styles.aboutSection}>
          <p>
            We are here for your enjoyment from the multifaceted taste of the
            best varieties of specialty coffee. We share this feelings with the
            world around. Join us now. All good things come with love. We
            started from direct trade with farmers and continued work with
            specialization on the light roasting of the coffee beans. That's why
            we have the rich taste and aroma during drink preparation. Now we
            will continue to promote the culture of coffee consumption. Quality
            and taste are the basis of the Third Wave Coffee. Every new sip
            brings us closer to the goal. It is important that coffee is at the
            center of events that bring people together.
          </p>
        </section>
      </Layout>
    </>
  );
}
