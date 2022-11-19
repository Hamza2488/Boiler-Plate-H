import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { sendData } from '../firebase/firebasemethod';

const Registration = () => {
    const [studentObj, setStudentObj] = useState({});
    const navigate = useNavigate();

    const submit = () => {
        if (Object.values(studentObj).length >= 8) {
            sendData(studentObj, 'StdRegistration')
                .then((success) => {
                    // Signed in 
                    alert(success);
                    navigate("/studentProfile", {
                        state: studentObj
                    });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const errorMessageUp = errorMessage.toUpperCase();
                    alert(errorMessageUp)
                });
        } else {
            alert('ALL FIELDS MUST BE FILLED')
        }
    }

    const selectValHandler = (e) => {
        setStudentObj({ ...studentObj, course: e.target.value })
    }
    const selectSecHandler = (e) => {
        setStudentObj({ ...studentObj, Sec: e.target.value })
    }
    // console.log(studentObj)
    return (
        <div className='main-regis'>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, },
                }}
                noValidate
                autoComplete="off"
            >


                <Container>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={12} md={3} >

                            <Box sx={{mt:2}}>
                                <TextField label="First Name" variant="outlined" onChange={e => setStudentObj({ ...studentObj, firstName: e.target.value })} />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>

                            <Box sx={{mt:2}}>
                                <TextField label="Last Name" onChange={e => setStudentObj({ ...studentObj, lastname: e.target.value })} variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{ minWidth: 120, mx: 5, mt:2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Course</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Select Course"
                                        onChange={selectValHandler}
                                        value={studentObj?.course || 'none'}
                                    >
                                        <MenuItem value='Web and Mobile App Dev'>Web and Mobile App Dev</MenuItem>
                                        <MenuItem value='Graphics Designing'>Graphic Designing</MenuItem>
                                        <MenuItem value='Blockchain Development'>Blockchain Development</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{ minWidth: 120, mt:2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Sec</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Sec"
                                        onChange={selectSecHandler}
                                        value={studentObj?.sec || 'none'}
                                    >
                                        <MenuItem value='Wed & Sat'>Wed & Sat</MenuItem>
                                        <MenuItem value='Mon & Thu'>Mon & Thu</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{mt:2}}>
                                <TextField label="Contact" type='number' onChange={e => setStudentObj({ ...studentObj, Contact: e.target.value })}  variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{mt:2}}>
                                <TextField label="Cnic" type='number' onChange={e => setStudentObj({ ...studentObj, CNIC: e.target.value })}  variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{mt:2}}>
                                <TextField label="Father Name" onChange={e => setStudentObj({ ...studentObj, fatherName: e.target.value })}  variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{mt:2}}>
                                <TextField label="Father Contact" type='number' onChange={e => setStudentObj({ ...studentObj, fatherContact: e.target.value })} variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{mt:2}}>
                                <TextField label="Father CNIC" type='number' onChange={e => setStudentObj({ ...studentObj, fatherCNIC: e.target.value })} variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{mt:2}}>
                                <TextField label="Emergency Contact" type='number' onChange={e => setStudentObj({ ...studentObj, emergencyConatct: e.target.value })} variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Box sx={{mt:2}}>
                                <TextField label="Date of Birth" onChange={e => setStudentObj({ ...studentObj, dob: e.target.value })} variant="outlined" />
                            </Box>
                        </Grid>

                    </Grid>
                </Container>

                <Box>
                    <Button onClick={submit} variant='contained'>
                        Submit
                    </Button>
                </Box>
                <Box>
                    {/* <Button variant='contained' onClick={() => navigate('/showCourse')}>
                        View Courses
                    </Button> */}
                </Box>
            </Box>
        </div>
    )
}

export default Registration;