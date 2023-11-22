import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";

// const dbData = {};

const getDataFromSubCollection = (collectionName, documentID, subCollectionName,  setFunction) => {
  
    getDocs(collection(db, `${collectionName}/${documentID}/${subCollectionName}`))
      .then((querySnapshot) => {
        // console.log("data read from firebase");
        // console.log("querySnapshot", querySnapshot);
        const dataArray = [];
        querySnapshot.forEach((doc) => {
          dataArray.push({ ...doc.data(), categoryID: doc.id });
        });
        // console.log("dataArray", dataArray);
        setFunction(dataArray);
        // dbData[collectionName] = dataArray;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
//   }
};

export default getDataFromSubCollection;
