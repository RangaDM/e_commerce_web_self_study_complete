import "tailwindcss/tailwind.css";
import AppRouter from "./Routers/AppRouter";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import getDataDoc from "./Utils/DataFetch/getDataDoc";
import { addUser, removeUser, userSelector } from "./Store/Slices/userSlices";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector(userSelector);

  console.log(userData);

  useEffect(() => {
    const userCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        getDataDoc("users", uid, (dataSet) => {
          dispatch(addUser(dataSet));
        });
        // ...
      } else {
        // User is signed out
        // ...
        console.log("no user");
        dispatch(removeUser());
      }
    });
    return () => userCheck;
    // eslint-disable-next-line
  }, []);

  return <AppRouter />;
}

export default App;