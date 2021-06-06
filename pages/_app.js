import Head from 'next/head';
import '../lib/translations';
import 'antd/dist/antd.css';
import '../styles/globals.scss';
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";


export default function App({ Component, pageProps }) {
  // const {i18n} =useTranslation()
  // const router = useRouter()
  // i18n.changeLanguage(router.locale === "cs"? 'cs_CZ': "en" )

  return (
    <>
      <Head>
        <title>Naftee</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Rubik:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />

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
