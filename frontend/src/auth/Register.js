import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useEffect , useState } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { Link , useNavigate , useParams } from "react-router-dom";
import { registerUser } from "../utils/Requests";

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
        console.log("onSubmit" );
        const isValid = await form.validate(event);
        console.log('isValid', isValid)
        if (isValid) {
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

     

  return (
    <div className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                {error && <Alert severity="error" >{error}</Alert>}
               
                {sent && 
                <Alert severity="success">
                  <AlertTitle>you are register Successful</AlertTitle>
    
                  plaise verify your email after — <strong>to <Link to="/login-register/login" className=' text-decoration-none text-black fw-bold' >Login</Link></strong>
                </Alert>  }
                <form className="mx-1 mx-md-4"  noValidate autoComplete="off" onSubmit={onSubmit}>  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <div className="text-danger">{errors.name ? errors.name : ""}</div>
                      <input type="text" name='name'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.name} placeholder="Full name" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <div className="text-danger">{errors.email ? errors.email : ""}</div>
                      <input type="email" id="form3Example3c" className="form-control"  name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <div className="text-danger">{errors.password ? errors.password : ""}</div>
                      <input type="password" id="form3Example4c" name='password'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password} placeholder="Password" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                  <div className="text-danger">{errors.password_confirmation ? errors.password_confirmation : ""}</div>
                      <input type="password" id="form3Example4cd" name='password_confirmation'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.password_confirmation} placeholder="Password" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in 
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register