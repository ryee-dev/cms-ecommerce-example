import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

const DadJoke = ({ data }) => (
  <StaticQuery
    query={graphql`
      query DadJokeQuery {
        dadjokesGraphQl {
          joke {
            id
            joke
            permalink
          }
        }
      }
    `}
    render={data => (
      <JokeContainer>
        <h2>Daily Dad Joke</h2>
        <p>{data.dadjokesGraphQl.joke.joke}</p>
        {/*<img src={`https://icanhazdadjoke.com/j/${data.dadjokesGraphQl.joke.id}.png`} alt="joke-image" />*/}
      </JokeContainer>
    )}
  />
)

export default DadJoke

const JokeContainer = styled.div`
  margin: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  
  img {
    width: 35vw;
  }
  
  p {
    font-size: 1.25rem;
  }
`;