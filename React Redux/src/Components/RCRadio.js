import React, { useState } from 'react'

const RCRadio = (props) => {
    const {value, label,name} = props
    const [radio, setRadio] = useState()
    console.log(radio)
  return (
    <div>
        <div>{label}
      <input type='radio' value={value} name={name} onChange={e=>setRadio(e.target.value)} />
        </div>
    </div>
  )
}

export default RCRadio
