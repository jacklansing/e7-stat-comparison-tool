import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import App from '../components/app';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>E7 Hero Comparison</h1>
    <App />
  </Layout>
);

export default IndexPage;
