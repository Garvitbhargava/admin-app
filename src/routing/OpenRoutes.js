import { Navigate } from "react-router-dom";






export const OpenRoutes =({childern}) => {
    const getTokenFromLocalStorage = localStorage.getItem("user")
    console.log(getTokenFromLocalStorage?.token);
   return getTokenFromLocalStorage?.token === undefined ? childern : (<Navigate to='/' replace={true} />)
}