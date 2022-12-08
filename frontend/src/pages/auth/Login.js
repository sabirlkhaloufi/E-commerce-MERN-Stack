import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useEffect , useState } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { Link , useNavigate , useParams , useLocation } from "react-router-dom";
import { loginUser } from "../../utils/requests";
import { saveItem } from "../../utils/LocalStorage";

const Login = () => {
    const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
 
  const [fields, errors, form] = useFormInputValidation({
    email: "", 
    password: ""
  }, {
    email: "required|email",
    password: "required|min:8"
  });

  form.useLang(Lang.en);

  const onSubmit = async (event) => {
    console.log("onSubmit" );
    event.preventDefault();
    console.log('fields', fields)
    // const isValid = await form.validate(event);
    const isValid = true;
    console.log('isValid')
    if (isValid) {
      let email = fields.email ;
      let password = fields.password ;
      try {
        const res = await loginUser( email , password);
        console.log(res);
        if (res.status === 200) {
          console.log('yes is good')
          const { token , user } = res.data;
          saveItem("token", token);
          saveItem("user", user);
        
        }
      } catch (error) {
        console.log(error);
        const errorMessage = error?.response?.data?.message || "something went wrong please try again later";
        setError(errorMessage);
        // setSent(false);
        return;
      }
    }
  };




  return (
    <div className="tab-pane fade show active" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
        {error && <Alert severity="error" >{error}</Alert>}
        <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="singin-email-2">Username or email address *</label>
        <div className="text-danger">{errors.email ? errors.email : ""}</div>
         <input className="form-control" id="singin-email-2" type="email" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
          {/* <input type="text" className="form-control" id="singin-email-2" name="singin-email" required /> */}
        </div>{/* End .form-group */}
        <div className="form-group">
          <label htmlFor="singin-password-2">Password *</label>
          <div className="text-danger">{errors.password ? errors.password : ""}</div>
                    <input className="form-control" id="singin-password-2" type="password" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" />
          {/* <input type="password" className="form-control" id="singin-password-2" name="singin-password" required /> */}
        </div>{/* End .form-group */}
        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>LOG IN</span>
            <i className="icon-long-arrow-right" />
          </button>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
            <label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
          </div>{/* End .custom-checkbox */}
          <Link to='/forget-password' className="forgot-link">Forgot Your Password?</Link>
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

export default Login