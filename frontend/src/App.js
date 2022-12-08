import react from "react";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import {   Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LoginRegister from "./pages/auth/LoginRegister";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ConfirmEmail from "./pages/auth/ConfirmEmail";
import ResetPassword from "./pages/auth/ResetPassword";


function App() {

 
  return ( 
    // <Layout>
        <Routes>
        {/* public routes */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login-register" element={<LoginRegister/>} />
          <Route exact path="/forget-password" element={<ForgetPassword/>} />

          <Route exact path="/logout" element={<Home/>} />
          {/* <Route exact path="/login-register" element={<LoginRegister/>} > */}
            {/* <Route exact path="register" element={<Register/>} /> */}
            {/* <Route exact path="forgetpassword" element={<ForgetPassword/>} /> */}
            {/* <Route exact path="login" element={<Login/>} /> */}
             <Route exact path="/confirm-email/:token" element={<ConfirmEmail />} />
             <Route exact path="/resset-email/:token" element={<ConfirmEmail />} />
            <Route exact path="reset-password/:token" element={<ResetPassword/>} /> 
          {/* </Route> */}
          {/* privates routes */}
          {/* <Route exact path="/" element={<Protected/>} >
            <Route exact path="/profile" element={<Profile/>} />
          </Route> */}
          {/* unfound */}
          <Route exact path="*" element={<NotFoundPage/>} />
        </Routes>
    // </Layout> 
  ); 
     
     
}

export default App;
