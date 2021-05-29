import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { request } from '../../lib/datoCMS';
import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useLocalStorageState } from 'ahooks';
import styles from '../../styles/Footer.module.scss';

export function Footer() {
  const { i18n } = useTranslation();
  const [data, setData] = useState('');
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
    request({
      query: COOKIE_QUERY,
      variables: { locale: i18n.language },
    }).then((response) => {
      setData(response);
    });
  }, [i18n.language]);

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
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
            <a href="/terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="/privacy">Privacy policy</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
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
    </footer>
  );
}

const COOKIE_QUERY = `query CookieQuery($locale: SiteLocale){
 
  cookie(locale: $locale) {
    text
    id
  }
}`;
