import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import React, { useState } from 'react'

const RCSwitch = (props) => {
  const {label, value} = props
  const [model, setModel] = useState()
  console.log(`model===========>${model}`)
  return (
    <div>
      <FormGroup>
          
            <Switch checked={value} value={value} label={label} onChnage={e=>setModel(e.target.Checked)}/>
          
        
      </FormGroup>
    </div>
  )
}

export default RCSwitch
