import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <title>Naftee coffee shop</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          />
          <div
              hidden
              id="snipcart"
              // data-config-modal-style="side"
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
                          <snipcart-label htmlFor="phone">Phone number</snipcart-label>
                          <snipcart-input name="phone"/>
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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
