import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Registration from './Auth/Registration/registration'
import Layout from './Layout'
import Login from './Auth/Login/login'
import Report from './Reports'
import Profile from './Profile'
import SendReport from './SendReport/sendreport'
import About from './About'
import Statistics from './Statistics'
import NotFound from './NotFound'
import LegalReport from './Reports/CreateReport/Legal'
import TestForm from './Reports/CreateReport/Test'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<Report />} />

          <Route path="/create/legal-report" element={<LegalReport />} />
          <Route path="/create/test" element={<TestForm />} />

          <Route path="/send_report" element={<SendReport />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
