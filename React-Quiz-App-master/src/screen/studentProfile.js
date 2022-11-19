import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../App.css"
import Profile from '../images/Profilepic.png'

const ShowRegistration = () => {

    const location = useLocation();
    const [StdDetails, setStdDetails] = useState('')

    useEffect(() => {
      setStdDetails(location.state)
    
    }, [])

    console.log(StdDetails)
    

    return (

        <>
        <div className='body'>
            <Box className='detail'>
                <Container>
                <h2>Your Registration Details</h2>
                </Container>
                    
            </Box>
        <Container>
            <div className='name'>
            <Grid className='card' sx={{mt:4}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                
                <Grid sx={{mt:2 , ml:5, p:0}} md={2}> <img width={150} src={Profile} /></Grid>
                <Grid md={2}><h2>{location.state.firstName} {location.state.lastname}</h2></Grid>
                
            </Grid>
            
            <Container>
            <Grid className='card' sx={{mt:4}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    
                <Grid sx={{border:1, ml:7}} md={7}>
                <Container>
                    <p>Personal Details</p>
                    <p><b>Name:</b></p>
                    <p>{location.state.firstName}</p>
                    <p><b>Father Name:</b></p>
                    <p>{location.state.fatherName}</p>
                    <p><b>Contact:</b></p>
                    <p>{location.state.Contact}</p>
                    <p><b>CNIC:</b></p>
                    <p>{location.state.CNIC}</p>
                    <p><b>Date of Birth:</b></p>
                    <p>{location.state.dob}</p>
                </Container>
                </Grid>
                <Grid sx={{border:1, ml:1}} md={4}>
                    <Container>
                    <p>Course Details</p>
                    <p><b>Course:</b></p>
                    <p>{location.state.course}</p>
                    <p><b>Section:</b></p>
                    <p>{location.state.Sec}</p>
                    </Container>
                        
                </Grid>
                </Grid>
            </Container>
        </div>
        </Container>
        <div className='space'></div>
        </div>
        </>





        // <div>
        //     <h1>Your Registration Details</h1>
        //     <h2>First Name: {location.state.firstName}</h2>
        //     <h2>Father Name: {location.state.lastname}</h2>
        //     <h2>Course: {location.state.course}</h2>
        //     <h2>Student Contact: {location.state.sec}</h2>
        //     <h2>Father Contact: {location.state.Contact}</h2>
        //     <h2>Student CNIC: {location.state.CNIC}</h2>
        //     <h2>Email: {location.state.fatherName}</h2>
        //     <h2>Email: {location.state.fatherContact}</h2>
        //     <h2>Email: {location.state.fatherCNIC}</h2>
        //     <h2>Email: {location.state.emergencyContact}</h2>
        //     <h2>Date of Birth: {location.state.dob}</h2>
        // </div >
    )
}

export default ShowRegistration;