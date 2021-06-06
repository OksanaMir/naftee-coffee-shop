import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { request } from '../../lib/datoCMS';
import { Loader } from '../ loader/Loader';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import { useLocalStorageState } from 'ahooks';
import styles from '../../styles/Footer.module.scss';

export function Footer() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [accepted, setAccepted] = useLocalStorageState(
    'cookies-accepted',
    false,
  );
  const onAcceptCookies = () => {
    setVisible(false);
    setAccepted(true);
  };

  useEffect(() => {
    setIsLoading(true);
    request({
      query: COOKIE_QUERY,
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
      <footer className={styles.footer}>
        <section className={styles.wrapper}>
          <ul className={styles.contacts}>
            <li>
              <a href="tel:+420776245218">+420 776 245 218</a>
            </li>
            <li>
              <a href="mailto:nafteecoffee@gmail.com">nafteecoffee@gmail.com</a>
            </li>
            <li>
              <address>Czech Budweis, Czech Republic</address>
            </li>
          </ul>
          <ul>
            <li className={styles.social}>
              <Link href="https://www.instagram.com/nafteecoffee/">
                <a className="fa fa-instagram" />
              </Link>
              <Link href="https://www.facebook.com/search/top?q=Naftee">
                <a className="fa fa-facebook" />
              </Link>
            </li>

            <li>
              <Link href="/terms">
                <a>
                  {t('footer.termsAndConditions', {
                    lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
                  })}
                </a>
              </Link>
            </li>

            <li>
              <Link href="/privacy">
                <a>
                  {t('footer.privacyPolicy', {
                    lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
                  })}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>
                  {t('footer.frequentlyAskedQuestions', {
                    lng: router.locale === 'cs' ? 'cs_CZ' : 'en',
                  })}
                </a>
              </Link>
            </li>
          </ul>
        </section>
        (
        {visible && !accepted && (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <Modal
                title={undefined}
                visible={visible && !accepted}
                getContainer={false}
                bodyStyle={{ margin: 0 }}
                onOk={onAcceptCookies}
                onCancel={() => setVisible(false)}
                width={'100%'}
                mask={null}
                maskClosable={false}
              >
                <p>{data?.cookie?.text}</p>
              </Modal>
            )}
          </>
        )}
        )
      </footer>
    </>
  );
}

const COOKIE_QUERY = `query CookieQuery($locale: SiteLocale){
 
  cookie(locale: $locale) {
    text
    id
  }
}`;
