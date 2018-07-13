import React from 'react'
// import { Link } from 'gatsby'

// zen desk imports
import '@zendeskgarden/react-buttons/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

// components
import Layout from '../components/layout';
import ProductList from '../components/product-list';
import TestingShit from '../components/testing-shit';

const IndexPage = () => (
  <Layout>
    <ProductList/>
    <br />
    {/*<TestingShit/>*/}
  </Layout>
)

export default IndexPage
