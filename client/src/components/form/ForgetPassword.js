// import { Alert } from "react-bootstrap";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useEffect , useState  } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { sendForgetPasswordEmail } from "../../utils/requests";
import { Link } from "react-router-dom";
// import axios from "axios" ;

function ForgetPassword() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const [fields, errors, form] = useFormInputValidation({
    email: ""
  }, {
    email: "required|email"
  });

  
  form.useLang(Lang.en);

    const onSubmit = async (event) => {
    const isValid = await form.validate(event);
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
          <div className="login-form-box">
            <Alert severity="info">
              <AlertTitle>Check your email</AlertTitle>
              We have sent you an email with a link to — <strong>to reset your password.</strong>
            </Alert>
            <Link to="/login-register/login" className='rn-btn edu-btn w-100 mt--30 text-decoration-none text-center'>Login</Link>


          </div>
          // <Alert variant="success">
          //   <Alert variant="success">Check your email</Alert>
          //   <p>
          //     We have sent you an email with a link to reset your password.
          //   </p>
          // </Alert>
        );
      }
  if (!sent) {
    return (
      <div className="login-form-box">
          <h3 className="mb-30">ForgetPassword </h3>
          {error && <Alert variant="danger">{error}</Alert>}
          {error === false && <Alert variant="success">plaise checkout your email for reset password</Alert>}
          <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
              <div className="input-box mb--30">
                  <label className="text-danger">{errors.email ? errors.email : ""}</label>
                  <input type="email" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
              </div>
              <button className="rn-btn edu-btn w-100 mb--30" type="submit" >
                  <span>Envoyer</span>
              </button>
          </form>
      </div>
  ) ;
  } 
}

export default ForgetPassword