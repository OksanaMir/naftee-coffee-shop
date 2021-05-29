import Link from 'next/link';
import locale from '../../components/translations/locales/en';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { useTranslation } from 'react-i18next';

import styles from '../../styles/Layout.module.scss';

export function Layout({ children }) {
  const { t, i18n } = useTranslation();
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
          <fieldset className="snipcart-form__set">
            <div className={'snipcart-form__field'}>
              <snipcart-label for="phone">Phone number</snipcart-label>
              <snipcart-input name="phone"></snipcart-input>
            </div>

            <div class="snipcart-form__field">
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
              <snipcart-label className="snipcart__font--tiny" for="province">
                Province
              </snipcart-label>
              <snipcart-typeahead
                type="dropdown"
                name="province"
                autocomplete="province state"
              ></snipcart-typeahead>
            </div>

            <div className="snipcart-form__field snipcart-form__cell--tidy">
              <snipcart-label className="snipcart__font--tiny" for="postalCode">
                Postal code
              </snipcart-label>
              <snipcart-input name="postalCode"></snipcart-input>
              <snipcart-error-message name="postalCode"></snipcart-error-message>
            </div>
          </fieldset>
          {/* <address-fields>
              <div>
                <fieldset className="snipcart-form__set">
                  <div className="snipcart-form__row">
                    <div className="snipcart-form__field snipcart-form__cell--large">
                      <snipcart-label
                        className="snipcart__font--tiny"
                        for="address1"
                      >
                        {t('header.aboutUs')}
                      </snipcart-label>
                      <snipcart-input name="address1"></snipcart-input>
                      <snipcart-error-message name="address1"></snipcart-error-message>
                    </div>

                    <div className="snipcart-form__field snipcart-form__cell--tidy">
                      <snipcart-label
                        className="snipcart__font--tiny"
                        for="address2"
                      >
                        {''}
                      </snipcart-label>
                      <snipcart-input name="address2"></snipcart-input>
                      <snipcart-error-message name="address2"></snipcart-error-message>
                    </div>
                  </div>

                  <div <snipcart-typeahead
                      type="dropdown"
                      name="city"
                      autocomplete="country"
                    ></snipcart-typeahead>
                  </div>
 
                  <div className="snipcart-form__field">
                    <snipcart-label
                      className="snipcart__font--tiny"
                      for="country"
                    >
                      {''}
                    </snipcart-label>
                    <snipcart-typeahead
                      type="dropdown"
                      name="country"
                      autocomplete="country"
                    ></snipcart-typeahead>
                  </div>

                  <div className="snipcart-form__row">
                    <div className="snipcart-form__field snipcart-form__cell--large">
                      <snipcart-label
                        className="snipcart__font--tiny"
                        for="province"
                      >
                        {''}
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
                        {''}
                      </snipcart-label>
                      <snipcart-input name="postalCode"></snipcart-input>
                      <snipcart-error-message name="postalCode"></snipcart-error-message>
                    </div>
                  </div>
                </fieldset>
              </div>
            </address-fields> */}

          {/* </address-fields> */}
        </billing>
      </div>
    </div>
  );
}
