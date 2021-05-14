import Head from 'next/head';
import '../components/translations/translations';
import '../styles/globals.scss';
import 'antd/dist/antd.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Naftee</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
