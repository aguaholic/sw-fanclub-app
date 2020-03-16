import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Input from './Input'

const Container = styled.div`
    background-color: black;
    margin: 5% 10%;
`
const Header = styled.h1`
    color: yellow;
`
const Home = () => {
    const [items, setItem]= useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/characters')
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    });

    return (
        <Container>
            <Header>STAR WARS FAN PAGE</Header>
            <Input />
        </Container>
    );
}

export default Home;
