
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from '../screen/dashboard';
import Quiz from '../screen/quiz';
import Login from '../screen/dScreen/admin';
import Registration from '../screen/registration';
import Signup from '../screen/signup';
import ShowRegistration from '../screen/studentProfile';


const Approute = () => {
  return (
    <>
    <Router>
        
        
        <Routes> 
            <Route path='quiz' element={<Quiz />} />
            <Route path='dashboard/:id/*' element={<Dashboard />} />
            <Route path='admin' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='/' element={<Registration />} />
            <Route path='/studentProfile' element={<ShowRegistration />} />
        </Routes>
    </Router>
    </>
  )
}

export default Approute