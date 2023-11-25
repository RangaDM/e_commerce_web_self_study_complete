import { useSelector } from "react-redux";
import { userSelector } from "../Store/Slices/userSlices";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminProtected = () => {
  // const admin = false;

  const userData = useSelector(userSelector);
  console.log("admin",userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.name) {
      if (!(userData.name === "default")) {
        if (!userData.role === "admin") {
          navigate("/404");
        }
      }
    }
    // eslint-disable-next-line
  }, [userData]);

  return <Outlet />;
};

export default AdminProtected;
