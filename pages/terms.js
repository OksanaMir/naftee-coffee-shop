import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Layout } from '../components/layout/Layout';
import styles from '../styles/Terms.module.scss';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <Layout>
        <h1>Terms of Service</h1>
        <ul>
          <li>
            <h2>Terms and Conditions</h2>
            <p>
              Personal subscriptions Transport to the EU countries Complaints -
              EXCHANGE OF GOODS RETURN AND REFUND COMPLAINT GOODS
            </p>
          </li>

          <li>
            <h2>Transport to the EU countries</h2>
            <p>
              DPD according their actuall price list, see in checkout, credit
              card payment, wire paymnet within 24-48 hours, if we receive your
              order by 12:00 pm, pay directly to the courier upon receipt of the
              consignment We always strive to follow in handling your shipments
              quickly, so shipping time does not exceed the amount specified by
              us delivery time.
            </p>
          </li>
          <li>
            <h2>Refunds</h2>
            <p>
              To be eligible for a return, your item must be unused and in the
              same condition that you received it. It must also be in the
              original packaging. If 14 days have gone by since your purchase,
              unfortunately we can’t offer you a refund or exchange. Only
              regular priced items may be refunded. Sale items cannot be
              refunded. Shipping costs are non-refundable. If you receive a
              refund, the cost of return shipping will be deducted from your
              refund. To start a return, we require a receipt or proof of
              purchase. Please contact us via nafteecoffee@gmail.com To complete
              your return, please pack the products you'd like returned, include
              a copy of the pick slip included with your order, seal your box
              securely and send your package to our address. Once your return is
              received and inspected, we will send you an email to notify you
              that we have received your returned item. We will also notify you
              of the approval or rejection of your refund. If you are approved,
              then your refund will be processed, and a credit will
              automatically be applied to your credit card or original method of
              payment, within a certain amount of days. Depending on where you
              live, the time it may take for your exchanged product to reach
              you, may vary.
            </p>
          </li>
        </ul>
      </Layout>
    </>
  );
}
