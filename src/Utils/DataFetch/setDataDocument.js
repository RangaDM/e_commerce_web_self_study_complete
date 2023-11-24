import { doc, setDoc } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const setDataDocument = (collectionPath, docID, dataSet) => {
  setDoc(doc(db, collectionPath, docID), {
    dataSet,
  })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export default setDataDocument;