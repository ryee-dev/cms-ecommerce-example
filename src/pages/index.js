import React from 'react'
// import { Link } from 'gatsby'

// zen desk imports
import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-grid/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

// components
import Layout from '../components/layout';
import ProductList from '../components/product-list';
import ProductCard from '../components/product-card';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ThemeProvider>
      <Button>Test Button</Button>
    </ThemeProvider>
    <br />
    <br />
    <ThemeProvider>
      <Grid>
        <Row>
          <Col className="withBorder">1 of 3</Col>
          <Col className="withBorder">2 of 3</Col>
          <Col className="withBorder">3 of 3</Col>
        </Row>
        <Row>
          <Col className="withBorder">1 of 2</Col>
          <Col className="withBorder">2 of 2</Col>
        </Row>
      </Grid>
    </ThemeProvider>
    
  </Layout>
)

export default IndexPage
