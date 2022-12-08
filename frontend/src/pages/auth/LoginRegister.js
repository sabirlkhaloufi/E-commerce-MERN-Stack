import React from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { NavLink, Outlet } from "react-router-dom";
import Login from './Login';
import Register from './Register';


const LoginRegister = () => {

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
   
    <Login />
    <Register />
    
    </div>{/* End .tab-content */}
  </div>{/* End .form-tab */}
</div>{/* End .form-box */}
</div>{/* End .container */}
</div>
</div>
  )
}

export default LoginRegister