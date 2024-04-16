import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Registration from './Auth/Registration/registration';
import Layout from './Layout';
import Login from './Auth/Login/login';
import Report from "./Report/report"
import Profile from "./Profile/profile"
import SendReport from "./SendReport/sendreport"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report" element={<Report />} />
        <Route path="/send_report" element={<SendReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;