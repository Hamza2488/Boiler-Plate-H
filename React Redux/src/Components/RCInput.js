import TextField from '@mui/material/TextField'
import React from 'react'

const RCInput = (props) => {
    const {label, variant, className, value, fullWidth, onChange,  type, required, disabled} =  props
  return (
    <div>
      <TextField label={label} required={required} disabled={disabled} variant={variant} className={className} value={value} fullWidth={true} onChange={onChange} type={type}/>
    </div>
  )
}

export default RCInput
