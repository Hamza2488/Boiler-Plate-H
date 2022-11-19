import { Box, Button, CircularProgress, Grid, TextField } from '@mui/material'
import { Container } from '@mui/system'
import userEvent from '@testing-library/user-event'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { sendData,checkUser } from '../../firebase/firebasemethod'

const Addquiz = () => {
  const [quiz, setQuiz] = useState({})
  // const [uid,setUid]=useState('')
  const [isLoading, setLoading] = useState(false)
   useEffect(() => {
    checkUser().then(res=>setQuiz({...quiz,adminId:res.uid})).catch(err=>console.error(err))

   }, [])
   
    const sendDataHandler = ()=>{
      setLoading(true)
        sendData(quiz,`quizData`).then(()=>{
          setLoading(false)
        }).catch((err)=>{
          setLoading(false)
          console.log(err);
        })
    }
    // console.log(uid)
  return (
    <>
    <Box sx={{mt:10}}>
      <TextField
    label="Question"
    onChange={e => setQuiz({ ...quiz, Quetion: e.target.value })}
    variant="standard"
    sx={{ width: "90%" }}
    />
    <TextField
    label="Option 1"
    onChange={e => setQuiz({ ...quiz, Option1: e.target.value })}
    variant="standard"
    sx={{ width: "40%", mr:5 }}
    />
    <TextField
    label="Option 2"
    onChange={e => setQuiz({ ...quiz, Option2: e.target.value })}
    variant="standard"
    sx={{ width: "40%" }}
    />
    <TextField
    label="Option 3"
    onChange={e => setQuiz({ ...quiz, Option3: e.target.value })}
    variant="standard"
    sx={{ width: "40%", mr:5 }}
    />
    <TextField
    label="Option 4"
    onChange={e => setQuiz({ ...quiz, Option4: e.target.value })}
    variant="standard"
    sx={{ width: "40%" }}
    />
    <TextField
    label="Correct Option"
    onChange={e => setQuiz({ ...quiz, correctOption: e.target.value })}
    variant="standard"
    sx={{ width: "40%" }}
    />
    <p className='red'>**Correct Answer should be match atleast 1 option.</p>
    
    <br />


    <Button variant='contained' onClick={sendDataHandler} sx={{ width: "10%" , mt:5}}>        
            {isLoading? <CircularProgress />:"Create Queation" }
    </Button> <br/>
    {/* <Container>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={12}>
    <h4>{`Q:${question}`}</h4>
  </Grid>
    {quiz.map((e,i)=>{
  <Grid xs={6}>
    <h5 key={i}>{e}</h5>
    </Grid>
    })}
</Grid>
    </Container> */}
    </Box>
    </> 
  )
}

export default Addquiz