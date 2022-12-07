import react from "react";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NavMobile from "./components/header/NavMobile";

function App() {
  return ( 
    <>
      <Header/>
        <Routes>
        {/* public routes */}
          <Route exact path="/" element={<Home/>} />

          {/* <Route exact path="/logout" element={<Home/>} />
          <Route exact path="/login-register" element={<LoginRegister/>} >
            <Route exact path="register" element={<Register/>} />
            <Route exact path="forgetpassword" element={<ForgetPassword/>} />
            <Route exact path="login" element={<Login/>} />
            <Route exact path="confirm/:token" element={<ConfirmEmail />} />
            <Route exact path="resetpassword/:token" element={<ResetPassword/>} />
          </Route> */}
          {/* privates routes */}
          {/* <Route exact path="/" element={<Protected/>} >
            <Route exact path="/profile" element={<Profile/>} />
          </Route> */}
          {/* unfound */}
          <Route exact path="*" element={<NotFoundPage/>} />
        </Routes>
        <NavMobile/>
        <Footer/>
    // </> 
  ); 
     
     
}

export default App;
