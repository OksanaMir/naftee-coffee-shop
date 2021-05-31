import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {useTranslation} from "react-i18next";

import styles from "../../styles/Layout.module.scss";
import {useEffect} from "react";

export function Layout({ children }) {
  const { i18n } = useTranslation();

    function languageChangeListener() {
        Snipcart.api.session.setLanguage(i18n.language === "cs_CZ" ? i18n.language.replace("_CZ", "") : i18n.language);
    }

    useEffect(() => {
        i18n.on('languageChanged', languageChangeListener)
      return () => {
          i18n.off('languageChanged', languageChangeListener)
      }
  }, [i18n.language]);

  return (
    <div className={styles.layoutSection}>
      <Header />
      <section className={styles.layoutChildrenSection}>{children}</section>
      <Footer />

    </div>
  );
}
