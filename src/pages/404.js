import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Not Found" />
    <main>
      <header>
        <h1>Not Found</h1>
      </header>
      <article>
        <p>You have reached the end of The Interwebs.</p>
      </article>
    </main>
  </Layout>
);

export default NotFoundPage;
