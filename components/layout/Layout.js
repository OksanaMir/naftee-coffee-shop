import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useTranslation } from "react-i18next";

import styles from "../../styles/Layout.module.scss";
import { useContext, useEffect } from "react";

export function Layout({ children }) {
  const { t, i18n } = useTranslation();

    function languageChangeListener() {
        console.log('Language change', i18n.language)
        Snipcart.api.session.setLanguage(i18n.language === "cs_CZ" ? i18n.language.replace("_CZ", "") : i18n.language);
    }

    useEffect(() => {
    // const htmlTag = document.getElementsByTagName("html");
    // htmlTag[0].setAttribute(
    //   "lang",
    //   language === "cs_CZ" ? language.replace("_CZ", "") : language
    // );
    // console.log(htmlTag, "html");
    // i18n
    //   .changeLanguage(language === "cs" ? language.concat("_CZ") : language)
    //   .catch(console.error);
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
      <div
        hidden
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="YmM2YzIwOTEtMDZjZi00NTk2LTg4OWItZGUxMjU4ZWVkM2ExNjM3NTY5NTIzNTU2Mzc2ODgz"
      >
        <billing section="bottom">
          {/* <div className="root">
            <form id="snipcart-billing-address-form" className="snipcart-form">
              <div className="snipcart__box">
                <div className="snipcart__box--header">
                  <div className="snipcart__box--title">
                    <div className="snipcart__box--badge snipcart__box--badge snipcart__box--badge-highlight snipcart__font--bold snipcart__font--secondary">
                      2
                    </div>
                    <h1 className="snipcart__font--subtitle snipcart-shipping-address__title">
                      Shipping
                    </h1>
                  </div> 
                </div>*/}
          {/* <div className="snipcart-shipping-address--readonly">
                  <div className="snipcart-shipping-address__header--readonly"> */}
          <fieldset className="snipcart-form__set">
            <div className={"snipcart-form__field"}>
              <snipcart-label for="phone">Phone number</snipcart-label>
              <snipcart-input name="phone"></snipcart-input>
            </div>

            {/* <div className="snipcart-form__field">
              <snipcart-label for="country">Country</snipcart-label>
              <snipcart-typeahead
                type="dropdown"
                name="country"
                autocomplete="country"
              ></snipcart-typeahead>
              <snipcart-error-message name="country"></snipcart-error-message>
            </div>

            <div className="snipcart-form__field">
              <snipcart-label for="city">City</snipcart-label>
              <snipcart-input name="city"></snipcart-input>
              <snipcart-error-message name="city"></snipcart-error-message>
            </div>

            <div className="snipcart-form__field snipcart-form__cell--large">
              <snipcart-label
                className="snipcart__font--tiny"
                for="province"
              >
                Province
              </snipcart-label>
              <snipcart-typeahead
                type="dropdown"
                name="province"
                autocomplete="province state"
              ></snipcart-typeahead>
            </div>

            <div className="snipcart-form__field snipcart-form__cell--tidy">
              <snipcart-label
                className="snipcart__font--tiny"
                for="postalCode"
              >
                Postal code
              </snipcart-label>
              <snipcart-input name="postalCode"></snipcart-input>
              <snipcart-error-message name="postalCode"></snipcart-error-message>
            </div> */}
          </fieldset>
          {/* </div>
                </div> */}
          {/* </div>
            </form>
          </div> */}
        </billing>
      </div>
    </div>
  );
}
