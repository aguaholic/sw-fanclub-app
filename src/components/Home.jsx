import React from 'react'
import styled from 'styled-components'

import Search from './Search'

const Container = styled.div`
    margin: 5% 10%;
`
const Header = styled.h1`
    font-family: 'Poller One', cursive;
    color: yellow;
    margin-bottom: 30px;
`
const Home = () => {
  return (
    <Container>
      <Header>STAR WARS FAN PAGE</Header>
      <Search />
    </Container>
  )
}

export default Home
