import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allDatoCmsProduct.edges.map(({ node: product }) => (
          <div key={product.id}>
            <Link to={`/products/${product.slug}`}>
              <img src={product.image.url} alt="" />
              <h1>{product.name}</h1>
            </Link>
            <h3>${product.price}</h3>
          </div>
        ))}
      </div>
    )}
  />
)

export default ProductList
