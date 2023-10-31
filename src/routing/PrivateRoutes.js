import { Navigate } from "react-router-dom";






export const PrivateRoutes =({childern}) => {
    const getTokenFromLocalStorage = localStorage.getItem("user")
   return getTokenFromLocalStorage?.token !== undefined ? childern : (<Navigate to='/' replace={true} />)
}