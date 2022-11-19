import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import { FormGroup } from 'react-bootstrap'

const RCCheck = (props) => {
    const {label, value, onChange} = props
    const [checkBox, setCheckBox] = useState([])
    const getCheckBox = (e)=>{
        const {value, checked} = e.target
        console.log(`${value} is ${checked}`)
        if (checked) {
            setCheckBox([...checkBox, value])
        }else{
            setCheckBox(checkBox.filter((e)=>e !== value))
        }
    }
  return (
    <div>
      <FormGroup>
      <FormControlLabel control={<Checkbox  />} label={label} value={value} onChange={(e)=>{getCheckBox(e)}}/>
    </FormGroup>

    </div>
  )
}

export default RCCheck
