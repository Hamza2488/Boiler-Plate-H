import React, { useState } from "react";
import { Button, CircularProgress, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import {  loginUser } from "../firebase/firebasemethod";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const[isLoading, setLoading] = useState(false)

  let login = () => {
    setLoading(true)
    loginUser({ email, password })
      .then((res) => {
        console.log(res);
        navigate(`/dashboard/${res.userName}`,
          { state: res }
          );
          setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setLoading(false)
      });
  };
  let clickEv = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <Box sx={{ mb: 2 }}>
          </Box>
          <p>Login to your account</p>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Box sx={{ width: "100%" }}>
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
              <Button className="button" variant="contained" onClick={login} fullWidth>
            {isLoading? <CircularProgress />:"Sign Up" }
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

export default Login;
