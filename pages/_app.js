import Head from 'next/head';
import '../components/translations/translations';
import '../styles/globals.scss';
import 'swiper/swiper.scss';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
