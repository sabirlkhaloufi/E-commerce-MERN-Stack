// import { Alert } from "react-bootstrap";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useEffect , useState } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { Link , useNavigate , useParams } from "react-router-dom";
import { registerUser } from "../../utils/requests";

const Register = () => {
    const [error, setError] = useState(null);
      const[sent , setSent] = useState(false);
      const navigate = useNavigate()
      const [counter, setCounter] = useState(false);
      useEffect(() => {
        if (counter) {
          counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        }
      }, [counter]);

      const [fields, errors, form] = useFormInputValidation({
        name: "" ,
        email: "",
        password: "" ,
        password_confirmation: "" 
      }, {
        name: "required",
        email: "required|email",
        password: "required|min:8",
        password_confirmation: "required|min:8|same:password",
      });

      form.useLang(Lang.en);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("onSubmit" );
    // const isValid = await form.validate(event);
    const isValid = true ;
    console.log('isValid', isValid)
    if (isValid) {
        console.log('submit good is valid data')
      let password = fields.password ;
     let email = fields.email ;
     const name = fields.name ;
      try {
        const res = await registerUser(name , email , password);
        console.log(res);
        if (res.status === 201) {
          console.log('yes is good')
          setSent(true);
          setCounter(40);
          // navigate('/login');
        }
      } catch (error) {
        console.log(error);
        const errorMessage = error?.response?.data?.message || "something went wrong please try again later";
        setError(errorMessage);
        setSent(false);
        return;
      }
      
      
    }
  };
  if (sent) {
    // setTimeout(() => {
    //   navigate("/login-register/login");
    // }, 40000);
    return (
      <div className=" pt-1 pb-1">
            <Alert severity="success">
              <AlertTitle>you are register Successful</AlertTitle>

              plaise verify your email after — <strong>to <Link to="/login-register" className=' text-decoration-none text-black fw-bold' >Login</Link></strong>
            </Alert>
            
            {/* <Link to="/login-register/login" className='rn-btn edu-btn w-100 mt--30 text-decoration-none text-center'>Login</Link> */}


          </div>
    );
    
  }
  return (
    <div className="tab-pane fade " id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
       {error && <Alert severity="error" >{error}</Alert>}
     <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="register-email-2">Your Name *</label>
          <div className="text-danger">{errors.name ? errors.name : ""}</div>
            <input className="form-control" id="register-email-2" type="text" name='name'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.name} placeholder="Full name" />
          {/* <input type="email" className="form-control" id="register-email-2" name="register-email" required /> */}
        </div>{/* End .form-group */}
        <div className="form-group">
          <label htmlFor="register-email-2">Your email address *</label>
          <div className="text-danger">{errors.email ? errors.email : ""}</div>
        <input className="form-control" id="register-email-2" type="email" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
          {/* <input type="email" className="form-control" id="register-email-2" name="register-email" required /> */}
        </div>{/* End .form-group */}
        <div className="form-group">
          <label htmlFor="register-password-2">Password *</label>
          <div className="text-danger">{errors.password ? errors.password : ""}</div>
                    <input className="form-control" id="register-password-2" type="password" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" />
          {/* <input type="password" className="form-control" id="register-password-2" name="register-password" required /> */}
        </div>{/* End .form-group */}
        <div className="form-group">
          <label htmlFor="register-password-2">Password Confirmation *</label>
          <div className="text-danger">{errors.password_confirmation ? errors.password_confirmation : ""}</div>
        <input className="form-control" id="register-password-2" type="password" name='password_confirmation'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password_confirmation} placeholder="Password" />
          {/* <input type="password" className="form-control" id="register-password-2" name="register-password" required /> */}
        </div>{/* End .form-group */}
        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right" />
          </button>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
            <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
          </div>{/* End .custom-checkbox */}
        </div>{/* End .form-footer */}
      </form>
      <div className="form-choice">
        <p className="text-center">or sign in with</p>
        <div className="row">
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-g">
              <i className="icon-google">
                Login With Google
              </i></a>
            </div>{/* End .col-6 */}
            <div className="col-sm-6">
              <a href="#" className="btn btn-login  btn-f">
                <i className="icon-facebook-f" />
                Login With Facebook
              </a>
            </div>{/* End .col-6 */}
         </div>{/* End .row */}
       </div>{/* End .form-choice */}
      </div>
  )
}

export default Register