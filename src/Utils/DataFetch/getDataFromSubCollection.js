import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const dbData = {};

const getDataFromSubCollection = (
  collectionName,
  documentID,
  subCollectionName,
  setFunction
) => {
  if (
    dbData[collectionName] &&
    dbData[collectionName][documentID] &&
    dbData[collectionName][documentID][subCollectionName] &&
    dbData[collectionName][documentID][subCollectionName].length > 0
  ) {
    setFunction(dbData[collectionName][documentID][subCollectionName]);
  } else {
    getDocs(
      collection(db, `${collectionName}/${documentID}/${subCollectionName}`)
    )
      .then((querySnapshot) => {
        // console.log("data read from firebase");
        // console.log("querySnapshot", querySnapshot);
        const dataArray = [];
        querySnapshot.forEach((doc) => {
          dataArray.push({ ...doc.data(), categoryID: doc.id });
        });

        const dataArr = [];
        querySnapshot.forEach((doc) => {
          dataArr.push({ ...doc.data(), categoryId: doc.id });
        });

        if (dbData[collectionName]) {
          if (dbData[collectionName][documentID]) {
            dbData[collectionName][documentID] = {
              ...dbData[collectionName][documentID],
              [subCollectionName]: dataArr,
            };
          } else {
            dbData[collectionName] = {
              ...dbData[collectionName],
              [documentID]: {
                [subCollectionName]: dataArr,
              },
            };
          }
        } else {
          dbData[collectionName] = {
            [documentID]: {
              [subCollectionName]: dataArr,
            },
          };
        }
        setFunction(dataArray);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
};

export default getDataFromSubCollection;
