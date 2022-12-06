import React from 'react'

import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Profile = () => {
  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }
  return (
    <>
      <h1>Profile</h1>
      <Button type="submit" variant="primary" onClick={() => logout()}>Logout</Button>
    </>

    
  )
}

export default Profile