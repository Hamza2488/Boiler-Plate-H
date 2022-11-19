import { Button } from '@mui/material'
import React from 'react'

const RCButton = (props) => {
    const {variant, lable, onClick, onChange, className} = props
  return (
    <div>
      <Button variant={variant} onClick={onClick} onChange={onChange} classname={className}>{lable}</Button>
    </div>
  )
}

export default RCButton
