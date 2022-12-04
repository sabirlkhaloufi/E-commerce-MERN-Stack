import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import Submit from '../components/form/Submit';
import '../style/index.css'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [message,setMessage] = useState(false);
  
    async function registerEmail(event) {
      event.preventDefault()
      const API_URL = "http://localhost:8081/api/auth/Forgotpassword"
      const user = email
      console.log(user)
    await axios.post(API_URL, user)


        .then(res => {
            console.log("virefier email")
        })
        .catch(err => {
          console.log(err.response.data);
          setMessage(err.response.data.message);
        })
  
    }
    
      return (
        <form className="auth-inner" onSubmit={registerEmail}>
          <h3>Forgot password</h3>
          {message && <div className='text-danger alert alert-danger mt-5 w-100 py-1 text-center border border-2 border-danger'> {message}</div>}
          <div className="mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </div>
          <Submit/>
          
        </form>
      )
}

export default ForgotPassword

// import React from 'react'

// function ForgotPassword() {
//   return (
//     <div>ForgetPassword</div>
//   )
// }

// export default ForgotPassword