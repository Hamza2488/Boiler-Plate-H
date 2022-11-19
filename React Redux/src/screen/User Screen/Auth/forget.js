import React, { useState } from "react";
import { Button, CircularProgress, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { forget, loginUser } from "../../../firebase/firebasemethod";
import logo from '../../../images/user image.png'
// import { useDispatch } from "react-redux";
import { edit } from "../../../Redux/loginReducer";
import RCFSLoader from "../../../Components/RCFSLoader";
const LoginU = () => {
  const [model, setModel] = useState({});
  let navigate = useNavigate();
  // const dispatch = useDispatch()
  const[isLoading, setLoading] = useState(false)

  let login = () => {
    setLoading(true)
    forget(model)
      .then((res) => {
        console.log(`model============>${res}`);
        navigate(`/login}`,
          );
          setLoading(false)
          // dispatch(edit(model))
          
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setLoading(false)
      });
  };
  let clickEv = () => {
    navigate("/login");
  };
// console.log(model)
  return (
    <>
    <div className="container">
      <div className="main">
        <p>Forget password</p>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ pb: 2 }}>
              <TextField
                label="Email"
                onChange={(e) => setModel({...model, email: e.target.value})}
                type="email"
                variant="standard"
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Box sx={{ p: 2 }}>
            <Button className="button" variant="contained" onClick={login} fullWidth>
            {isLoading? <CircularProgress color="inherit" />:"Reset Password" }
            </Button>
          </Box>
          <p>
            Back to <span onClick={clickEv}>Login</span>
          </p>
        </Box>
        
      </div>
    </div>
  </>
  );
};

export default LoginU;