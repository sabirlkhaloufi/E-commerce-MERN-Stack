import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useEffect , useState } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { Link , useNavigate , useParams } from "react-router-dom";
import { resetPassword } from "../../utils/requests";


export default function Register() {
  
  
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
    const isValid = await form.validate(event);
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
      navigate("/login-register/login");
    }, 10000);
    return (
      <div className="login-form-box">
            <Alert severity="success">
              <AlertTitle>Password Reset Successful</AlertTitle>
              You will be redirected automatecly to login page in {counter} seconds — <strong>to Login page.</strong>
            </Alert>
            <Link to="/login-register/login" className='rn-btn edu-btn w-100 mt--30 text-decoration-none text-center'>Login</Link>


          </div>
    );
  }

     

    return (
     

        <div className="login-form-box">
            <h3 className="mb-30">Récuperer votre mot de passe</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            {error === false && <Alert variant="success">plaise verify your email</Alert>}
            <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
                
                <div className="input-box mb--30">
                    <div className="text-danger">{errors.password ? errors.password : ""}</div>
                    <input type="password" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" />
                </div>
                <div className="input-box mb--30">
                    <div className="text-danger">{errors.password_confirmation ? errors.password_confirmation : ""}</div>
                    <input type="password" name='password_confirmation'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password_confirmation} placeholder="Password" />
                </div>
                
                <button className="rn-btn edu-btn w-100" type="submit" >
                    <span>Resset password</span>
                </button>
            </form>
        </div>
    )
}