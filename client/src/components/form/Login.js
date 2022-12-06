// import React from 'react'
import { Alert } from "react-bootstrap";
import React, { useEffect , useState  } from "react";
import { useParams , Link} from "react-router-dom";
import axios from "axios";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Login = () => {
  const [error, setError] = useState(null);
 
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
    const isValid = await form.validate(event);
    console.log('isValid', isValid)
    if (isValid) {
      console.log("MAKE AN API CALL");
      console.log("MAKE AN API CALL", fields, errors);
      console.log(fields.email)
      const email = fields.email ;
      const password = fields.password ;
           // set configurations
              const configuration = {
                  method: "post",
                  url: "http://localhost:8000/api/auth/login",
                  data: {
                    email,
                    password,
                  },
                };
                  // make the API call
              axios(configuration)
              .then((result) => {
                  console.log(result.data)
                  cookies.set("TOKEN", result.data.token, {
                    path: "/",
                  })
                // setLogin(true);
                window.location.href = "/";
              })
              .catch((error) => {
                // setLogin(false);
                
                console.log(error);
                console.log(error.response.data.message);
                setError(error.response.data.message);
                // message = error.response.data.message;
                error = new Error();
              });
    }
  };


    return (
        <div className="login-form-box">
            <h3 className="pb-3 fw-bold fs-1">Se connecter</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
              
                <div className="input-box mb--30">
                    <label className="text-danger">{errors.email ? errors.email : ""}</label>
                    <input type="email" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
                </div>
                <div className="input-box mb--30">
                    <div className="text-danger">{errors.password ? errors.password : ""}</div>
                    <input type="password" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" />
                </div>
                {/* <div className="comment-form-consent input-box mb--30">
                    <input id="checkbox-1" type="checkbox" />
                    <label htmlFor="checkbox-1">Remember Me</label>
                </div> */}
                <button className="rn-btn edu-btn w-100 mb--30" type="submit" >
                    <span>Login</span>
                </button>
                <div className="input-box text-center">
                    <Link to="/login-register/forgetpassword" className="lost-password text-decoration-none" >mot de passe oublier ?</Link>
                </div>
                <div className="d-flex align-items-center justify-content-center pt-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link to="/login-register/register" className="text-black-50 fw-bold">Sign Up</Link>
                    {/* <Link to="/login-register/register"><button type="button" className="btn btn-outline-danger">Create new</button></Link> */}
                  </div>
            </form>
        </div>
                            
           
        
    ) ;
}

export default Login;
