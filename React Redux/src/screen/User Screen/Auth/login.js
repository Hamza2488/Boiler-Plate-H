import React, { useState } from "react";
import { Button, CircularProgress, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../firebase/firebasemethod";
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
    loginUser(model).then((res)=>{
      setLoading(false)

      if(res.category=='admin'){
        navigate(`/dashboard/${res.username ?? ''}`,{
          state:res
        })
      } else if (res.category == 'user') {
        navigate(`/home/${res.username ?? ''}`,{
          state:res
        })
      }
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })
  };
  let clickEv = () => {
    navigate("/");
  };
// console.log(model)
  return (
    <>
    <div className="container">
      <div className="main">
        <Box sx={{ mb: 2 }}>
          <img src={logo} alt="TodoLogo" width="50%" />
        </Box>
        <p>Login to your account</p>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ pb: 2 }}>
              <TextField
                label="Email"
                onChange={(e) => setModel({...model, email: e.target.value})}
                type="email"
                variant="standard"
                sx={{ width: "90%" }}
              />
            </Box>
            <Box sx={{ pb: 2 }}>
              <TextField
                label="Password"
                onChange={(e) => setModel({...model, password: e.target.value})}
                type="password"
                variant="standard"
                size="70"
                sx={{ width: "90%" }}
              />
            </Box>
            <p onClick={()=>(navigate('/forget'))}>Forget Password</p>
          </Box>
          <Box sx={{ p: 2 }}>
            <Button className="button" variant="contained" onClick={login} fullWidth>
            {isLoading? <CircularProgress color="inherit" />:"Login" }
            </Button>
          </Box>
          <p>
            Need a member <span onClick={clickEv}>Login</span>
          </p>
        </Box>
        
      </div>
    </div>
  </>
  );
};

export default LoginU;