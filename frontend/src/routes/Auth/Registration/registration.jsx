
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserAxios from '../../../axios';
import { set_user_email } from '../../../store/slices/userSlice';
import RegistrationMessage from "./RegistrationMessage/message"
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [registrationStep, setRegistrationStep] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlEmailRegistration = async () => {
    setRegistrationStep(2);
    try {
      const response = await UserAxios.post('/auth/registration/', {
        email: email,
      })

      console.log("🚀 ~ handlEmailRegistration ~ response:", response);

      // change registrationstep to 2 if the api call was successful so the view changes
      if (response) {
        setRegistrationStep(2);
      }
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const forwardUserToLogin = () => {
    setTimeout(() => {
      navigate("/login");
      setRegistrationStep(1);
    }, 4000);
  };

  const handlNextStep = () => {
    setRegistrationStep(3);
  };

  const handlCodeValidation = async (e) => {
    e.preventDefault();
    const tempUserData = step2Data;
    tempUserData.email = email;
    // call motion api to confirm code from email and input missing user data
    try {
      const response = await UserAxios.patch(
        "/auth/registration/validation/",
        tempUserData
      );

      console.log("🚀 ~ handlCodeValidation ~ response:", response);

      // If successful, forward to a small waiting page (registration page 3) and
      // then forward to login Page
      setRegistrationStep(4);
      forwardUserToLogin();

      // reset user input data to blank
      setStep2Data(blankUserData);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const blankUserData = {
    code: "",
    username: "",
    location: "",
    password: "",
    password_repeat: "",
    first_name: "",
    last_name: "",
    birth_date: ""
  };

  const [step2Data, setStep2Data] = useState(blankUserData);

  const handleStep2Data = (e) => {
    const { name, value } = e.target;
    setStep2Data((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="main-section">
        {registrationStep === 1 && (
          <>
            <h1>REGISTRATION</h1>
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="bottom-part">
              <button
                className="large-button-small-title"
                onClick={handlEmailRegistration}
              >
                Register
              </button>
              {error && <small>{String(error)}</small>}
            </div>
          </>
        )}
        {registrationStep === 2 && (
          <>
            <h1>REGISTRATION</h1>
            <div className="registration-message">

                Thanks for your registration.
                <br />
                Our hard working monkeys are preparing a digital message called
                E-Mail that will be sent to you soon. Since monkeys arent good
                in writing the message could end up in you junk folder. Our
                apologies for any inconvienience.

            </div>
            <div className="bottom-part">
              <div className="large-button-small-title">
                <button
                  className="large-button-small-title"
                  onClick={handlNextStep}
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        )}
        {registrationStep === 3 && (
          <>
            <div className="middle-part-step2">
              <h1>VERIFICATION</h1>
              <div className="additional-fields-container">
                <div id="left-column">
                  <div className="input-field">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      readOnly
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name="first_name"
                      type="text"
                      placeholder="First name"
                      value={step2Data.first_name}
                      onChange={handleStep2Data}
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={step2Data.username}
                      onChange={handleStep2Data}
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={step2Data.password}
                      onChange={handleStep2Data}
                      required
                    />
                  </div>
                </div>

                <div id="right-column">
                  <div className="input-field">
                    <input
                      name="code"
                      type="text"
                      placeholder="Validation code"
                      value={step2Data.code}
                      onChange={handleStep2Data}
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name="last_name"
                      type="text"
                      placeholder="Last name"
                      value={step2Data.last_name}
                      onChange={handleStep2Data}
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name="location"
                      type="text"
                      placeholder="Location"
                      value={step2Data.location}
                      onChange={handleStep2Data}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <input
                      name="birth_date"
                      type="text"
                      placeholder="Birthdate"
                      value={step2Data.birthdate}
                      onChange={handleStep2Data}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <input
                      name="password_repeat"
                      type="password"
                      placeholder="Password repeat"
                      value={step2Data.password_repeat}
                      onChange={handleStep2Data}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-part">
              <button
                className="large-button-small-title"
                onClick={handlCodeValidation}
              >
                Finish registration
              </button>
              {error && <small>{String(error)}</small>}
            </div>
          </>
        )}
        {registrationStep === 4 && (
          <div className="signup-container-step4">
            <div className="spinner-3"></div>
            <p>
              Registration completed, you will be automatically redirected to
              login
            </p>
          </div>
        )}
      </div>
    </div>
  );

};

export default Registration;
