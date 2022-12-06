import React from 'react' ;
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { NavLink , Outlet} from "react-router-dom";


const LoginRegister = () => {
 
  return (
    <>
         <Breadcrumb 
                    title="Login & Register"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Login & Register"
                />
                
               
                <div className="login-register-page-wrapper edu-section-gap bg-color-white">
                    <div className="container checkout-page-style">
                        <div className="row ">
                            <div className="col"> 
                            
                                <Outlet/>
                             </div>
                           
                           </div>
                       </div>
                   </div>
                
    </>
  )
}

export default LoginRegister