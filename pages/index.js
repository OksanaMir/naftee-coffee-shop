import Head from 'next/head';
import { LandingPageAboutUs } from '../components/landingPage/LandingPageAboutUs';
import { Layout } from '../components/layout/Layout';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landing page Naftee</title>
      </Head>

      <Layout>
        <main>
          <LandingPageAboutUs />
        </main>
      </Layout>
    </div>
  );
}
