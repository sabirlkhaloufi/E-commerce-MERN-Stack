import react from "react";
import {   Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
       <Routes>
        {/* public routes */}
          <Route exact path="/" element={<Home/>} />

          
          {/* unfound */}
          <Route exact path="*" element={<NotFoundPage/>} />
        </Routes>
  );
}

export default App;
