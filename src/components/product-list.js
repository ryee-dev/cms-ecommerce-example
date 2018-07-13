import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'
import faker from 'faker';
import { ThemeProvider } from '@zendeskgarden/react-theming';
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
        <h1>Products</h1>
        <ThemeProvider>
          <GridContainer>
                {data.allDatoCmsProduct.edges.map(({ node: product }) => (
                  <div key={product.id} style={{ textAlign: "center" }}>
                    <ProductImage src={product.image.url}/>
                    <h2>{product.name}</h2>
                    <h3>${product.price}</h3>
                    <Button
                      danger pill
                      className="snipcart-add-item"
                      data-item-id={product.id}
                      data-item-name={product.name}
                      data-item-price={product.price}
                      data-item-image={product.image.url}
                      data-item-url="/"
                      style={{display: "block", margin: "0 auto"}}
                    >
                      Add to Cart
                    </Button>
                  </div>
                ))}
          </GridContainer>
        </ThemeProvider>
      </ProductListContainer>
    )}
  />
)

export default ProductList

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  grid-auto-flow: row;
`;

const ProductImage = styled.img`
  display: block;
  margin: 0 auto;
  height: 150px;
`;