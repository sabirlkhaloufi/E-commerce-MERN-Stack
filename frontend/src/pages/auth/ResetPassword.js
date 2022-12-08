import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useEffect , useState } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { Link , useNavigate , useParams } from "react-router-dom";
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { resetPassword } from "../../utils/requests";
import Register from './Register';


export default function ResetPassword() {
  
  
      const [counter, setCounter] = useState(false);
      useEffect(() => {
        if (counter) {
          counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        }
      }, [counter]);
      const [error, setError] = useState(null);
      const[sent , setSent] = useState(false);
      const { token } = useParams();
      const navigate = useNavigate();

      const [fields, errors, form] = useFormInputValidation({
        password: "" ,
        password_confirmation: "" 
      }, {
        password: "required|min:8",
        password_confirmation: "required|same:password",
      });

      form.useLang(Lang.en);

  const onSubmit = async (event) => {
    console.log("onSubmit" );

    // const isValid = await form.validate(event);
    event.preventDefault();
    const isValid = true ;
    console.log('isValid', isValid)
    if (isValid) {
     let password = fields.password ;
     let password_confirmation = fields.password_confirmation ;
      try {
        const res = await resetPassword(token , password , password_confirmation);
        console.log(res);
        if (res.status === 200) {
          setSent(true);
          setCounter(9);
          // navigate('/login');
        }
      } catch (error) {
       
        const errorMessage = error?.response?.data?.message || "something went wrong please try again later";
        setError(errorMessage);
        setSent(false);
        return;
      }
    }
  };

  if (sent) {
    setTimeout(() => {
      navigate("/login-register"); 
    }, 10000);
  }

     

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
    {sent && <div className="">
            <Alert severity="success">
              <AlertTitle>Password Reset Successful</AlertTitle>
              You will be redirected automatecly to login page in {counter} seconds — <strong>to Login page.</strong>
            </Alert>
            <Link to="/login-register/login" className='rn-btn edu-btn w-100 mt--30 text-decoration-none text-center'>Login</Link>
          </div>
          }
   
  <div className="tab-pane fade show active" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
        {error && <Alert severity="error" >{error}</Alert>}
        <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
       
        {/* End .form-group */}
        <div className="form-group">
          <label htmlFor="singin-password-2">Password *</label>
          <div className="text-danger">{errors.password ? errors.password : ""}</div>
        <input className="form-control" id="singin-password-2" type="password" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="singin-password-2">Password Confirmation *</label>
          <div className="text-danger">{errors.password_confirmation ? errors.password_confirmation : ""}</div>
        <input className="form-control" id="singin-password-2" type="password" name='password_confirmation'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password_confirmation} placeholder=" confirmation" />
        </div>
        {/* End .form-group */}
        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>RESSET PASSWORD</span>
            <i className="icon-long-arrow-right" />
          </button>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
            <label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
          </div>{/* End .custom-checkbox */}
          <Link to='/login-register' className="forgot-link">Revient a Login?</Link>
        </div>{/* End .form-footer */}
      </form>
      <div className="form-choice">
        <p className="text-center">or sign in with</p>
        <div className="row">
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-g">
              <i className="icon-google" />
              Login With Google
            </a>
          </div>{/* End .col-6 */}
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-f">
              <i className="icon-facebook-f" />
              Login With Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
    <Register />
    
    </div>{/* End .tab-content */}
  </div>{/* End .form-tab */}
</div>{/* End .form-box */}
</div>{/* End .container */}
</div>
</div>
     

        // <div className="login-form-box">
        //     <h3 className="mb-30">Récuperer votre mot de passe</h3>
        //     {error && <Alert variant="danger">{error}</Alert>}
        //     {error === false && <Alert variant="success">plaise verify your email</Alert>}
        //     <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
                
        //         <div className="input-box mb--30">
        //             <div className="text-danger">{errors.password ? errors.password : ""}</div>
        //             <input type="password" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" />
        //         </div>
        //         <div className="input-box mb--30">
        //             <div className="text-danger">{errors.password_confirmation ? errors.password_confirmation : ""}</div>
        //             <input type="password" name='password_confirmation'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password_confirmation} placeholder="Password" />
        //         </div>
                
        //         <button className="rn-btn edu-btn w-100" type="submit" >
        //             <span>Resset password</span>
        //         </button>
        //     </form>
        // </div>
    )
}