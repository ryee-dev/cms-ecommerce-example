import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import '@zendeskgarden/react-grid/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import '@zendeskgarden/react-buttons/dist/styles.css';

const ProductListContainer = styled.div`
  margin: 1rem 3rem;
`;

const ProductList = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
        allDatoCmsProduct {
          edges {
            node {
              id
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
      <ProductListContainer>
        <ThemeProvider>
          <Grid>
            <Row>
              {data.allDatoCmsProduct.edges.map(({ node: product }) => (
                <div key={product.id}>
                  <Col className="withBorder" style={{ padding: '1rem'}}>
                    <Img sizes={product.image.sizes} />
                    <h1>{product.name}</h1>
                    <h3>${product.price}</h3>
                    <ThemeProvider>
                      <Button
                        className="snipcart-add-item"
                        data-item-id={product.id}
                        data-item-name={product.name}
                        data-item-price={product.price}
                        data-item-image={product.image.url}
                        data-item-url="/"
                      >
                        Add to Cart
                      </Button>
                    </ThemeProvider>
                  </Col>
                </div>
              ))}
            </Row>
          </Grid>
        </ThemeProvider>
      </ProductListContainer>
    )}
  />
)

export default ProductList
