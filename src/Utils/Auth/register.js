import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import setDataDocument from "../DataFetch/setDataDocument";


const userRegister = (email, password , name , address , phoneNumber , ProfileImage) =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    const userDataSet = {
        name,
        address,
        phoneNumber,
        email,
        ProfileImage,
        uid: user.uid,
        role: "user",
    }

    setDataDocument("users" , user.uid , userDataSet)
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });

}

export default userRegister;