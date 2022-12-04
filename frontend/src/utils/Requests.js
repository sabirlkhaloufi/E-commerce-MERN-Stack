// const axios = require("axios") ;
import axios, * as others from 'axios';
const host = "http://localhost:8000";

export async function registerUser(name , email , password) {
  const res = await axios.post(`${host}/api/auth/register`, {
    name: name ,
    email: email,
    password: password
   
  })
  // console.log(res)
return res;
}

export async function loginUser(email , password) {

  const res = await axios.post(`${host}/api/auth/login`, {
    email: email,
    password: password
   
  })
  // console.log(res)
return res;
}

export async function sendForgetPasswordEmail(emailData) {

    const res = await axios.post(`${host}/api/auth/forgetpassword`, {
        email: emailData,
       
      })
  return res;
}

export async function resetPassword(token, password , password2) {
    const res = await axios.post(`${host}/api/auth/resetpassword/${token}`, {
        password: password,
        password2: password2
      })
  return res;
}

export async function verifyUserByToken(token) {
  const res = await axios.get(`${host}/api/auth/confirm/${token}`);
  return res.data;
}
export async function logoutUser(token) {
  const res = await axios.get(`${host}/api/auth/logout`);
  return res.data;
}