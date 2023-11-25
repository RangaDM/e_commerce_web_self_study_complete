import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { userSelector } from "../Store/Slices/userSlices"


const UserProtected = () => {

  const userData = useSelector(userSelector)
  console.log(userData);
  return (
    // userData? <Outlet/> : <Navigate to="/login"/>

    userData.role? <Outlet/> : <Navigate to="/login"/>
  )
}

export default UserProtected