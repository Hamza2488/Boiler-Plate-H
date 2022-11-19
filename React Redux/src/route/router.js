import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ResponsiveDrawer from '../screen/Admin Screen/dashboard'
import Login from '../screen/Admin Screen/Admin Auth/wp-admin'
import Signup from '../screen/Admin Screen/Admin Auth/ASignup'
import SignupU from '../screen/User Screen/User Auth/signup'
import LoginU from '../screen/User Screen/User Auth/login'
import Forget from '../screen/User Screen/User Auth/forget'
import CDRender from '../Components/componentRender'
import Home from '../screen/User Screen/home'

const AppRouter = () => {
  return (
    <div>
      <Router>  
    <Routes> 
        <Route path='home/:id' element={<Home />} />
        <Route path='dashboard/:id/*' element={<ResponsiveDrawer />} />
        <Route path='wp-admin' element={<Login />} />
        <Route path='ASignup' element={<Signup />} />
        <Route path='/' element={<SignupU />} />
        <Route path='login' element={<LoginU />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/Render' element={<CDRender />} />
    </Routes>
</Router>
    </div>
  )
}

export default AppRouter
