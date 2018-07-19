import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

const FakeData = (data) => (
  <StaticQuery
    query={graphql`
    query FakerQuery {
      fakerData {
        image {
          animals
        }
      }
    }
  `}
    render={data => (
      <FakerContainer>
        <img src={`${data.fakerData.image.animals}`} alt="fake-image" />
      </FakerContainer>
    )}
  />
)


export default FakeData

const FakerContainer = styled.div`
  margin: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  
  img {
    height: 25vh;
  }
  
  p {
    font-size: 1.25rem;
  }
`;