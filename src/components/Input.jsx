import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import List from './List'
import ListItem from './ListItem'
import Spinner from './Spinner'
import Sorting from './Sorting'

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
  const [sortDirection, setSortDirection] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter) {
        let query = ''

        query += enteredFilter.length === 0
          ? ''
          : `?search=${enteredFilter}`

        query += sortDirection !== null
          ? '&order=' + sortDirection
          : ''

        setLoading(true)
        axios.get(
          'http://localhost:8000/characters' + query
        ).then(response => {
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
  }, [enteredFilter, sortDirection])

  const list = items.map((item, index) => {
    return (
      <ListItem key={index}>{item.name}, {item.height}</ListItem>
    )
  })

  let renderIt = (
    <>
      {list.length > 0
        ? <>
          <Sorting onSort={setSortDirection}/>
          <List>
            {list}
          </List>
        </>
        : null
      }
    </>
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
