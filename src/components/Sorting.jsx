import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'

const Container = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
`
const Label = styled.p`
    color: white;
    margin-right: 10px;
`

const Sorting = (props) => {
  return (
    <Container>
      <Label>sort by height</Label>
      <Button onClick={() => props.onSort('ASC')}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
      <Button onClick={() => props.onSort('DESC')}>
        <FontAwesomeIcon icon={faArrowDown} />
      </Button>
    </Container>
  )
}

Sorting.propTypes = {
  onSort: PropTypes.func
}

export default Sorting
