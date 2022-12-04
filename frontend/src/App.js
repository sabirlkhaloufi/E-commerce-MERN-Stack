import react from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {   Routes, Route } from "react-router-dom";
import ForgotPassword from "./auth/ForgotPassword";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./auth/Register"

function App() {
  return (
       <Routes>
        {/* public routes */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/forget" element={<ForgotPassword/>} /> 
          <Route exact path="/register" element={<Register/>} />

          
          {/* unfound */}
          <Route exact path="*" element={<NotFoundPage/>} /> 
        </Routes>
  );
}

export default App;
