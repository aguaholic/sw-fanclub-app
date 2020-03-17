import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import List from './List'
import ListItem from './ListItem'
import Spinner from './Spinner'

const InputField = styled.input`
  width: 100%;
  background-color: #545454;
  color: white;
  border: none;
  font-size: 18px;
  padding: 12px 20px;
  box-sizing: border-box;

  :focus {
    outline: none;
    border: 1px solid yellow;
    box-shadow: 0 0 10px #FFFF99;
}
`

const Input = () => {
  const [enteredFilter, setEnteredFilter] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter) {
        const query =
          enteredFilter.length === 0
            ? ''
            : `?search=${enteredFilter}`
        setLoading(true)
        axios.get(
          'http://localhost:8000/characters' + query
        ).then(response => {
          console.log(response.data)
          const dataItems = response.data
            .map(item => {
              return {
                name: item.name,
                height: item.height
              }
            })
          setItems(dataItems)
          setLoading(false)
        })
          .catch(err => {
            console.log(err)
            setLoading(false)
          })
      }
    }, 600)
    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter])

  const list = items.map((item, index) => {
    return (
      <ListItem key={index}>{item.name}</ListItem>
    )
  })

  let renderIt = (
    <List>
      {list}
    </List>
  )
  if (loading) {
    renderIt = <Spinner />
  }

  return (
    <>
      <InputField
        placeholder="What's the movie?"
        value={enteredFilter}
        onChange={event => setEnteredFilter(event.target.value)}
      />
      {renderIt}
    </>)
}

export default Input
