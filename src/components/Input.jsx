import React from 'react'
import { Input as InputField } from '@material-ui/core'

const Input = () => (
  <form noValidate autoComplete="off">
    <InputField
      style={{ color: 'white' }}
      placeholder="What's the movie?"
      autoFocus
      fullWidth
      inputProps={{ 'aria-label': 'description' }}
    />
  </form>)

export default Input
