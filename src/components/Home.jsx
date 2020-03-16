import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Input from './Input'

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
        <div>
            <p>Home</p>
        </div>
    );
}

export default Home;
