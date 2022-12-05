import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import Submit from '../components/form/Submit';

function Reset() {
    const navigate = useNavigate();
    const {token} = useParams()
    const [password, setPassword] = useState('')
    const [confpassword, setConfpassword] = useState('')
    const [message,setMessage] = useState(false);

    async function registerUser(event) {

    if(password===confpassword){
      // console.log('confpassword', confpassword)
    event.preventDefault()
    const API_URL = `http://localhost:4000/api/auth/Resetpassword/${token}`
    const user = {
        password 
    } 
    
    await axios.post(API_URL, user)
      .then(res => {
          console.log(" password updated")
          return navigate("/login");
        
      })
      .catch(err => {
        console.log(err.response.data);
        setMessage(err.response.data.message);
      })
    }else{
        console.log( "password not corect, plez confirmer password" )
    }

  }
  return (
    <form className="auth-inner" onSubmit={registerUser}>
        <h3>Reset password</h3>
       
        {message && <div className='text-danger alert alert-danger mt-5 w-100 py-1 text-center border border-2 border-danger'> {message}</div>}
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control " id='pass1' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control " id='pass2'  value={confpassword} onChange={(e) => setConfpassword(e.target.value)} placeholder="To confirm password " />
        </div>
        <Submit/>
        
      </form>
  )
  
}

export default Reset