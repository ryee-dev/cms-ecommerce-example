import React from 'react'
// import { Link } from 'gatsby'
import { ThemeProvider } from '@zendeskgarden/react-theming';
import '@zendeskgarden/react-buttons/dist/styles.css';
import { Button } from '@zendeskgarden/react-buttons'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
    <ThemeProvider>
      <Button>Test Button</Button>
    </ThemeProvider>

  </Layout>
)

export default IndexPage
