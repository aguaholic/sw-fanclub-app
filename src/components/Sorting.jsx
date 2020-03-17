import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Sorting = (props) => {
  return (
    <div>
      <button onClick={() => props.onSort('ASC')}>
        <FontAwesomeIcon icon={faArrowUp} />      </button>
      <button onClick={() => props.onSort('DESC')}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  )
}

Sorting.propTypes = {
  onSort: PropTypes.func
}

export default Sorting
