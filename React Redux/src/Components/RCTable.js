import Box from '@mui/material/Box'
import React from 'react'
import { Table } from 'react-bootstrap'
import './table.css'

const RCTable = ({data, column}) => {
    const TableHeadItem =({e})=><th>{e.heading}</th>
    const TableRow =({e})=><td>{e}</td>
    console.log(data)
  return (
    <div>
        <Box className='table'>
      <Table responsive hover sx={{mr:20}} >
                        <thead>
                            <tr>
                                {column.map((e,i) => <TableHeadItem e={e}/>)}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {data.map((e,i)=><TableRow e={e} column={column} />)}
                            </tr>
                        </tbody>
                    </Table>
        </Box>
    </div>
  )
}

export default RCTable
