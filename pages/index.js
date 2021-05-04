import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/layout/Layout';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App !!!</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <Layout>
        <main>
          <h1>Naftee</h1>
        </main>
      </Layout>
    </div>
  );
}
