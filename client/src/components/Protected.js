import React from "react";
import { Route, Navigate , Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function Protected() {
  !cookies.get("TOKEN") ? <Navigate to="/" />  : <Outlet /> ;
}