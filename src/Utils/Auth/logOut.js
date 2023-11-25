import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

const logOut = () => {
    signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
              });
}

export default logOut;