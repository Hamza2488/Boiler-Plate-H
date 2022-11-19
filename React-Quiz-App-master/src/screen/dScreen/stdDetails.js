import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { deleteData, getData } from '../../firebase/firebasemethod';
import { Button } from '@mui/material';

export default function StdDetails() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData('StdRegistration')
            .then((res) => {
                setData(Object.values(res))
                // console.log(res);
                setIsLoading(false)
            })
            .catch((err) => {
                alert(err);
                setIsLoading(false)
            })
    }, []);


    
    // console.log(data)

    return (
        <div>
            <Box sx={{mt:10}}>
            
            <h1 className='regisdetail'>All Registration Details</h1>
            {
                isLoading ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <CircularProgress />
                    </Box>
                    :

                    <Table responsive hover sx={{mr:20}} >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Uid</th>
                                <th>First Name</th>
                                <th>Father Name</th>
                                <th>Course</th>
                                <th>Student Contact</th>
                                <th>Father Contact</th>
                                <th>Student Cnic</th>
                                <th>Section</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{e.id}</td>
                                            <td>{e.firstName}</td>
                                            <td>{e.fatherName}</td>
                                            <td>{e.course}</td>
                                            <td>{e.Contact}</td>
                                            <td>{e.fatherContact}</td>
                                            <td>{e.CNIC}</td>
                                            <td>{e.Sec}</td>
                                            <td>{e.dob}</td>
                                            <Button onClick={('StdRegistration',{i})=>deleteData()}>Delete</Button>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
            }
            </Box>
        </div>
    );
}