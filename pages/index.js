import Head from "next/head";

import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landing page Naftee</title>
      </Head>

      <Layout>
        <main>
          <h1>Naftee</h1>
        </main>
      </Layout>
    </div>
  );
}
