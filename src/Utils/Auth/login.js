import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";


const userLogin = (email , password) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}

export default userLogin;