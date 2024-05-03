import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Layout from './Layout'
import Login from './Auth/Login/login'
import UserProfile from '../components/ProfileComponent'
import About from './About'
import Statistics from './Statistics'
import NotFound from './NotFound'
import Registration from './Auth/Registration/registration'
import RegistrationMessage from './Auth/Registration/RegistrationMessage/message'
import Verification from './Auth/Verification/verification'
import Reports from './Reports'
import ShowReport from './Reports/ShowReport'
import EditProfile from '../components/ProfileComponent/EditProfile/index.jsx'
import CreateReport from './Reports/CreateReport/index.jsx'
import SpecificUserProfile from '../components/ProfileComponent/SpecificUserProfile/index.jsx'
import SafetyTips from './SafetyTips/index.jsx'
import ProtectedRoutes from './ProtectedRoutes/index.jsx'

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
          <Route path="/safety-tips" element={<SafetyTips />} />
          <Route path="/profile/:user_id" element={<SpecificUserProfile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:reportId" element={<ShowReport />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/new-report" element={<CreateReport />} />
          <Route path="/profile/me" element={<UserProfile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
