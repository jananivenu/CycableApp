import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Layout from './Layout'
import Login from './Auth/Login/login'
import Profile from './Profile'
import SendReport from './SendReport/sendreport'
import About from './About'
import Statistics from './Statistics'
import NotFound from './NotFound'
import LegalReport from './Reports/CreateReport/Legal'
import Registration from './Auth/Registration/registration'
import RegistrationMessage from './Auth/Registration/RegistrationMessage/message'
import Verification from './Auth/Verification/verification'
import TestForm from './Reports/CreateReport/Test'
import TheftReport from './Reports/CreateReport/Theft'
import Reports from './Reports'
import ShowReport from './Reports/ShowReport'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/registration-message"
            element={<RegistrationMessage />}
          />
          <Route path="/verification" element={<Verification />} />
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:reportId" element={<ShowReport />} />

          <Route path="/create/legal-report" element={<LegalReport />} />
          <Route path="/create/theft-report" element={<TheftReport />} />
          <Route path="/create/test" element={<TestForm />} />

          <Route path="/send_report" element={<SendReport />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
