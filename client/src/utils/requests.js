import axios from "axios";
const host = "http://localhost:8000";

export async function registerUser(user) {
  const res = await axios.post(`${host}/api/auth/register`, user);
  return res.data;
}

export async function loginUser(user) {
  const res = await axios.post(`${host}/api/auth/login`, user);
  return res.data;
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