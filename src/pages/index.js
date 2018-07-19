import React from 'react'
// import { Link } from 'gatsby'

// zen desk imports
import '@zendeskgarden/react-buttons/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

// components
import Layout from '../components/layout';
import ProductList from '../components/product-list';
import DadJokes from '../components/dadjokes';
import FakeData from '../components/FakeData';

const IndexPage = () => (
  <Layout>
    <DadJokes />
    <FakeData />
    <ProductList />
  </Layout>
)

export default IndexPage
