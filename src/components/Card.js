import React from 'react'
import styled from 'styled-components'
import img from '../img/test-img.jpg'

const Card = () => {
  return (
    <Wrapper>
      <img src={img} alt='nostalgic' />
      <footer>
        <h4>ranfom title</h4>
        <p>$15</p>
      </footer>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.article`
  margin: 5rem auto;
  width: 400px;
  height: 200px;
  max-width: 80vw;
  display: grid;
  /* border: 1px solid var(--primary1); */
  img {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    height: 100%;
    object-fit: cover;
  }

  footer {
    background: #ffbbff;
    border: 1px solid var(--primary1);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`
