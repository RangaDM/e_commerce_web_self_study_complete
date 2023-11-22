import React, { useEffect, useState } from "react";
import MainContainer from "../../Layout/MainContainer";
import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import getDataFromCollection from "../../Utils/DataFetch/getDataFromCollection";
import Loading from "../../components/Loading/Loading";

// const categoryArr = [
//   {
//     imageURL: "https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg",
//     title: "Category name 1",
//     categoryID:'category1'
//   },
//   {
//     imageURL: "https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg",
//     title: "Category name 2",
//     categoryID:'category2'
//   },
//   {
//     imageURL: "https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg",
//     title: "Category name 3",
//     categoryID:'category3'
//   },
//   {
//     imageURL: "https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg",
//     title: "Category name 4",
//     categoryID:'category4'
//   },
//   {
//     imageURL: "https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg",
//     title: "Category name 5",
//     categoryID:'category5'
//   },
//   {
//     imageURL: "https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg",
//     title: "Category name 7",
//     categoryID:'category7'
//   },
//   {
//     imageURL: "https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg",
//     title: "Category name 8",
//     categoryID:'category8'
//   },
//   {
//     imageURL: "https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg",
//     title: "Category name 9",
//     categoryID:'category9'
//   },
// ]

const Category = () => {
  
  const [categoryData , setCategoryData] = useState([]);

  useEffect(()=>{
    getDataFromCollection('category' , setCategoryData);
  },[]);
  // console.log("aharen awa data : " , categoryData);

  if(categoryData.length===0) return (<Loading/>)

  return (
    <MainContainer>
      <section
        style={{ boxShadow: "rgba( 0,0,0,0.24) 0px 3px 8px" }}
        className="w-full p-2"
      >
        <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">
          Product Categories
        </h1>
        <div className="grid grid-cols-3 grid-rows-[auto] gap-5">
          {categoryData?.map(({ image, title, categoryID }, index)=> <CategoryUnitItem
          key={index} imageURL={image} title={title} categoryID={categoryID} />)}
        </div>
      </section>
    </MainContainer>
  );
};

export default Category;

const CategoryUnitItem = ({imageURL , title , categoryID}) => {
  return (
    <Link to={`/category/${categoryID}`}>
    <ListItemButton
      sx={{
        padding: 0,
        margin: 0,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "6px",
      }}
    >
    <div className=" m-1 w-full py-6 px-3 rounded-md flex flex-col items-center">
      <img
        src={imageURL}
        alt={title} className=" rounded-full w-[50px] h-[50px]"
      />
      <h2 className=" text-[13px] sm:text-sm text-black mt-3 font-bold">{title}</h2>
    </div>
    </ListItemButton>
    </Link>
  );
};
