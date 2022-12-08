import React, { useEffect , useState  } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useParams , Link} from "react-router-dom";
import { verifyUserByToken } from "../../utils/requests";
import NotFoundPage from "../../pages/NotFoundPage";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Login from "./Login";
import Register from "./Register";

const ConfirmEmail = () => {
    const token = useParams().token;
    const [error, setError] = useState(null);
    useEffect(() => {
        
        async function verifyUser() {
            try {
                await verifyUserByToken(token);
                setError(false);
            } catch (error) {
                setError(true);
            }
        }
        verifyUser();
        
        
      },[]);
     if (error === false) {
      return (



        <div className='main'>    
    <Breadcrumb />
<div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={{backgroundImage: 'url("assets/images/backgrounds/login-bg.jpg")'}}>
<div className="container">
<div className="form-box">
<div className="form-tab">
  <ul className="nav nav-pills nav-fill" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Register</a>
    </li>
  </ul>
  <div className="tab-content">
    
    <Alert severity="success">
    <AlertTitle>you are verfied Successfully</AlertTitle>

    plaise verify your email after — <strong>to <Link to="/login-register" className=' text-decoration-none text-black fw-bold' >Login</Link></strong>
  </Alert>
   
    <Login />
    <Register />
    
    </div>{/* End .tab-content */}
  </div>
</div>
</div>
</div>
</div>
       
       
  )}
  if (error) return <NotFoundPage />
}

export default ConfirmEmail