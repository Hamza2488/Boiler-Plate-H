import { Box } from '@mui/system'
import React, { useState } from 'react'
import loader from '../images/FSLoader.gif'

const RCFSLoader = () => {
    const [isLoading, setIsLoading] = useState(true)
  return (
    <div>
      <Box>
        {isLoading? {loader}:''}
      </Box>
    </div>
  )
}

export default RCFSLoader
