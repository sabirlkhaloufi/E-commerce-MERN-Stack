import { Alert } from "react-bootstrap";
import React, { useEffect , useState } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { Link } from "react-router-dom";
import axios  from "axios";

export default function Register() {
      const [error, setError] = useState(null);

      const [fields, errors, form] = useFormInputValidation({
        name: "" ,
        email: "",
        password: "" ,
        password_confirmation: "" 
      }, {
        name: "required",
        email: "required|email",
        password: "required|min:8|confirmed",
        password_confirmation: "required|min:8|same:password",
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
      const name = fields.name ;
      const email = fields.email ;
      const password = fields.password ;
           // set configurations
              const configuration = {
                  method: "post",
                  url: "http://localhost:8000/api/auth/register",
                  data: {
                    name,
                    email,
                    password,
                  },
                };
                  // make the API call
              axios(configuration)
              .then((result) => {
                  console.log(result.data)
                setError(false);
                // window.location.href = "/login-register/login";
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
            <h3 className="pb-3 fw-bold fs-1">S'inscrire</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            {error === false && <Alert variant="success">plaise verify your email</Alert>}
            <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
                <div className="input-box mb--30">
                    <label className="text-danger">{errors.name ? errors.name : ""}</label>
                    <input type="ame" name='name'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.name} placeholder="Full name" />
                </div>
                <div className="input-box mb--30">
                    <label className="text-danger">{errors.email ? errors.email : ""}</label>
                    <input type="email" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
                </div>
                <div className="input-box mb--30">
                    <div className="text-danger">{errors.password ? errors.password : ""}</div>
                    <input type="password" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" />
                </div>
                <div className="input-box mb--30">
                    <div className="text-danger">{errors.password_confirmation ? errors.password_confirmation : ""}</div>
                    <input type="password" name='password_confirmation'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password_confirmation} placeholder="Password" />
                </div>
                {/* <div className="input-box  mb--30 ">
                    <input id="checkbox-2" type="checkbox" />
                    <label htmlFor="checkbox-2">I read & agree the terms & conditions.</label>
                </div> */}
                <button className="rn-btn edu-btn w-100" type="submit" >
                    <span>Register</span>
                </button>
                <div className="d-flex align-items-center justify-content-center pt-4">
                    <p className="mb-0 me-2">Do you have an account?</p>
                    <Link to="/login-register/login" className="text-black-50 fw-bold">connecter</Link>
                    {/* <Link to="/login-register/register"><button type="button" className="btn btn-outline-danger">Create new</button></Link> */}
                  </div>
            </form>
        </div>
    )
}