import Link from 'next/link';
import locale from '../../components/translations/locales/en';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { useTranslation } from 'react-i18next';

import styles from '../../styles/Layout.module.scss';

export function Layout({ children }) {
  const { t, i18n } = useTranslation();
  return (
    <div classNameName={styles.layoutSection}>
      <Header />
      <section classNameName={styles.layoutChildrenSection}>{children}</section>
      <Footer />
      <div
        hidden
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="YmM2YzIwOTEtMDZjZi00NTk2LTg4OWItZGUxMjU4ZWVkM2ExNjM3NTY5NTIzNTU2Mzc2ODgz"
      >
        <billing section="bottom">
          {/* <div classNameName="root">
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
          <fieldset classNameName="snipcart-form__set">
            <div classNameName={'snipcart-form__field'}>
              <snipcart-label for="phone">Phone number</snipcart-label>
              <snipcart-input name="phone"></snipcart-input>
            </div>

            {/* <div classNameName="snipcart-form__field">
              <snipcart-label for="country">Country</snipcart-label>
              <snipcart-typeahead
                type="dropdown"
                name="country"
                autocomplete="country"
              ></snipcart-typeahead>
              <snipcart-error-message name="country"></snipcart-error-message>
            </div>

            <div classNameName="snipcart-form__field">
              <snipcart-label for="city">City</snipcart-label>
              <snipcart-input name="city"></snipcart-input>
              <snipcart-error-message name="city"></snipcart-error-message>
            </div>

            <div classNameName="snipcart-form__field snipcart-form__cell--large">
              <snipcart-label
                classNameName="snipcart__font--tiny"
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

            <div classNameName="snipcart-form__field snipcart-form__cell--tidy">
              <snipcart-label
                classNameName="snipcart__font--tiny"
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
