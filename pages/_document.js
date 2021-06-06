import Document, { Html, Head, Main, NextScript } from 'next/document';

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
          <link id="snipcart-theme" type="text/css"
                href="https://app.snipcart.com/themes/base/snipcart.css"
                rel="stylesheet" />
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
            data-api-key="YmM2YzIwOTEtMDZjZi00NTk2LTg4OWItZGUxMjU4ZWVkM2ExNjM3NTY5NTIzNTU2Mzc2ODgz"
          >
            <billing section="bottom">
             <fieldset className="snipcart-form__set">
                <div className={"snipcart-form__field"}>
                  <snipcart-label htmlFor="phone">Phone number</snipcart-label>
                  <snipcart-input name="phone" />
                </div>

              </fieldset>

              </billing>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
