import React, { useState } from "react";
import { Button, CircularProgress, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {  SignupUser } from "../../../firebase/firebasemethod";
import logo from '../../../images/user image.png'
const SignupU = () => {
const [username, setUsername] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
  let navigate = useNavigate();
  const[isLoading, setLoading] = useState(false)

  let Signupin = () => {
    setLoading(true)
    SignupUser({
      username,
      email,
      password,
      category:'user'
    }).then((res)=>{
        console.log(res)
        setLoading(false)
        navigate('/login')
    }).catch((err)=>{
        console.log(err)
        setLoading(false)
    })
}
  
  let clickEv = () => {
    navigate("/login");
  };

  return (
    <>
    <div className="container">
      <div className="main">
        <Box sx={{ mb: 2 }}>
          <img src={logo} alt="TodoLogo" width="50%" />
        </Box>
        <p>SignUp to your account</p>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ pb: 2 }}>
              <TextField
                label="User Name"
                onChange={(e) => setUsername(e.target.value)}
                type="email"
                variant="standard"
                sx={{ width: "90%" }}
              />
            </Box>
            <Box sx={{ pb: 2 }}>
              <TextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                variant="standard"
                sx={{ width: "90%" }}
              />
            </Box>
            <Box sx={{ pb: 2 }}>
              <TextField
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                variant="standard"
                size="70"
                sx={{ width: "90%" }}
              />
            </Box>
          </Box>
          <Box sx={{ p: 2 }}>
            <Button className="button" variant="contained" onClick={Signupin} fullWidth>
            {isLoading? <CircularProgress color="inherit" />:"Login" }
            </Button>
          </Box>
          <p>
            Need a member <span onClick={clickEv}>SIGNUP</span>
          </p>
        </Box>
      </div>
    </div>
  </>
  );
};

export default SignupU;