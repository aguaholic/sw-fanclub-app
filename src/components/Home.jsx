import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const Container = styled.div`
    margin: 5% 10%;
`
const Header = styled.h1`
    color: yellow;
`
const Home = () => {
  return (
    <Container>
      <Header>STAR WARS FAN PAGE</Header>
      <Input />
    </Container>
  )
}

export default Home
