import { useNavigate } from "react-router-dom";

const RegistrationMessage = () => {
    const navigate = useNavigate();
  
    return (
        <div>
      <h2>Registration Successful!</h2>
      <p>Thank you for registering.</p>
    </div>

    )
}

export default RegistrationMessage;