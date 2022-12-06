import react from "react";
import {   Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import Protected from "./components/Protected";
import Home from "./pages/Home";
import Layout from './common/Layout'
import LoginRegister from "./pages/LoginRegister";
import Profile from "./pages/Profile";
import ForgetPassword from "./components/form/ForgetPassword";
import Login from './components/form/Login';
import Register from './components/form/Register';
import ResetPassword from './components/form/ResetPassword';
import NotFoundPage from "./pages/NotFoundPage";
import ConfirmEmail from "./components/form/ConfirmEmail";
function App() {

 
  return ( 
    <Layout>
        <Routes>
        {/* public routes */}
          <Route exact path="/" element={<Home/>} />

          <Route exact path="/logout" element={<Home/>} />
          <Route exact path="/login-register" element={<LoginRegister/>} >
            <Route exact path="register" element={<Register/>} />
            <Route exact path="forgetpassword" element={<ForgetPassword/>} />
            <Route exact path="login" element={<Login/>} />
            <Route exact path="confirm/:token" element={<ConfirmEmail />} />
            <Route exact path="resetpassword/:token" element={<ResetPassword/>} />
          </Route>
          {/* privates routes */}
          <Route exact path="/" element={<Protected/>} >
            <Route exact path="/profile" element={<Profile/>} />
          </Route>
          {/* unfound */}
          <Route exact path="*" element={<NotFoundPage/>} />
        </Routes>
    </Layout> 
  ); 
     
     
}

export default App;
