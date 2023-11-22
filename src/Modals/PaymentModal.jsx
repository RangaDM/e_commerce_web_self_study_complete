import { Modal } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import db from "../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";

const PaymentModal = (props, ref) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleOpen: () => setOpen(true),
  }));

  // we can choose unique id for each document by usign setData or we can let firebase choose it for us by using addData
  const addData = () => {
    setDoc(doc(db, "category/category3/category3", "category1_item6"), {
      title : "category1 title 6",
      img : "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/beach-destinations-sri-lanka/01.jpg",
      rating : 1.5,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className=" flex flex-col items-center justify-center"
    >
      <div className=" w-[90%] bg-white">
        Yash
        <button onClick={addData}> * click here *</button>
      </div>
    </Modal>
  );
};

export default forwardRef(PaymentModal);
