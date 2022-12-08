import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useEffect , useState  } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { sendForgetPasswordEmail } from "../../utils/requests";
import { Link } from "react-router-dom";

const Forget = () => {
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);
  
    const [fields, errors, form] = useFormInputValidation({
      email: ""
    }, {
      email: "required|email"
    });
  
    
    form.useLang(Lang.en);
  
      const onSubmit = async (event) => {
        event.preventDefault();
    //   const isValid = await form.validate(event);
    const isValid = true ;
      console.log('isValid', isValid)
      if (isValid) {
          const email = fields.email ;
        try {
          const res = await sendForgetPasswordEmail(email);
          console.log(res);
          if (res.status === 200) {
            setSent(true);
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
          return (
            <div className="">
              <Alert severity="info">
                <AlertTitle>Check your email</AlertTitle>
                We have sent you an email with a link to — <strong>to reset your password.</strong>
              </Alert>
              {/* <Link to="/login-register/login" className='rn-btn edu-btn w-100 mt--30 text-decoration-none text-center'>Login</Link> */}
  
  
            </div>
            
          );
        }

        if (!sent) {
  return (
    <div className="tab-pane fade show active" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
        {error && <Alert severity="error" >{error}</Alert>}
        <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="singin-email-2">Username or email address *</label>
        <div className="text-danger">{errors.email ? errors.email : ""}</div>
         <input className="form-control" id="singin-email-2" type="email" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
          {/* <input type="text" className="form-control" id="singin-email-2" name="singin-email" required /> */}
        </div>
        {/* End .form-group */}
        {/* <div className="form-group"> */}
          {/* <label htmlFor="singin-password-2">Password *</label> */}
          {/* <div className="text-danger">{errors.password ? errors.password : ""}</div> */}
                    {/* <input className="form-control" id="singin-password-2" type="password" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" /> */}
          {/* <input type="password" className="form-control" id="singin-password-2" name="singin-password" required /> */}
        {/* </div> */}
        {/* End .form-group */}
        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>ENVOYER EMAIL</span>
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

  )
        }
}

export default Forget