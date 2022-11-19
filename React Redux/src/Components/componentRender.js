import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { deleteData, getData } from '../firebase/firebasemethod'
import RCDate from './RCDate'
import RCGrid from './RCGrid'
import RCSelect from './RCSelect'
import RCSwitch from './RCSwitch'
import RCTable from './RCTable'
import RCButton from './RCButton'
import RCInput from './RCInput'
import RCRadio from './RCRadio'
import RCCheck from './RCCheck'
import RCSHeader from './RCScreenHeader'

const CDRender = () => {
  // const [uid, setUid] = useState('')
    // const dataLogin = useSelector(a => a.loginReducer)
    const [Rcdate, setRCDate] = useState('')
    const [qdate, setqDate] = useState([])
    const [dataTable, setDataTable] = useState([
      'hamza','jawed','80',
    ])
    console.log(dataTable)
    // useEffect(() => {
    //   checkUser().then(res=>setUid(res.uid)).catch(err=>console.error(err))
  
    //  }, []) 

    let getDatabase = ()=>{
      getData('User').then((res)=>{setqDate(Object.values(res))}).catch((err)=>{console.log(err);})
    }
    useEffect(() => {
      getDatabase()
    
      
    }, [])

    
    let column = [
      {heading :'name'},
      {heading :'email'},
      {heading :'phone'},
    ]


    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
      },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      },
    ];

    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    
  return (
    <div>
      <RCSHeader value={'Hamza'}/>
      {/* <h1>{dataLogin.userName}</h1>
      <h1>{dataLogin.email}</h1>
      <h1>{'*'.repeat(dataLogin.password.length)}</h1> */}
      <RCSwitch onChange={'checked'}/>
      <RCDate />
      
      <RCTable data={dataTable}  column={column}/>
      
      <RCButton  variant='contained' lable='Button'/>

      <RCInput variant='standard' label='Filled'  fullWid/>

      <RCSelect label='Hamza' datasource={[
        {
          id:"hm",
          fullname:"Hamza"
        },
        {
          id:"ja",
          fullname:"JAwde"
        },
      ]}/>
      
      <RCCheck label='Hamza' value='Hamza' />

      <RCRadio label='male' value='male' name='gender'/>
      <RCRadio label='female' value='female' name='gender'/>
      {qdate.map((e,i)=>{ return(<div key={i}>
        <h1>{e.username}</h1>
        <h1>{e.email}</h1> <RCButton onClick={()=>{deleteData('User',e.id)}} lable='delete' variant='contained' />
        </div>)})}
        <RCGrid rows={rows} columns={columns}/>
    </div>
  )
}

export default CDRender
