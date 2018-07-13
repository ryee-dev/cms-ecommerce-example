import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

import '@zendeskgarden/react-grid/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const ProductImg = styled.img`
  max-width: 300px;
`

const ProductList = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
        allDatoCmsProduct {
          edges {
            node {
              slug
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "png" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <ThemeProvider>
          <Grid>
            <Row>
              {data.allDatoCmsProduct.edges.map(({ node: product }) => (
                <div key={product.id}>
                  <Col className="withBorder" style={{ padding: '1rem'}}>
                    <Link to={`/products/${product.slug}`}>
                      <ProductImg src={product.image.url} alt="product-image" />
                      <h1>{product.name}</h1>
                    </Link>
                    <h3>${product.price}</h3>
                  </Col>
                </div>
              ))}
            </Row>
          </Grid>
        </ThemeProvider>
      </div>
    )}
  />
)

export default ProductList
